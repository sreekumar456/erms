
controllers.controller('HomeController',['UserService', '$rootScope',
    function(UserService, $rootScope){
    // $scope.myInterval = 5000;
    // $scope.travissVersion = "";
//    var slides = $scope.slides = [{image:'images/Gantry.jpg',text: 'Gantry'},{image:'images/Toll.jpg',text:'Toll Point'}];  

		var vm = this;

        vm.user = null;
        vm.allUsers = [];
        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        } 
   
}]);
