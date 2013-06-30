define([
    'hybrid',
    App.modulesRoutersPath + 'MODULE.routers',
    App.modulesControllersPath + 'MODULE.controllers',
    App.modulesModelsPath + 'MODULE.models',
    App.modulesCollectionsPath + 'MODULE.collections',
    App.modulesViewsPath + 'MODULE.views',
    App.modulesTemplatesPath + 'MODULE.templates'
],

    function (H, Router, Controller, Models, Collections, Views, templates) {
        'use strict';

        /*
         * MODULE can :
         * Have Properties
         * Have Class
         * Have methods
         * TODO Set options, initialize
         * MODULES are :
         * Group of module dependencies (Can also be made on requie.config in shim:module:deps)
         * Register Class
         * Register and auto instantiate MVC
         * **/

        var module;

        module = {
            name: 'MODULE',
            Router: Router,
            Controller: Controller,
            Models: Models,
            Collections: Collections,
            Views: Views,
            templates: templates
        };

        module.Module = Backbone.Module.extend(module);

        console.log('module/MODULE :: loaded');

        return module;

    });