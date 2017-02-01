(function(window) {

  angular.module('myApp')
  //scope is the glue between models and the view(the stick we were holding)
  .controller('myController', [
    '$scope',
    'Posts',
    function($scope, Posts){
    $scope.res = [];
      Posts.getPosts()
        .then(function(res){
        $scope.myPosts = res.data.data;
        $scope.visible = true;
        $scope.notVisible = false;

        $scope.toggleList = function(){
          $scope.visible = true;
          $scope.notVisible = false;
        };

        $scope.toggleGrid = function(){
          $scope.visible = false;
          $scope.notVisible = true;
        };

          console.log('$scope.toggle(): ', $scope.toggle);
          console.log('$scope.visible: ', $scope.visible);
          console.log('$scope.notVisible: ', $scope.notVisible);
          console.log('$scope.post: ', $scope.myPosts);
      });
  }])

}(window, angular));