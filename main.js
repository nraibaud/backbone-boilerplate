// Define App as global object
var App = {
};



/*
 * RequireJS configuration
 * */
require.config({
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone',
            init: function () {

                // Extend Backbone, implement Controller
                Backbone.Controller = function (options) {
                    this.options = options || {};

                    if (_.isFunction(this.initialize)) {
                        this.initialize(this.options);
                    }
                };
                _.extend(Backbone.Controller, Backbone.Events);
                Backbone.Controller.extend = Backbone.Model.extend;


                // Extend Backbone, implement Template
                Backbone.Template = function (options) {
                    this.options = options || {};

                    if (_.isFunction(this.initialize)) {
                        this.initialize(this.options);
                    }
                };
                _.extend(Backbone.Template, Backbone.Events);
                Backbone.Template.extend = Backbone.Model.extend;


                // Extend Backbone, implement Module
                Backbone.Module = function (options) {
                    this.options = options || {};
                    this.autoInstantiate = this.options.autoInstantiate || true;
                    this.name = this.name;

                    console.log(this.name.toUpperCase() + ' :: instantiate');

                    if (this.autoInstantiate) {
                        _.extend(this, {templates: this.templates});
                        if (this.Controller) this.controller = new this.Controller(this);
                        if (this.Router) this.router = new this.Router(this);

                        if (this.Views) this.views = {};
                        if (this.Collections) this.collections = {};
                        if (this.Models) this.models = {};
                    }

                    return this;

                };
                _.extend(Backbone.Module, Backbone.Events);
                Backbone.Module.extend = Backbone.Model.extend;
            }
        }
    }

});


/*
 * Define Main module
 * */
define(
    [ App.modulesPath + 'app.module'],
    function (application) {
        'use strict';

        // Instantiate Application
        new application.Module();

        // Start Backbone history
        Backbone.history.start();

    });