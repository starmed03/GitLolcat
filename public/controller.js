// Code goes here

(function () {
	var app = angular.module("lolCatApp", []);

	var MainController = function ($scope, $http, $filter) {
		$scope.bank = [];
		$scope.banks = [];
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
				$scope.bankExist = true;
				//$scope.project.installDate = null;
			}
			//var bankExist = true; //Variable that evaluates if the bank exists.
		console.log("INSIDE DA BANK");

		//ADD PROJECT  

		$scope.addProject = function () {

			$scope.projectData = {
				dueDate: $scope.project.dueDate,
				installDate: $scope.project.installDate,
				rt: $scope.bank.rt,
				idType: $scope.project.idType,
				masterCase: $scope.project.masterCase,
				facetsCase: $scope.project.facetsCase,
				boForm: $scope.project.boForm,
				roForm: $scope.project.roForm,
				saRecieved: $scope.project.saRecieved

			};
			console.log($scope.projectData);
			console.log($scope.bankExist);
			//console.log($scope.project);
			if (!$scope.bankExist) {
				$scope.apply(function () {
					$scope.addBank($scope.projectData.rt);
				});
			}
			$scope.project.rt = $scope.bank.rt;
			console.log($scope.bankExist);
			//console.log($scope.project);

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
		$scope.addBank = function (bankRt) {
			$scope.rt = bankRt;
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
			if (bankRt == null) {
				bankRt = 0;
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
					$scope.bankExist = false;
					console.log($scope.enableText);
					
				} else {
					$scope.enableText = true;
					$scope.bankExist = true;
				}
				// var result = $filter('filter')($scope.bank, {rt: $scope.rt})[0];
				//$scope.bank = result; 
				console.log("HERE: ");
				console.log(dataBank[0]);
				console.log("Bank exists?:"+ $scope.bankExist);
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
				for (var i = 0; i < $scope.projectList.length; i++) {
					var aux = $scope.projectList[i].rt;
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
        
        $scope.StatusColor = function (color){
            console.log(color);
            colorClass ='';
            switch (color){
                case 1: {
                    colorClass="gray";
                } break;
                case 2: {
                    colorClass="lt-blue";
                }break;
                case 3: {
                    colorClass="lt-green";
                }break;
                case 4: {
                    colorClass="drk-teal";
                }break;
                case 5: {
                    colorClass="green";
                }break;
                case 6: {
                    colorClass="drk-gray";
                }break;                    
            }
            console.log("Color: ");
            console.log(colorClass);
            return colorClass;
        };

	}; //close Main Controller
	//Add controller to the module to initialize it. 
	app.controller("MainController", ["$scope", "$http", "$filter", MainController]);
}());
