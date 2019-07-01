

app.controller('rACCtrl', ['$scope', '$rootScope', '$ionicPlatform','$state','$window','$interval', '$stateParams','apiHandlers','$ionicPopup','$cordovaLocalNotification',
function ($scope,$rootScope,$ionicPlatform, $state,$window,$interval, $stateParams,apiHandlers,$ionicPopup,$cordovaLocalNotification) {
    apiHandlers.getJob().then(function (posts) {
      $scope.lastCount = posts.data.length;
      $scope.last = $scope.lastCount;
    });

  // job reload function and Notification===================================>
    $scope.reload = function () {
      apiHandlers.getJob().then(function (posts) {
        $scope.lastCount = posts.data.length;
        $scope.lastdata = posts.data[posts.data.length - 1];
        $scope.titledata=$scope.lastdata.title;
      });
      if ($scope.lastCount == $scope.last) {
      } else {
        apiHandlers.getJob().then(function (posts) {
          $scope.last = posts.data.length;
        });
        var text=$scope.titledata;
        $cordovaLocalNotification.schedule({
          id: 2,
          text: text,
          title: 'রেফ্রিজারেশন নতুন চাকরী',
          icon: 'file://img/icon.png'

        }).then(function () {
          $state.go('job');
        });
      }
    };
    $scope.reload();
    $interval($scope.reload, 5000);

  // Answer reload function and Notification===========================
    apiHandlers.getAnswer().then(function (posts) {
      $scope.lastCounts = posts.data.length;
      $scope.lasts = $scope.lastCounts;
    });
    $scope.reloads = function () {
      apiHandlers.getAnswer().then(function (posts) {
        $scope.lastCounts = posts.data.length;
        $scope.lastdatas = posts.data[posts.data.length - 1];
        $scope.titledatas=$scope.lastdatas.Question;

      });
      if ($scope.lastCounts == $scope.lasts) {

      } else {
        apiHandlers.getAnswer().then(function (posts) {
          $scope.lasts = posts.data.length;
        });
        var text=$scope.titledatas;
        $cordovaLocalNotification.schedule({
          id: 2,
          text: text,
          title: 'রেফ্রিজারেশন নতুন প্রশ্ন/উত্তর',
          icon: 'file://img/icon.png'

        }).then(function () {
          $state.go('answer');
        });
      }
    };
    $scope.reloads();
    $interval($scope.reloads, 5000);

  apiHandlers.getHomeNews().then(function (posts) {
    localStorage.setItem('message', posts.data[0].message );
  });
   apiHandlers.getHomeNews().then(function (posts) {
    localStorage.setItem('message2', posts.data[0].message );
  });
  $scope.getmessage =localStorage.getItem('message');

}]);
app.controller('loginCtrl', ['$scope','$state', '$stateParams','apiHandlers','$timeout','$ionicPopup',
  function ($scope,$state, $stateParams,apiHandlers,$timeout,$ionicPopup) {

  $scope.$on('$ionicView.beforeEnter', function(e) {
    // console.log("Entering");
    if (window.AdMob) AdMob.showInterstitial();
  });
  $scope.$on('$ionicView.beforeLeave', function(e) {
    // console.log("leaving");
    if (window.AdMob) AdMob.showInterstitial();
  });

}]);
  app.controller('shopinfoCtrl', ['$scope','$state','$window', '$stateParams','apiHandlers','$ionicPopup',
function ($scope,$state,$window, $stateParams,apiHandlers,$ionicPopup) {

  $scope.AddShop= function (data) {
    console.log(data);
    apiHandlers.AddShopPost(data).then(function (success) {
      if(success){
        $scope.lodFunctio();
        $state.go('shop');
      }
    }, function (error) {
      console.log(error)
    });
  };
  $scope.lodFunctio= function () {
    apiHandlers.getAddShop().then(function (posts) {
      localStorage.setItem('AddShops',JSON.stringify(posts.data));
    });
    $scope.getShop =JSON.parse( window.localStorage.getItem('AddShops'));
  }
  $scope.getShop =JSON.parse( window.localStorage.getItem('AddShops'));

}])

app.controller('rACBOOKCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {



}])
 app.controller('answerCtrl', ['$scope','$interval','$state','$window', '$stateParams','apiHandlers','$ionicPopup',
    function ($scope,$interval, $state,$window, $stateParams,apiHandlers,$ionicPopup) {





      $scope.load= function () {
        apiHandlers.getAnswer().then(function (posts) {
          localStorage.setItem('getAnswerQ', JSON.stringify(posts.data));
        });
        $scope.getanswer =JSON.parse( window.localStorage.getItem('getAnswerQ'));

      };
      $scope.load();
      $interval($scope.load, 2000);
      $scope.getanswer =JSON.parse( window.localStorage.getItem('getAnswerQ'));

    }])
 app.controller('jobCtrl', ['$scope','$cordovaLocalNotification','$interval','$rootScope','$ionicPlatform','$state','$window', '$stateParams','apiHandlers','$ionicPopup',
    function ($scope,$cordovaLocalNotification, $interval,$rootScope,$ionicPlatform, $state,$window, $stateParams,apiHandlers,$ionicPopup) {

      $scope.load= function () {
        apiHandlers.getJob().then(function (posts) {
          localStorage.setItem('JobPost',JSON.stringify(posts.data));
          console.log($scope.getjobPost);
        });
        $scope.getjobPost =JSON.parse(localStorage.getItem('JobPost'));
      };
      $scope.load();
      $interval($scope.load, 2000);

      apiHandlers.getJob().then(function (posts) {
        localStorage.setItem('JobPost',JSON.stringify(posts.data));
      console.log($scope.getjobPost);
      });
      $scope.getjobPost =JSON.parse(localStorage.getItem('JobPost'));
 }]);

app.controller('videoCtrl', ['$scope', '$stateParams','$ionicPopover',
function ($scope, $stateParams,$ionicPopover) {
  $ionicPopover.fromTemplateUrl('videopopover.html', {
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

}]);

app.controller('page9Ctrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}]);
app.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
    function ($scope, $stateParams) {

   }]);

