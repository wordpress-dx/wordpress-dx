<?php

namespace Loopress;

use Loopress\Contract\Module;
use Loopress\Infrastructure\LoopressEnvironment;
use Loopress\Module\AdminPageModule;
use Loopress\Module\RestCacheModule;
use Loopress\Module\SettingsModule;
use Loopress\Module\VendorModule;
use Loopress\Module\WPCodeModule;
use Loopress\Module\WpPluginsModule;
use Loopress\Service\SettingsService;

class Plugin
{
    public function __construct()
    {
        $env      = new LoopressEnvironment();
        $settings = new SettingsService();

        $env->ensureInitialized();

        $autoloadError = null;
        $autoload      = $env->getAutoloadPath();
        if ($autoload) {
            try {
                ob_start();
                require_once $autoload;
                ob_end_clean();
            } catch (\RuntimeException $e) {
                ob_end_clean();
                $autoloadError = $e->getMessage();
            }
        }

        /** @var Module[] $modules */
        $modules = apply_filters('loopress_modules', [
            new AdminPageModule($autoloadError),
            new VendorModule($env, $settings),
            new SettingsModule($settings),
            new WPCodeModule(),
            new WpPluginsModule(),
            new RestCacheModule(),
        ]);

        foreach ($modules as $module) {
            $module->boot();
        }
    }
}
