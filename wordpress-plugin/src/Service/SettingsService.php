<?php

namespace Loopress\Service;

use Loopress\Exception\ProductionLockException;

class SettingsService
{
    public function getSettings(): array
    {
        return [
            'environment'     => $this->getEnvironment(),
            'production_lock' => $this->isLocked(),
            'lock_source'     => $this->lockSource(),
        ];
    }

    public function getEnvironment(): string
    {
        if (defined('LOOPRESS_ENVIRONMENT')) {
            return LOOPRESS_ENVIRONMENT;
        }
        return 'development';
    }

    public function isLocked(): bool
    {
        if (defined('LOOPRESS_PRODUCTION_LOCK')) {
            return (bool) LOOPRESS_PRODUCTION_LOCK;
        }
        return (bool) get_option('loopress_production_lock', false);
    }

    public function lockSource(): string
    {
        return defined('LOOPRESS_PRODUCTION_LOCK') ? 'constant' : 'ui';
    }

    public function updateLock(bool $locked): void
    {
        if (defined('LOOPRESS_PRODUCTION_LOCK')) {
            throw new ProductionLockException('Production lock is controlled by a constant and cannot be changed via the UI.');
        }
        update_option('loopress_production_lock', $locked);
    }
}
