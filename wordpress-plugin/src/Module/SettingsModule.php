<?php

namespace Loopress\Module;

use Loopress\Contract\Module;
use Loopress\RestApi\SettingsController;
use Loopress\Service\SettingsService;

class SettingsModule implements Module
{
    public function __construct(private SettingsService $settings) {}

    public function boot(): void
    {
        add_action('rest_api_init', fn() => (new SettingsController($this->settings))->register_routes());
    }
}
