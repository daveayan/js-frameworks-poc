
var resources = {};
resources["1.NBT.4"] = ["1nbt4 - 1", "1nbt4 - 2", "1nbt4 - 3", "1nbt4 - 4"];
resources["1.NBT.5"] = ["1nbt5 - 1", "1nbt5 - 2"];
resources["1.NBT.6"] = ["1nbt6 - 1", "1nbt6 - 2", "1nbt6 - 3"];

angular.module('emprogressreportApp', [])
  .controller('emPRController', ['$scope', function($scope) {
	  student1 = { id:'5TDT7S1MC4Q2RDNBZSXHWOEEK8', firstName: 'Student', lastInitial: '1' };
	  student2 = { id:'3312BBCPETOREGHBGX2DZGYW58', firstName: 'Student', lastInitial: '2' };
	  student3 = { id:'6YDT7S1MC4Q2RDNBFRSDWOSWK8', firstName: 'Student', lastInitial: '3' };

	  var allStudents = [student1, student2, student3];

	  $scope.allStudents = allStudents;
	  $scope.currentStudent = student1;

	  $scope.availableStandards = ["1.NBT.4", "1.NBT.5", "1.NBT.6"];
	  $scope.currentStandard = "1.NBT.4";

	  $scope.resources = resources;
  }]);

var studentList = document.querySelector('#student-list-1');
studentList.addEventListener('changed-student', function(e) {
	console.log(e.detail.to_student);
	var widget = document.querySelector('#report-graph-widget-1');
	console.log(widget);
	widget.update(e.detail.to_student);
});

var standardsWidget = document.querySelector('#standards-widget-1');
standardsWidget.addEventListener('changed-standard', function(e) {
	console.log(e.detail.to_standard);
	var widget = document.querySelector('#resources-widget-1');
	widget.update(resources[e.detail.to_standard]);
});
