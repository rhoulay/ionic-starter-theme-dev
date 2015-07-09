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
        $scope.listCanSwipe = true
        $scope.toggleShouldRecord = function(){
            $scope.shouldShowDelete = !$scope.shouldShowDelete;
        }
        $scope.toggleShouldShowReorder = function(){
            $scope.shouldShowReorder = !$scope.shouldShowReorder;
        }


    })
;
