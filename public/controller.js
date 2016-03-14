// Code goes here

(function () {
    var app = angular.module("lolCatApp", []);

    var MainController = function ($scope, $http, $filter) {

        $scope.clear = function () {
            $scope.bank = null;
            $scope.message = "";
            $scope.rt = 0;
        }
        $scope.init = function () {
            $scope.status();
            $scope.projects();
            $scope.filterExpression = {}
            $scope.enableText = true;
            //$scope.project.installDate = null;
        }
        var bankExist = true; //Variable that evaluates if the bank exists.
        console.log("INSIDE DA BANK");

        //ADD PROJECT  
        $scope.addProject = function () {
            console.log(bankExist);
            console.log($scope.project);
            if (!bankExist) {
                $scope.apply(function () {
                    $scope.addBank();
                });
            }
<<<<<<< HEAD

            $scope.project.rt = $scope.bank.rt;
            console.log(bankExist);
            console.log($scope.project);


=======
            $scope.project.rt = $scope.bank.rt;
            console.log(bankExist);
            console.log($scope.project);
>>>>>>> origin/master
            $http.post("/addProject", $scope.project).success(function (response, err) {
                if (err) {
                    console.log('err:' + err);
                    return;
                    console.log('response.success : ' + response.success)
                };
                if (response.success) {
                    console.log("This Project is now inserted");
                    alert("New Project added");
                } else {
                    console.log("error inserting Project on db");
                    console.log(err);
                    alert("error inserting Project on db");
                }
            });
        };
        //EDIT PROJECT

        //ADD BANK
        $scope.addBank = function () {

            console.log("SENDING BANK TO db:" + $scope.bank);
            $http.post("/addBank", $scope.bank).success(function (response, err) {
                if (err) {
                    console.log('err:' + err);
                    return;
                };
                console.log('response.success : ' + response.success);
                if (response.success) {
                    console.log("This bank is now inserted");
                    alert("New bank added");
                } else {
                    console.log("error inserting bank on db");
                    console.log(err);
                    alert("error inserting bank on db");
                }
                //refresh();
            });
        };

        //SEARCH BANK
        $scope.search = function (bankRt) {
            if(!angular.isNumber(bankRt)){
                    bankRt =0;
                }
            $http.get('/SearchRt', {
                params: {
                    "rt": bankRt
                }
            }).success(function (data) {
                $scope.bank = data;
                if (data.length == 0) {
                    console.log("no bank");
                    $scope.enableText = false;
                    console.log($scope.enableText);
                } else {
                    $scope.enableText = true;
                }
                var result = $filter('filter')($scope.bank, {rt: $scope.rt})[0];
                $scope.bank = result;
            }); //close Get
            $scope.rt = bankRt;
            console.log($scope.bank);
            return $scope.bank;
        }; //close search
        // GET Projects
        $scope.projectList = [];
        $scope.projects = function () {
            $http.get('/Projects').success(function (data) {
                $scope.projectList = data;
                console.log($scope.bank);
                console.log($scope.projectList[0].rt);
              //  angular.forEach($scope.projectList, function(value, key){
                //   console.log("TESTING!!!");
                    
                     
                  //  console.log(key + ': ' + value.rt);
                });
                //  alert($scope.projectList);
            }); //close Get  
        }; //close projects
        // GET Status
        $scope.statusList = [];
        $scope.status = function () {
            $http.get('/Status').success(function (data) {
                $scope.statusList = data;
            }); //close Get  
        }; //close status

        $scope.selectedStatus = {};
        $scope.ChooseStatus = function (status) {
            $scope.selectedStatus = status;
        };
        $scope.filterExpression = function (proj) {
            return (proj.idStatus === $scope.selectedStatus.idStatus);
        };

    }; //close Main Controller
    //Add controller to the module to initialize it. 
    app.controller("MainController", ["$scope", "$http", "$filter", MainController]);
}());