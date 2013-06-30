define(
    [],
    function () {
        'use strict';

        /*
         * Views can :
         * Send events
         * Register events
         * Extend Views
         * Have a lot of sub Views
         * Views are :
         * DOM events
         * Populate HTML and Templates
         * Rendering HTML and Templates
         * **/

        var Views;


        Views = {};

        Views.Main = Backbone.View.extend({
            el: '',
            id: 'app',
            template: null,
            module: null,
            initialize: function (properties, options) {
                this.module = options.module || this.module;
                this.template = options.template || this.template;

                this.listen();

                console.log('views/MODULE :: init');

            },
            events: {

            },
            render: function () {

            },
            listen: function () {

            },
            stopListen: function () {

            }
        });

        console.log('views/MODULE :: loaded');

        return Views;

    });