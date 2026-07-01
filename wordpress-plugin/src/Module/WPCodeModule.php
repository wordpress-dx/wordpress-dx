<?php

namespace Loopress\Module;

use Loopress\Contract\Module;
use Loopress\RestApi\WPCodeController;
use Loopress\Service\WPCodeService;

class WPCodeModule implements Module
{
    private WPCodeService $service;

    public function __construct()
    {
        $this->service = new WPCodeService();
    }

    public function boot(): void
    {
        add_action('rest_api_init', fn() => (new WPCodeController($this->service))->register_routes());
    }
}
