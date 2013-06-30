define(
    [],
    function () {
        'use strict';

        /*
         * Router can :
         * Instantiate modules
         * Register modules
         * Trigger events
         * Trigger controller methods
         * Routers are :
         * Managing application
         * **/

         var Router;

        Router = Backbone.Router.extend({
            initialize: function (options) {
                this.module = options.module || options;

                console.log('router/MODULE :: init');

            }
        });

        console.log('router/MODULE :: loaded');

        return Router;

    });