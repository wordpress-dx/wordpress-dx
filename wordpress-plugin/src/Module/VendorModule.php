<?php

namespace Loopress\Module;

use Loopress\Contract\Module;
use Loopress\Infrastructure\ComposerRunner;
use Loopress\Infrastructure\LoopressEnvironment;
use Loopress\Infrastructure\PackagistClient;
use Loopress\RestApi\VendorController;
use Loopress\Service\SettingsService;
use Loopress\Service\VendorService;

class VendorModule implements Module
{
    private VendorService $service;

    public function __construct(LoopressEnvironment $env, SettingsService $settings)
    {
        $this->service = new VendorService(
            $env,
            new ComposerRunner($env),
            new PackagistClient(),
            $settings,
        );
    }

    public function boot(): void
    {
        add_action('rest_api_init', fn() => (new VendorController($this->service))->register_routes());
    }
}
