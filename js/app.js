// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: "/app",
                abstract: true,
                templateUrl: "templates/menu.html",
                controller: 'AppCtrl'
            })
            .state('app.header', {
                url: "/header",
                views: {
                    'menuContent': {
                        templateUrl: "templates/header.html"
                    }
                }
            })
            .state('app.subHeader', {
                url: "/sub-header",
                views: {
                    'menuContent': {
                        templateUrl: "templates/sub-header.html"
                    }
                }
            })
            .state('app.content', {
                url: "/content",
                views: {
                    'menuContent': {
                        templateUrl: "templates/content.html"
                    }
                }
            })
            .state('app.footer', {
                url: "/footer",
                views: {
                    'menuContent': {
                        templateUrl: "templates/footer.html"
                    }
                }
            })
            .state('app.buttons', {
                url: "/buttons",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons.html"
                    }
                }
            })
            .state('app.blockButtons', {
                url: "/block-buttons",
                views: {
                    'menuContent': {
                        templateUrl: "templates/block-buttons.html"
                    }
                }
            })
            .state('app.fullWidth', {
                url: "/full-width",
                views: {
                    'menuContent': {
                        templateUrl: "templates/full-width.html"
                    }
                }
            })
            .state('app.differentSizes', {
                url: "/different-sizes",
                views: {
                    'menuContent': {
                        templateUrl: "templates/different-sizes.html"
                    }
                }
            })
            .state('app.outlined', {
                url: "/outlined",
                views: {
                    'menuContent': {
                        templateUrl: "templates/outlined.html"
                    }
                }
            })
            .state('app.clear', {
                url: "/clear",
                views: {
                    'menuContent': {
                        templateUrl: "templates/clear.html"
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/header');
    });
