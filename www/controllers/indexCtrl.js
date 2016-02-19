'use strict';

angular.module('openstore').controller('indexCtrl', function($scope, $rootScope, $state, $modal, $location) {
    $scope.$state = $state;

    $rootScope.loginModal = function() {
        $modal.open({
            templateUrl: '/partials/login.html',
        });
    };

    var url = $location.protocol() + '://' + $location.host() + '/';
    var defaultTitle = 'OpenStore';
    var defaultOg = {
        title: defaultTitle,
        description: 'OpenStore for Ubuntu Touch',
        image: url + 'assets/img/logo.png',
        url: url + 'apps',
    };

    $rootScope.title = defaultTitle;
    $rootScope.og = angular.copy(defaultOg);

    $rootScope.$on('$stateChangeStart', function() {
        $rootScope.title = defaultTitle;
        $rootScope.og = angular.copy(defaultOg);

        $('#menu').collapse('hide');
    });

    $rootScope.setOG = function(title, og) {
        og = angular.extend(defaultOg, og);
        og.title = title;
        og.image = og.image.replace('{url}', url);
        og.url = og.url.replace('{url}', url);

        if (title != defaultTitle) {
            title = title + ' - ' + defaultTitle;
        }

        $rootScope.title = title;
        $rootScope.og = og;
    };
});
