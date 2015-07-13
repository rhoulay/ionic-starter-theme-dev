angular.module('starter.controllers', [])
    .controller('AppCtrl', function($scope) {

    })
    .controller('ActionSheetCtrl', function($scope, $ionicActionSheet){
        $scope.show = function() {

            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<b>Share</b> This' },
                    { text: 'Move' }
                ],
                destructiveText: 'Delete',
                titleText: 'Modify your album',
                cancelText: 'Cancel',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {
                    return true;
                }
            });
        };
    })
    .controller('AdvanceListCtrl', function($scope){
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

        $scope.toggleShouldDelete = function(){
            $scope.shouldShowDelete = !$scope.shouldShowDelete;
        }
        $scope.toggleShouldShowReorder = function(){
            $scope.shouldShowReorder = !$scope.shouldShowReorder;
        }
    })
    .controller('LoadingCtrl', function($scope, $ionicLoading, $timeout) {
        $scope.show = function() {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $timeout(function(){
            $ionicLoading.hide();
        }, 2000);
    })
    .controller('ModalCtrl', function($scope, $ionicModal) {
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

        $scope.$on('$stateChangeStart', function(){
            console.log("hi")
            $scope.modal.hide();
        });
    })
    .controller('PopoverCtrl', function($scope, $ionicPopover) {

        // .fromTemplate() method
        var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        // .fromTemplateUrl() method
        $ionicPopover.fromTemplateUrl('my-popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });


        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.popover.remove();
        });
        // Execute action on hide popover
        $scope.$on('popover.hidden', function() {
            // Execute action
        });
        // Execute action on remove popover
        $scope.$on('popover.removed', function() {
            // Execute action
        })
    });
