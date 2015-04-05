angular.module('jsframeworkspocangularApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'addstudent.html', controller: 'jsframeworkspocangularController'})
            .when('/poc-reports', {templateUrl: 'reports.html', controller: 'jsframeworkspocangularController'});
    })
    .controller('jsframeworkspocangularController', ['$scope', function ($scope) {
        if(! $scope.dataInitialized) {
            var student1 = {id: 'id1', firstName: 'Student', lastInitial: 'A'};
            var student2 = {id: 'id2', firstName: 'Student', lastInitial: 'B'};
            var student3 = {id: 'id3', firstName: 'Student', lastInitial: 'C'};

            var allStudents = [student1, student2, student3];

            $scope.allStudents = allStudents;
            $scope.currentStudent = student1;

            $scope.availableStandards = ["1.NBT.4", "1.NBT.5", "1.NBT.6"];
            $scope.currentStandard = "1.NBT.4";

            $scope.resources = {};
            $scope.resources["1.NBT.4"] = ["1nbt4 - 1", "1nbt4 - 2", "1nbt4 - 3", "1nbt4 - 4"];
            $scope.resources["1.NBT.5"] = ["1nbt5 - 1", "1nbt5 - 2"];
            $scope.resources["1.NBT.6"] = ["1nbt6 - 1", "1nbt6 - 2", "1nbt6 - 3"];

            $scope.dataInitialized = true;
        }
    }]).directive('addStudent', function () {
        return {
            restrict: 'A',
            scope: {
                allStudents: '='
            },
            templateUrl: 'partials/addStudentForm.html',
            controller: function ($scope) {
                $scope.addStudent = function (newStudent) {
                    var currentList = $scope.allStudents.length;
                    var studentToAdd = {
                        id: "id" + $scope.allStudents.length + 1,
                        firstName: newStudent.firstname,
                        lastInitial: newStudent.lastinitial
                    }
                    $scope.allStudents.push(studentToAdd);
                };
            }
        };
    }).directive('studentList', function () {
        return {
            restrict: 'A',
            scope: {
                currentStudent: '=',
                listOfStudents: '='
            },
            templateUrl: 'partials/studentListWidget.html',
            controller: function ($scope) {
                $scope.changeStudent = function (newStudent) {
                    $scope.currentStudent = newStudent;
                    console.log(newStudent);
                };
            }
        };
    }).directive('reportGraph', function () {
        return {
            restrict: 'A',
            scope: {
                currentStudent: '='
            },
            templateUrl: 'partials/reportGraphWidget.html'
        };
    }).directive('standards', function () {
        return {
            restrict: 'A',
            scope: {
                currentStandard: '=',
                availableStandards: '='
            },
            templateUrl: 'partials/standardsWidget.html',
            controller: function ($scope) {
                $scope.changeStandard = function (newStandard) {
                    $scope.currentStandard = newStandard;
                    console.log(newStandard);
                };
            }
        };
    }).directive('resources', function () {
        return {
            restrict: 'A',
            scope: {
                assets: '=listOfResources'
            },
            templateUrl: 'partials/differentiationResourcesWidget.html'
        };
    });
