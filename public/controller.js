// Code goes here

(function() {
  var app = angular.module("lolCatApp", []);

  var MainController = function($scope, $http, $filter) {
    var onBankComplete = function(response) {
      $scope.bank = response.data;
      var result = $filter('filter')($scope.bank, {
        rt: $scope.rt
      })[0];
      $scope.bank = result;
      console.log($scope.rt);
    };
    var onError = function(reason) {
      $scope.error = ("Could not fetch the bank :( ");
    };

//ADD PROJECT  
    $scope.addProject = function() {
          
      //$scope.bank.idBU=parseInt($scope.bank.idBU);
      console.log($scope.project);
        
      $http.post("/addProject", $scope.bank).success(function(response) {
        if (response) {
          console.log("This Project is now inserted" + response);
          alert("New Project added");
        } else {
          console.log(error);
        }

        refresh();
      });
    };
//EDIT PROJECT

//ADD BANK
    $scope.addBank = function() {
      //$scope.bank.idBU=parseInt($scope.bank.idBU);
      console.log($scope.bank);
      $http.post("/addBank", $scope.bank).success(function(response) {
        if (response) {
          console.log("This bank is now inserted" + response);
          alert("New bank added");
        } else {
          console.log(error);
        }

        refresh();
      });
    };
      
      
//SEARCH BANK
    $scope.search = function(req, resp) {

      $http.get("bancos.json").then(onBankComplete, onError);
      $scope.rt = bankRt;
    };



  };


  //SEARCH BY STATUS   
  //SEARCH GENERAL

  //SE AGREGA EL CONTROLLADOR AL MODULO PARA SU INICIALIZACION INMEDIATA
  app.controller("MainController", ["$scope", "$http", "$filter", MainController]);
}());