var SingleStandard = React.createClass({displayName: "SingleStandard",
  handleClick: function(standard) {
    console.log("Clicked SingleStandard " + standard);
    PubSub.publish( 'SELECT_STANDARD', standard );
  },
  render : function() {
    return (
      React.createElement("span", {className: "standard-bug", onClick: this.handleClick.bind(this, this.props.standard)}, 
        this.props.standard
      )
    )
  }
});

var SingleResource = React.createClass({displayName: "SingleResource",
  render : function() {
    return (
      React.createElement("div", {className: "resource"}, this.props.asset)
    )
  }
});

var Resources = React.createClass({displayName: "Resources",
  selectStandard: function( msg, data ){
    console.log( msg, data );
    this.props.currentStandard = data;
    this.setState({currentStandard: data});
  },
  componentWillMount: function() {
    console.log("StandardsWidget componentWillMount");
    var token = PubSub.subscribe( 'SELECT_STANDARD', this.selectStandard );
  },
  render : function() {
    var resourcesAsHtml = [];
    var cs = this.props.currentStandard;
    this.props.resources[cs].forEach(function(oneResource) {
      resourcesAsHtml.push(React.createElement(SingleResource, {asset: oneResource, key: oneResource}))
    });
    return (
      React.createElement("div", {className: "container clearfix", id: "differentiation-container"}, 
      	React.createElement("div", {className: "differentiation-title"}, "Resource"), 
      	resourcesAsHtml
      )
    )
  }
});

var StandardsWidget = React.createClass({displayName: "StandardsWidget",
  selectStandard: function( msg, data ){
    console.log( msg, data );
    this.props.currentStandard = data;
    this.setState({currentStandard: data});
  },
  componentWillMount: function() {
    console.log("StandardsWidget componentWillMount");
    var token = PubSub.subscribe( 'SELECT_STANDARD', this.selectStandard );
  },
  render : function() {
    var standardsAsHtml = [];
    var cs = this.props.currentStandard;
    this.props.availableStandards.forEach(function(oneStandard) {
      if(oneStandard !== cs) {
        standardsAsHtml.push(React.createElement(SingleStandard, {standard: oneStandard, key: oneStandard}))
      }
    });
    return (
      React.createElement("div", {className: "standards-container"}, 
      	React.createElement("div", {className: "standard-breadcrumb"}, 
      		"Number and Operations in Base Ten : Use place value understanding and properties of operations to add and subtract."
      	), 
      	React.createElement("div", {className: "standard-title"}, this.props.currentStandard), 
      	React.createElement("div", {className: "standard-text"}, 
      		"Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction."
      	), 
      	React.createElement("div", {className: "other-standards-title"}, 
      		React.createElement("strong", null, "Other Standards"), " (Click on standard code to view the report)"
      	), 
      	React.createElement("div", {className: "other-standards-content clearfix"}, 
      		standardsAsHtml
      	)
      )
    )
  }
});

var ReportSingleStudent = React.createClass({displayName: "ReportSingleStudent",
  selectStudent: function( msg, data ){
    console.log( msg, data );
    this.props.currentStudent = data;
    this.setState({currentStudent: data});
  },
  componentWillMount: function() {
    console.log("SingleStudent componentWillMount");
    var token = PubSub.subscribe( 'SELECT_STUDENT', this.selectStudent );
  },
  render: function() {
    console.log("SingleStudent: Render : ");
    console.log(this.props.currentStudent.lastInitial);
    return (
      React.createElement("div", {className: "graph-container"}, 
      	React.createElement("div", {className: "graph-title"}, "Performance Details for ", this.props.currentStudent.firstName, " ", this.props.currentStudent.lastInitial), 
      	React.createElement("span", null, " October 01, 2014 - November 01, 2014"), 
      	React.createElement("div", {className: "graph"}, 
          React.createElement("iframe", {
            src: "../4-d3js-trials/sunburst/index.html", 
            width: "500px", 
            height: "500px", 
            seamless: true, 
            scrolling: "no", 
            frameborder: "0"
          })
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
      studentListHtml.push(React.createElement(SingleStudent, {student: oneStudent, key: oneStudent.id}))
    });
    return (
      React.createElement("div", {id: "students-in-class", className: "row"}, 
          React.createElement("div", {id: "student-list-container", className: "col-xs-10"}, 
            React.createElement("div", {className: "list"}, 
              studentListHtml
            )
        )
      )
      );
    }
});

var ReportUI = React.createClass({displayName: "ReportUI",
  render: function() {
    console.log(this.props.allStudents);
    return (
      React.createElement("div", {id: "pageContent"}, 
        React.createElement("div", {id: "top-bar"}, 
  				React.createElement("div", {id: "top-student-navigation"}, 
  					React.createElement("div", {className: "container"}, 
              React.createElement(ReportStudentList, {allStudents: this.props.allStudents})
  					)
  				)
  			), 
        React.createElement("div", {id: "report-container", className: "container"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "col-md-7"}, 
              React.createElement(ReportSingleStudent, {currentStudent: this.props.currentStudent})
            ), 
            React.createElement("div", {className: "col-md-5"}, 
              React.createElement(StandardsWidget, {
                availableStandards: this.props.availableStandards, 
                currentStandard: this.props.currentStandard}
              )
            )
          )
        ), 
        React.createElement(Resources, {
          resources: this.props.resources, 
          currentStandard: this.props.currentStandard}
        )
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

resources = {};
resources["1.NBT.4"] = ["1nbt4 - 1", "1nbt4 - 2", "1nbt4 - 3", "1nbt4 - 4"];
resources["1.NBT.5"] = ["1nbt5 - 1", "1nbt5 - 2"];
resources["1.NBT.6"] = ["1nbt6 - 1", "1nbt6 - 2", "1nbt6 - 3"];

React.render(
  React.createElement(ReportUI, {
    allStudents: allStudents, 
    currentStudent: currentStudent, 
    availableStandards: availableStandards, 
    currentStandard: currentStandard, 
    resources: resources}
  )
, document.getElementById("jsFrameworksPOC-React"));
