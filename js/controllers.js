angular.module('starter.controllers', [])
    .controller('AppCtrl', function ($scope) {

    })
    .controller('ActionSheetCtrl', function ($scope, $ionicActionSheet) {
        $scope.show = function () {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share</b> This' },
                    { text: 'Move' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    return true;
                }
            });
        };
    })
    .controller('AdvanceListCtrl', function ($scope) {
        $scope.items = [
            { title: 'Reggae', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
            { title: 'Chill', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
            { title: 'Dubstep', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
            { title: 'Indie', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
            { title: 'Rap', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' },
            { title: 'Cowbell', img: 'img/ionic.png', description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium' }
        ];
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true;

        $scope.toggleShouldDelete = function () {
            $scope.shouldShowDelete = !$scope.shouldShowDelete;
        }
        $scope.toggleShouldShowReorder = function () {
            $scope.shouldShowReorder = !$scope.shouldShowReorder;
        }
    })
    .controller('LoadingCtrl', function ($scope, $ionicLoading, $timeout) {
        $scope.show = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $timeout(function () {
            $ionicLoading.hide();
        }, 2000);
    })
    .controller('ModalCtrl', function ($scope, $ionicModal) {
        $ionicModal.fromTemplateUrl('templates/modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function () {
            $scope.modal.show();
        };
        $scope.closeModal = function () {
            $scope.modal.hide();
        };

        $scope.$on('$stateChangeStart', function () {
            console.log("hi")
            $scope.modal.hide();
        });
    })
    .controller('PopoverCtrl', function ($scope, $ionicPopover) {

        // .fromTemplate() method
        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        // .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function (popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function ($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function () {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function () {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function () {
            // Execute action
        });
    })

    .controller('PopupCtrl', function ($scope, $ionicPopup, $timeout) {
// Triggered on a button click, or some other target
        $scope.showPopup = function () {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });
            myPopup.then(function (res) {
                console.log('Tapped!', res);
            });
            $timeout(function () {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);
        };
        // A confirm dialog
        $scope.showConfirm = function () {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Consume Ice Cream',
                template: 'Are you sure you want to eat this ice cream?'
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };
        // An alert dialog
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Don\'t eat that!',
                template: 'It might taste good'
            });
            alertPopup.then(function (res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        };
    })
;
