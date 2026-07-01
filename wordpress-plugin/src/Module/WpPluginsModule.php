<?php

namespace Loopress\Module;

use Loopress\Contract\Module;
use Loopress\RestApi\PluginController;
use Loopress\Service\PluginService;

class WpPluginsModule implements Module
{
    private PluginService $service;

    public function __construct()
    {
        $this->service = new PluginService();
    }

    public function boot(): void
    {
        add_action('rest_api_init', fn() => (new PluginController($this->service))->register_routes());
    }
}
