// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
 var app = angular.module('app', ['ionic','ngCordova', 'ui.router'])

app.config(function($ionicConfigProvider, $sceDelegateProvider){

  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

app.run(function($ionicPlatform,$rootScope, $timeout) {
  $ionicPlatform.registerBackButtonAction(function (event) {
    if($state.current.name=="rac"){
      alert('it is Home');//it works
      window.plugins.appMinimize.minimize();
    }
    else {
      navigator.app.backHistory();
    }
  }, 100);

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      cordova.plugins.backgroundMode.enable();

    }
    document.addEventListener('deviceready', function () {
      // cordova.plugins.backgroundMode is now available
      window.plugin.backgroundMode.enable();
      cordova.plugin.backgroundMode.enable();

    }, false);
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.$on('$cordovaLocalNotification:schedule',
      function (event, notification, state) {
        cordova.plugins.backgroundMode.enable();
        window.plugin.backgroundMode.enable();

      });
    var admobid = {};
    // select the right Ad Id according to platform
    if( /(android)/i.test(navigator.userAgent) ) {
      admobid = { // for Android
        banner: 'ca-app-pub-3306226802650562/6933096012',
        interstitial: 'ca-app-pub-8831813486038704/7784386522'
      };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
      admobid = { // for iOS
        banner: 'ca-app-pub-8831813486038704/7348082881',
        interstitial: 'ca-app-pub-8831813486038704/7784386522'
      };
    } else {
      admobid = { // for Windows Phone
        banner: 'ca-app-pub-8831813486038704/7348082881',
        interstitial: 'ca-app-pub-8831813486038704/7784386522'
      };
    }

    if(window.AdMob) AdMob.createBanner( {
      adId:admobid.banner,
      position:AdMob.AD_POSITION.BOTTOM_CENTER,
      autoShow:true} );

    if(window.AdMob) AdMob.prepareInterstitial({
      adId:admobid.interstitial,
      isTesting:true,
      autoShow:false
    });


   });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });

      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
});
