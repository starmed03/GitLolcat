// Code goes here

(function() {
  var app = angular.module("lolCatApp", []);

  var MainController = function($scope, $http, $filter) {
     $scope.clear = function(){
        $scope.bank = null;
        $scope.message ="";
      } 
        
        $scope.init = function() {
             $scope.status();
             $scope.projects();
            $scope.filterExpression = {}
            $scope.enableText=true;
         
        }
    
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
          //alert("New bank added");
        } else {
          console.log(error);
        }

        refresh();
      });
    };
      
//SEARCH BANK
    $scope.search = function(bankRt){
        $http.get('/SearchRt', {params: { "rt": bankRt}}).success(function(data){
            $scope.bank = data;
            if(data.length==0){ 
                console.log("no bank");
                $scope.enableText=false;
                console.log($scope.enableText);
                
            }else{
                $scope.enableText=true;
            }
            var result = $filter('filter')($scope.bank, {rt:$scope.rt})[0];
            $scope.bank = result;
        });//close Get
        $scope.rt = bankRt;
        console.log($scope.bank);
        return $scope.bank;
      }; //close search
      // GET Projects
          $scope.projectList = [];
      
          $scope.projects = function(){
            $http.get('/Projects').success(function(data){
            $scope.projectList = data;
                
                console.log($scope.bank);
                console.log($scope.projectList[0].rt);
            
          //  alert($scope.projectList);
        });//close Get  
          }; //close projects
// GET Status
      $scope.statusList = [];
          $scope.status = function(){
            $http.get('/Status').success(function(data){
            $scope.statusList = data;
            
            
        });//close Get  
          }; //close status
          
         
          $scope.selectedStatus={};
          $scope.ChooseStatus = function(status){
              $scope.selectedStatus=status;
          };   
          $scope.filterExpression = function(proj) {
				return (proj.idStatus === $scope.selectedStatus.idStatus );
              };

  }; //close Main Controller

  //Add controller to the module to initialize it. 
  app.controller("MainController", ["$scope", "$http", "$filter", MainController]);
}());