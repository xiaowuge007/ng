define(['jquery','angular','angularAmd','uiRouter'], function ($,angular,angularAmd) {
    var app = angular.module('myapp', ['ui.router']);//引入需要以来的模块
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
    	$urlRouterProvider.otherwise('/index');
    	$stateProvider
    	.state('fruit',angularAmd.route({
			url: '/fruit',
			templateUrl: 'fruit.html'						
		}))
    	.state('index', angularAmd.route({
			url: '/index',
			templateUrl: 'index.html',
			controller: 'index',
			controllerUrl: 'js/controller/index.js'
		}))
 		.state('vegetable', angularAmd.route({
			url: '/vegetable',
			templateUrl: 'vegetable.html'
			//controller:'veg'
		}))
		.state('fruit.orange', angularAmd.route({
			url: '/orange',
			templateUrl: 'temp/orange.html'
		}))
		.state('fruit.apple', angularAmd.route({
			url: '/apple',
			templateUrl: 'temp/apple.html'
		}))
		.state('fruit.banana', angularAmd.route({
			url: '/banana',
			templateUrl: 'temp/banana.html'
		}))
		.state('fruit.orange.aa', angularAmd.route({
			url: '/aa',
			templateUrl: 'temp/aa.html'
		}))
		.state('fruit.orange.bb', angularAmd.route({
			url: '/bb',
			templateUrl: 'temp/bb.html'
		}))
		.state('fruit.orange.cc', angularAmd.route({
			url: '/cc',
			templateUrl: 'temp/cc.html'
		}))
    }])
    
    return angularAmd.bootstrap(app);
});