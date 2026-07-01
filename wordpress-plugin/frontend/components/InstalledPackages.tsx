import React, { useState, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Notice, Spinner } from '@wordpress/components';
import { apiFetch, ApiError } from '../api';
import { ComposerOutput } from './ComposerOutput';
import type { Package, ComposerResult } from '../types';

interface RemoveState {
    name: string;
    output?: string | null;
    error: string | null;
}

export function InstalledPackages() {
    const queryClient = useQueryClient();
    const [removingOutput, setRemovingOutput] = useState<RemoveState | null>(null);
    const [confirmingRemove, setConfirmingRemove] = useState<string | null>(null);
    const confirmTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const { data: packages = [], isFetching, isError } = useQuery<Package[]>({
        queryKey: ['installed-packages'],
        queryFn: () => apiFetch<Package[]>('/composer/installed'),
        staleTime: 30_000,
    });

    const { mutate: removePackage, isPending: removing, variables: removingPkg } = useMutation<ComposerResult, ApiError, string>({
        mutationFn: (packageName) => apiFetch<ComposerResult>('/composer/remove', {
            method: 'POST',
            body: JSON.stringify({ package: packageName }),
        }),
        onSuccess: (data, packageName) => {
            setRemovingOutput({ name: packageName, output: data?.output, error: null });
            queryClient.invalidateQueries({ queryKey: ['installed-packages'] });
        },
        onError: (err, packageName) => {
            setRemovingOutput({ name: packageName, output: err.output, error: err.message });
        },
    });

    const handleRemoveClick = (pkgName: string) => {
        if (confirmingRemove === pkgName) {
            if (confirmTimer.current) clearTimeout(confirmTimer.current);
            setConfirmingRemove(null);
            removePackage(pkgName);
        } else {
            if (confirmTimer.current) clearTimeout(confirmTimer.current);
            setConfirmingRemove(pkgName);
            confirmTimer.current = setTimeout(() => setConfirmingRemove(null), 3000);
        }
    };

    const isInitialLoad = packages.length === 0 && isFetching;

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                <strong style={{ fontSize: 13 }}>Installed Packages</strong>
                {isFetching && !isInitialLoad && <Spinner />}
            </div>

            {isError && (
                <Notice status="error" isDismissible={false}>
                    Failed to load installed packages.
                </Notice>
            )}

            {isInitialLoad && (
                <>
                    <style>{`@keyframes lp-pulse{0%,100%{opacity:1}50%{opacity:.4}}`}</style>
                    {[0, 1, 2].map(i => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            padding: '8px 0', borderBottom: '1px solid #f0f0f0',
                            animation: `lp-pulse 1.5s ease-in-out ${i * 0.15}s infinite`,
                        }}>
                            <div style={{ height: 12, width: 160, background: '#e0e0e0', borderRadius: 4 }} />
                            <div style={{ height: 12, width: 60, background: '#e0e0e0', borderRadius: 4 }} />
                        </div>
                    ))}
                </>
            )}

            {!isInitialLoad && !isError && packages.length === 0 && (
                <p style={{ color: '#666', fontSize: 13, margin: 0 }}>
                    No packages installed yet. Search for a package above to get started.
                </p>
            )}

            {packages.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
                            <th style={{ padding: '6px 8px' }}>Package</th>
                            <th style={{ padding: '6px 8px', whiteSpace: 'nowrap' }}>Version</th>
                            <th style={{ padding: '6px 8px' }} />
                        </tr>
                    </thead>
                    <tbody>
                        {packages.map((pkg) => {
                            const isConfirming = confirmingRemove === pkg.name;
                            const isRemoving = removing && removingPkg === pkg.name;
                            return (
                                <tr key={pkg.name} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                    <td style={{ padding: '8px' }}>
                                        <strong>{pkg.name}</strong>
                                    </td>
                                    <td style={{ padding: '8px', fontFamily: 'monospace', whiteSpace: 'nowrap', color: '#1d4ed8' }}>
                                        {pkg.version}
                                    </td>
                                    <td style={{ padding: '8px', textAlign: 'right' }}>
                                        <Button
                                            variant="tertiary"
                                            isDestructive={isConfirming || isRemoving}
                                            size="small"
                                            disabled={isRemoving}
                                            onClick={() => handleRemoveClick(pkg.name)}
                                        >
                                            {isRemoving ? <Spinner /> : isConfirming ? 'Sure?' : 'Remove'}
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}

            {removingOutput && (
                <div style={{ marginTop: 12 }}>
                    <Notice
                        status={removingOutput.error ? 'error' : 'success'}
                        isDismissible={true}
                        onRemove={() => setRemovingOutput(null)}
                    >
                        {removingOutput.error
                            ? `Failed to remove ${removingOutput.name}: ${removingOutput.error}`
                            : `${removingOutput.name} removed.`
                        }
                    </Notice>
                    <ComposerOutput output={removingOutput.output} />
                </div>
            )}
        </div>
    );
}
