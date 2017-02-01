angular.module('myApp')
  .provider('Posts', function(){
    this.endpoint = '';
    this.setEndpoint = function(endpoint){
      this.endpoint = endpoint;
    };

    this.$get = ['$http', function($http){
      var endpoint = this.endpoint;
      return {
        getPosts : function(){
          return $http.jsonp(endpoint);
        }
      };
    }];
  }
);