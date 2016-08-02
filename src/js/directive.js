


function MovieCard () {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    templateUrl: 'templates/moviecard.tpl.html',
    controller: function ($http, $scope) {
      let vm = this;

      $http.get('http://www.omdbapi.com/?i=' + $scope.name).then( (res) => {
        console.log(res.data);
        vm.movieInfo = res.data;
      });
    },

    controllerAs: 'vm'
  };
}

MovieCard.$inject = [];
export { MovieCard};