define(
    [],
    function () {
        'use strict';

        /*
         * Models can :
         * Send events
         * Register events
         * Extend Models
         * Have a lot of sub models
         * Models are :
         * Register datas
         * Sending datas
         * **/

        var Models;

        Models = Backbone.Model.extend({
            module: null,
            defaults: {},
            initialize: function (attributes, options) {
                this.module = options.module || null;

                this.listen();

                console.log('models/MODULE :: init');

            },
            listen: function () {

            },
            stopListen: function () {

            }
        });

        console.log('models/MODULE :: loaded');

        return Models;

    });