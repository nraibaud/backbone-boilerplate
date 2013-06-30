define(
    ['hybrid'],
    function () {
        'use strict';

        /*
         * Controller can :
         * Instantiate modules
         * Register modules
         * Send events
         * Register events
         * Extend Controllers
         * TODO Set default class to be instantiate @initialize (ex: collections or models)
         * Controllers are :
         * Managing MV
         * **/

        var Controller;

        Controller = Backbone.Controller.extend({
            module: null,
            initialize: function (options) {
                this.module = options.module || options;

                this.listen();

                console.log('controller/MODULE :: init');

            },
            listen: function () {
            },
            stopListen: function () {
            }
        });

        console.log('controller/MODULE :: loaded');

        return Controller;

    });