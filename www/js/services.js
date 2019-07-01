

app.factory('BlankFactory', [function(){

}])
 app.factory('apiHandlers', ['$q', '$http',
    function ($q, $http) {
      'use strict';


      var apis = {
          getHomeNews: function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url ='https://api.mlab.com/api/1/databases/rac/collections/racinfo?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo';
            $http.get(url).then(function (success) {
              deferred.resolve(success);
            },function (error) {
              deferred.reject(error);
            });
            return promise;
          },
          getAnswer: function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url ='https://api.mlab.com/api/1/databases/rac/collections/QuestionPost?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo';
            $http.get(url).then(function (success) {
              deferred.resolve(success);
            },function (error) {
              deferred.reject(error);
            });
            return promise;
          },
          getJob: function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url ='https://api.mlab.com/api/1/databases/rac/collections/jobPost?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo';
            $http.get(url).then(function (success) {
              deferred.resolve(success);
            },function (error) {
              deferred.reject(error);
            });
            return promise;
          },
          AddNewPost: function (post) {
            console.log(post);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('https://api.mlab.com/api/1/databases/rac/collections/racinfo?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo',post).then(function (data) {
              deferred.resolve(data.data);
            },function (data) {
              deferred.reject(data)
            });
            return promise;
          },
          deletePost: function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.delete('https://api.mlab.com/api/1/databases/rac/collections/racinfo/'+id+'?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo').then(function (data) {
              deferred.resolve(data.data);
            },function (data) {
              deferred.reject(data)
            });
            return promise;
          },
          AddReagPost: function (post) {
            console.log(post);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('https://api.mlab.com/api/1/databases/rac/collections/userinfo?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo',post).then(function (data) {
              deferred.resolve(data.data);
            },function (data) {
              deferred.reject(data)
            });
            return promise;
          },
          getReagInfo: function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url ='https://api.mlab.com/api/1/databases/rac/collections/userinfo?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo';
            $http.get(url).then(function (success) {
              deferred.resolve(success);
            },function (error) {
              deferred.reject(error);
            });
            return promise;
          },
          getuserId: function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('https://api.mlab.com/api/1/databases/rac/collections/userinfo/'+id+'?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo').then(function (data) {
              deferred.resolve(data.data);
            },function (data) {
              deferred.reject(data)
            });
            return promise;
          },
          AddShopPost: function (post) {
            console.log(post);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('https://api.mlab.com/api/1/databases/rac/collections/addShop?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo',post).then(function (data) {
              deferred.resolve(data.data);
            },function (data) {
              deferred.reject(data)
            });
            return promise;
          } ,
          getAddShop: function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url ='https://api.mlab.com/api/1/databases/rac/collections/addShop?apiKey=Gf-nv2EQVsvaVdybeZPxPbJWVAK3yXJo';
            $http.get(url).then(function (success) {
              deferred.resolve(success);
            },function (error) {
              deferred.reject(error);
            });
            return promise;
          },

    };

return apis;


}])

.service('BlankService', [function(){

}]);
