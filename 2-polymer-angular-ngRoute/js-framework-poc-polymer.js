var resources = {};
resources["1.NBT.4"] = ["1nbt4 - 1", "1nbt4 - 2", "1nbt4 - 3", "1nbt4 - 4"];
resources["1.NBT.5"] = ["1nbt5 - 1", "1nbt5 - 2"];
resources["1.NBT.6"] = ["1nbt6 - 1", "1nbt6 - 2", "1nbt6 - 3"];

var student1 = {id: '5TDT7S1MC4Q2RDNBZSXHWOEEK8', firstName: 'Student', lastInitial: '1'};
var student2 = {id: '3312BBCPETOREGHBGX2DZGYW58', firstName: 'Student', lastInitial: '2'};
var student3 = {id: '6YDT7S1MC4Q2RDNBFRSDWOSWK8', firstName: 'Student', lastInitial: '3'};

var allStudents = [student1, student2, student3];

angular.module('jsframeworkspocangularApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: 'addstudent.html', controller: 'jsframeworkspocangularController'})
            .when('/add-student', {templateUrl: 'addstudent.html', controller: 'jsframeworkspocangularController'})
            .when('/poc-reports', {templateUrl: 'reports.html', controller: 'jsframeworkspocangularController'});
    })
    .controller('jsframeworkspocangularController', ['$scope', function ($scope) {
        $scope.allStudents = allStudents;
        $scope.currentStudent = student1;

        $scope.availableStandards = ["1.NBT.4", "1.NBT.5", "1.NBT.6"];
        $scope.currentStandard = "1.NBT.4";

        $scope.resources = resources;
    }]);
var token = PubSub.subscribe( 'ADD_STUDENT', this.addStudent );
function addStudent(event, new_student) {
    console.log("Adding ... ");
    var studentToAdd = {
        id: "id" + allStudents.length + 1,
        firstName: new_student.firstName,
        lastInitial: new_student.lastInitial
    };
    console.log(studentToAdd);
    console.log(allStudents);
    allStudents.push(studentToAdd);
    console.log(allStudents);
};