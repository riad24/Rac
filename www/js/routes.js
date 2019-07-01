
app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


      .state('rac', {
    url: '/rac',

        templateUrl: 'templates/rAC.html',
        controller: 'rACCtrl'
  })
    .state('messages', {
    url: '/messages',

        templateUrl: 'templates/title.html',
        controller: 'rACCtrl'
  })

    .state('ractuls', {
    url: '/ractuls',

        templateUrl: 'templates/ractuls.html',
        controller: 'loginCtrl'
  })
    .state('video', {
      url: '/video',

      templateUrl: 'templates/video.html',
      controller: 'videoCtrl'
    })
    .state('about', {
      url: '/about',

      templateUrl: 'templates/about.html',
      controller: 'videoCtrl'
    })
    .state('signup', {
    url: '/signup',

        templateUrl: 'templates/signup.html',
        controller: 'loginCtrl'
  })
    .state('logininfo', {
    url: '/logininfo',

        templateUrl: 'templates/LoginInfo.html',
        controller: 'loginCtrl'
  })
    .state('shop', {
      url: '/shop',
          templateUrl: 'templates/shopinfo.html',
          controller: 'shopinfoCtrl'
    })
    .state('shopadd', {
      url: '/shopadd',

          templateUrl: 'templates/shopAdd.html',
          controller: 'shopinfoCtrl'
    })

    .state('rACBOOK', {
      url: '/rACBOOK',

          templateUrl: 'templates/rACBOOK.html',
          controller: 'rACBOOKCtrl'

    })
    .state('answer', {
      url: '/answer',

          templateUrl: 'templates/answear.html',
          controller: 'answerCtrl'

    })
    .state('job', {
      url: '/job',

          templateUrl: 'templates/jobPost.html',
          controller: 'jobCtrl'

    })

    .state('page9', {
      url: '/page9',

          templateUrl: 'templates/page9.html',
          controller: 'page9Ctrl'

    })

    .state('page10', {
      url: '/page10',
          templateUrl: 'templates/page10.html',
          controller: 'page9Ctrl'
    })

    .state('page11', {
      url: '/page11',

          templateUrl: 'templates/page11.html',
          controller: 'page9Ctrl'
    })

    .state('page12', {
      url: '/page12',

          templateUrl: 'templates/page12.html',
          controller: 'page9Ctrl'
    })

    .state('page13', {
      url: '/page13',
          templateUrl: 'templates/page13.html',
          controller: 'page9Ctrl'

    }) .state('page8', {
      url: '/page8',
          templateUrl: 'templates/lehkok.html',
          controller: 'page9Ctrl'

    })

    .state('1', {
      url: '/page14',
          templateUrl: 'templates/1.html',
          controller: 'page9Ctrl'

    })

    .state('page15', {
      url: '/page15',
          templateUrl: 'templates/page15.html',
          controller: 'page9Ctrl'

    })

    .state('page16', {
      url: '/page16',
          templateUrl: 'templates/page16.html',
          controller: 'page9Ctrl'


    })

    .state('page17', {
      url: '/page17',
          templateUrl: 'templates/page17.html',
          controller: 'page9Ctrl'

    })

    .state('page18', {
      url: '/page18',
          templateUrl: 'templates/page18.html',
          controller: 'page9Ctrl'
    })

    .state('page19', {
      url: '/page19',
          templateUrl: 'templates/page19.html',
          controller: 'page9Ctrl'


    })

    .state('page20', {
      url: '/page20',

          templateUrl: 'templates/page20.html',
          controller: 'page9Ctrl'


    })

    .state('page21', {
      url: '/page21',

          templateUrl: 'templates/page21.html',
          controller: 'page9Ctrl'

    })

    .state('page22', {
      url: '/page22',
          templateUrl: 'templates/page22.html',
          controller: 'page9Ctrl'

    })
    .state('page23', {
      url: '/page23',
          templateUrl: 'templates/page23.html',
          controller: 'page9Ctrl'

    })

    .state('page24', {
      url: '/page24',
          templateUrl: 'templates/page24.html',
          controller: 'page9Ctrl'
    })

    .state('page25', {
      url: '/page25',

          templateUrl: 'templates/page25.html',
          controller: 'page9Ctrl'
    })

    .state('page26', {
      url: '/page26',

          templateUrl: 'templates/page26.html',
          controller: 'page9Ctrl'

    })

    .state('page27', {
      url: '/page27',

          templateUrl: 'templates/page27.html',
          controller: 'page9Ctrl'

    })

    .state('page28', {
      url: '/page28',
          templateUrl: 'templates/page28.html',
          controller: 'page9Ctrl'
    })

    .state('page29', {
      url: '/page29',

          templateUrl: 'templates/page29.html',
          controller: 'page9Ctrl'
    })

    .state('page30', {
      url: '/page30',
          templateUrl: 'templates/page30.html',
          controller: 'page9Ctrl'
    })

    .state('page31', {
      url: '/page31',
          templateUrl: 'templates/page31.html',
          controller: 'page9Ctrl'
    })

    .state('page32', {
      url: '/page32',
          templateUrl: 'templates/page32.html',
          controller: 'page9Ctrl'

    })

    .state('page33', {
      url: '/page33',
          templateUrl: 'templates/page33.html',
          controller: 'page9Ctrl'
    })

    .state('page34', {
      url: '/page34',
          templateUrl: 'templates/page34.html',
          controller: 'page9Ctrl'
    })

    .state('page35', {
      url: '/page35',

          templateUrl: 'templates/page35.html',
          controller: 'page9Ctrl'

    })

    .state('page36', {
      url: '/page36',

          templateUrl: 'templates/page36.html',
          controller: 'page9Ctrl'
    })

    .state('page37', {
      url: '/page37',
          templateUrl: 'templates/page37.html',
          controller: 'page9Ctrl'
    })

    .state('page38', {
      url: '/page38',

          templateUrl: 'templates/page38.html',
          controller: 'page9Ctrl'


    })

    .state('page39', {
      url: '/page39',

          templateUrl: 'templates/page39.html',
          controller: 'page9Ctrl'
    })

    .state('page40', {
      url: '/page40',
          templateUrl: 'templates/page40.html',
          controller: 'page9Ctrl'

    })

    .state('iNDUSTRIALREFRIGERATION', {
      url: '/page41',
      templateUrl: 'templates/iNDUSTRIALREFRIGERATION.html',
      controller: 'page9Ctrl'
    })
    .state('rrrr', {
      url: '/rrrr',
      templateUrl: 'templates/rrrr.html',
      controller: 'page9Ctrl'
    })
    .state('starter', {
      url: '/starter',
      templateUrl: 'templates/Starter.html',
      controller: 'page9Ctrl'
    })
    .state('ttt', {
      url: '/ttt',
      templateUrl: 'templates/ttt.html',
      controller: 'page9Ctrl'
    })
    .state('air', {
      url: '/air',
      templateUrl: 'templates/AirFilters.html',
      controller: 'page9Ctrl'
    })


$urlRouterProvider.otherwise('/rac')


});
