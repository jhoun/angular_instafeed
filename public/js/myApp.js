(function(window, angular){
  // creation uses a 2nd array argument to import dependencies
  // creates a new module, put any dependencies in array
  angular.module('myApp', []);

  // retrieval has only one argument
  // getting the module, will run many times
  var app = angular.module('myApp');

  app
      .config(['PostsProvider', '$sceProvider', function(PostsProvider, $sceProvider){
          // config
          $sceProvider.enabled(false);
          PostsProvider.setEndpoint('https://api.instagram.com/v1/users/225686578/media/recent/?count=99&&access_token=225686578.dc71f71.55a11c297d66489ca4904cdddb7a0584');
      }])
      .run(function(){
          // initialize
      });

}(window, angular))