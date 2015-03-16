var ReportGraphSingleStudent = React.createClass({displayName: "ReportGraphSingleStudent",
  render: function() {
    console.log(this.props.currentStudent);
    return (
      React.createElement("div", {className: "graph-container"}, 
      	React.createElement("span", null, " October 01, 2014 - November 01, 2014"), 
      	React.createElement("div", {className: "graph"}, 
      		React.createElement("div", {className: "graph-options"}
      		)
      	)
      )
    )
  }
});

var ReportSingleStudent = React.createClass({displayName: "ReportSingleStudent",
  render: function() {
    console.log(this.props.student);
    return (
      React.createElement("div", {className: "item"}, 
        React.createElement("div", {className: "evaluation-student"}, 
          React.createElement("div", {className: "imageWrapper"}), 
          React.createElement("span", {className: "student-link"}, this.props.student.firstName, " ", this.props.student.lastInitial)
        )
      )
    )
  }
});

var ReportStudentList = React.createClass({displayName: "ReportStudentList",
  render: function() {
    console.log(this.props.allStudents);
    var studentListHtml = [];
    this.props.allStudents.forEach(function(oneStudent) {
      studentListHtml.push(React.createElement(ReportSingleStudent, {student: oneStudent, key: oneStudent.id}))
    });
    return (
      React.createElement("div", {id: "students-in-class", className: "row"}, 
        React.createElement("div", {id: "arrowL", className: "col-xs-1"}), 
          React.createElement("div", {id: "student-list-container", className: "col-xs-10"}, 
            React.createElement("div", {className: "list"}, 
              studentListHtml
            )
        ), 
        React.createElement("div", {id: "arrowR", className: "col-xs-1"})
      )
      );
    }
});

var ReportUI = React.createClass({displayName: "ReportUI",
  render: function() {
    console.log(this.props.allStudents);
    return (
      React.createElement("div", null, 
        React.createElement("div", {id: "top-evaluation-bar"}, 
  				React.createElement("div", {id: "top-student-navigation"}, 
  					React.createElement("div", {className: "container"}, 
              React.createElement(ReportStudentList, {allStudents: this.props.allStudents})
  					)
  				)
  			), 
        React.createElement("div", {id: "report-container", className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-7"}, 
              "// ", React.createElement("div", {"report-graph": true, "current-student": "currentStudent"}), 
              React.createElement(ReportGraphSingleStudent, {currentStudent: this.props.currentStudent})
            ), 
            React.createElement("div", {className: "col-md-5"}, 
              React.createElement("div", {standards: true, "current-standard": "currentStandard", "available-standards": "availableStandards"}), 
              React.createElement("div", {"standards-exposures": true})
            )
          )
        ), 
        React.createElement("div", {"differentiation-resources": true, "list-of-differentiation-assets": "differentiationResources[currentStandard]"})
      )
      );
    }
});

student1 = { id:'5TDT7S1MC4Q2RDNBZSXHWOEEK8', firstName: 'Student', lastInitial: '1' };
student2 = { id:'3312BBCPETOREGHBGX2DZGYW58', firstName: 'Student', lastInitial: '2' };
student3 = { id:'6YDT7S1MC4Q2RDNBFRSDWOSWK8', firstName: 'Student', lastInitial: '3' };
student4 = { id:'38DT7S1MC4Q2RDNBFRSDWOSWK8', firstName: 'Student', lastInitial: '4' };

var allStudents = [student1, student2, student3, student4];

var currentStudent = student1;

availableStandards = ["1.NBT.4", "1.NBT.5", "1.NBT.6"];
currentStandard = "1.NBT.4";

differentiationResources = {};
differentiationResources["1.NBT.4"] = ["1nbt4 - 1", "1nbt4 - 2", "1nbt4 - 3", "1nbt4 - 4"];
differentiationResources["1.NBT.5"] = ["1nbt5 - 1", "1nbt5 - 2"];
differentiationResources["1.NBT.6"] = ["1nbt6 - 1", "1nbt6 - 2", "1nbt6 - 3"];

React.render(React.createElement(ReportUI, {allStudents: allStudents, currentStudent: currentStudent}), document.getElementById("pageContent"));
