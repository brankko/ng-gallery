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


gallery.controller('homeController', function($scope){
	$scope.debug = 'Home dfsfsdfde';
});


gallery.controller('usersController', function($scope, $http){
	$scope.debug = 'Users';

	$http.get('data/users.json').success(function(data){
		$scope.users = data;
	});

});


gallery.controller('profileController', function($scope){
	$scope.debug = 'Profile';
});


gallery.controller('photosController', function($scope, $http){
	$scope.debug = 'Photos';

	$http.get('data/photos.json').success(function(data){
		$scope.photos = data;
	});
});


gallery.controller('photoController', function($scope){
	$scope.debug = 'Single photo';
});


gallery.controller('submitController', function($scope){
	$scope.debug = 'Submit';
});
