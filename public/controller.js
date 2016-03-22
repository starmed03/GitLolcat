// Code goes here

(function () {
    var app = angular.module("lolCatApp", []);

    var MainController = function ($scope, $http, $filter) {
        $scope.bank =[];
        $scope.banks=[];
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
            $scope.project.rt = $scope.bank.rt;
            console.log(bankExist);
            console.log($scope.project);

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
            console.log(bankRt);
            if(bankRt == null){
                    bankRt =0;
                }
            $http.get('/SearchRt', {
                params: {
                    "rt": bankRt
                }
            }).success(function (dataBank) {
                $scope.bank = dataBank[0];
                console.log("round1");
                console.log($scope.bank);
                if (dataBank.length == 0) {
                    console.log("no bank");
                    $scope.enableText = false;
                    console.log($scope.enableText);
                } else {
                    $scope.enableText = true;
                }
               // var result = $filter('filter')($scope.bank, {rt: $scope.rt})[0];
                //$scope.bank = result; 
                console.log("HERE: ");
            console.log(dataBank[0]);
                return dataBank[0];
            }); //close Get
           // $scope.rt = bankRt;
        }; //close search

        // GET Projects
        
        $scope.projectList = [];
        $scope.projects = function () {
            $http.get('/Projects').success(function (data) {
                $scope.projectList = data;
              
                console.log($scope.projectList[0]);
                console.log("Im In");
                for(var i =0; i<$scope.projectList.length; i++){
                    var aux=$scope.projectList[i].rt;
                   $scope.projectList[i].rt = [];
                     $http.get('/SearchRt', {
                params: {
                    "rt": aux
                }
            }).success(function (data) {
                console.log("testing");
              console.log(data[0]);
                         $scope.banks.push(data[0]);
                   // $scope.projectList[i].rt = $scope.search("12345678");
                    //console.log($scope.projectList[i].rt);
                        // $scope.projectList[i].rt.push(data);
                           console.log("Banks: ");
                console.log($scope.banks);
            }); //close GET
                   console.log($scope.projectList[i].rt); 
                } // close FOR
                
              
        }); //close get
            
         }; //close Projects
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