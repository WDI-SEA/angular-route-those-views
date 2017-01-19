angular.module('App')
.controller('CastCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.casts = [
		{
			name: 'Kit Harington',
			as: 'Jon Snow',
			imdbUrl: 'http://www.imdb.com/name/nm3229685/?ref_=tt_cl_t4',
			image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/dwRmvQUkddCx6Xi7vDrdnQL4SJ0.jpg'
		},
		{
			name: 'Emilia Clarke',
			as: 'Daenerys Targaryen',
			imdbUrl: 'http://www.imdb.com/name/nm3592338/?ref_=tt_cl_t3',
			image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/tB1nE2LJH81f5UMiGhKCSlaqsF1.jpg'
		},
		{
			name: 'Peter Dinklage',
			as: 'Tyrion Lannister',
			imdbUrl: 'http://www.imdb.com/name/nm0227759/?ref_=tt_cl_t1',
			image: 'https://image.tmdb.org/t/p/original/xuB7b4GbARu4HN6gq5zMqjGbkwF.jpg'
		},
		{
			name: 'Lena Headey',
			as: 'Cercei Lannister',
			imdbUrl: 'http://www.imdb.com/name/nm0372176/?ref_=tt_cl_t2',
			image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/wcpy6J7KLzmVt0METboX3CZ0Jp.jpg'
		},
		{
			name: 'Nikolaj Coster-Waldau',
			as: 'Jaime Lannister',
			imdbUrl: 'http://www.imdb.com/name/nm0182666/?ref_=tt_cl_t7',
			image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qDCSP0CiCQIQwEzZJoH6NX5FdsT.jpg'
		},
		{
			name: 'Sophie Turner',
			as: 'Sansa Stark',
			imdbUrl: 'http://www.imdb.com/name/nm3849842/?ref_=tt_cl_t5',
			image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4JdKHSygWsMsB3ek4TthERIHvla.jpg'
		}
	];
}])