define(['hybrid'], function () {
    'use strict';

    /*
     * Collections can :
     * Send events
     * Register events
     * Extend Collections
     * Have a lot of sub collections
     * Collections are :
     * A collection of models (same models by inherit or switch case)
     * **/

    var Collections = {};

    Collections.Main = Backbone.Collection.extend({
        initialize: function (models,options) {
            this.module = options.module || null;

            this.listen();

            console.log('collections/MODULE :: init');

        },
        listen: function () {

        },
        stopListen: function () {

        }
    });

    console.log('collections/MODULE :: loaded');

    return Collections;

});