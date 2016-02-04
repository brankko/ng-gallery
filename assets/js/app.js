var gallery = angular.module('ngGallery', [
	'ngRoute'
]);


gallery.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	}).
	when('/users', {
		templateUrl: 'partials/users.html',
		controller: 'usersController'
	}).
	when('/profile/:user_id', {
		templateUrl: 'partials/profile.html',
		controller: 'profileController'
	}).
	when('/photos', {
		templateUrl: 'partials/photos.html',
		controller: 'photosController'
	}).
	when('/photo/:photo_id', {
		templateUrl: 'partials/photo.html',
		controller: 'photoController'
	}).
	when('/submit', {
		templateUrl: 'partials/submit.html',
		controller: 'submitController'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);


gallery.controller('homeController', function($scope, $http){

	$http.get('data/photos.json').success(function(data){
		$scope.photos = shuffleArray(data);
	});
});


gallery.controller('usersController', function($scope, $http){
	$scope.debug = 'Users';

	$http.get('data/users.json').success(function(data){
		$scope.users = data;
	});

	$scope.limit = 4;

	$scope.viewAll = function(){
		$scope.limit = $scope.users.length;
	};

});


gallery.controller('profileController', function($scope, $http, $routeParams){
	$scope.debug = 'Profile';

	$http.get('data/users.json').success(function(data){
		$scope.users = data;
	});

	$http.get('data/photos.json').success(function(data){
		$scope.photos = data;
	});

	$scope.id = Number($routeParams.user_id);

});


gallery.controller('photosController', function($scope, $http){
	$scope.debug = 'Photos';

	$http.get('data/photos.json').success(function(data){
		$scope.photos = data;
	});
});


gallery.controller('photoController', function($scope, $http, $routeParams){
	
	$http.get('data/photos.json').success(function(data){
		$scope.photos = data;
	});

	$scope.id = Number($routeParams.photo_id);
});


gallery.controller('submitController', function($scope){
	$scope.debug = 'Submit';
});


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}