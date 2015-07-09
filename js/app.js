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
            .state('app.buttonsFullWidth', {
                url: "/buttons-full-width",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-full-width.html"
                    }
                }
            })
            .state('app.buttonsDifferentSizes', {
                url: "/buttons-different-sizes",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-different-sizes.html"
                    }
                }
            })
            .state('app.buttonsOutlined', {
                url: "/buttons-outlined",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-outlined.html"
                    }
                }
            })
            .state('app.buttonsClear', {
                url: "/buttons-clear",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-clear.html"
                    }
                }
            })
            .state('app.buttonsIcons', {
                url: "/buttons-icons",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-icons.html"
                    }
                }
            })
            .state('app.buttonsHeaders', {
                url: "/buttons-headers",
                views: {
                    'menuContent': {
                        templateUrl: "templates/buttons-headers.html"
                    }
                }
            })
        ;
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/header');
    });
