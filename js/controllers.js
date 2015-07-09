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
    });
