var SingleStandard = React.createClass({
  handleClick: function(standard) {
    console.log("Clicked SingleStandard " + standard);
    PubSub.publish( 'SELECT_STANDARD', standard );
  },
  render : function() {
    return (
      <span className="standard-bug" onClick={this.handleClick.bind(this, this.props.standard)}>
        {this.props.standard}
      </span>
    )
  }
});

var SingleResource = React.createClass({
  render : function() {
    return (
      <div className="resource">{this.props.asset}</div>
    )
  }
});

var Resources = React.createClass({
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
      resourcesAsHtml.push(<SingleResource asset={oneResource} key={oneResource}/>)
    });
    return (
      <div className="container clearfix" id="differentiation-container">
      	<div className="differentiation-title">Resource</div>
      	{resourcesAsHtml}
      </div>
    )
  }
});

var StandardsWidget = React.createClass({
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
        standardsAsHtml.push(<SingleStandard standard={oneStandard} key={oneStandard}/>)
      }
    });
    return (
      <div className="standards-container">
      	<div className="standard-breadcrumb">
      		Number and Operations in Base Ten : Use place value understanding and properties of operations to add and subtract.
      	</div>
      	<div className="standard-title">{this.props.currentStandard}</div>
      	<div className="standard-text">
      		Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction.
      	</div>
      	<div className="other-standards-title">
      		<strong>Other Standards</strong> (Click on standard code to view the report)
      	</div>
      	<div className="other-standards-content clearfix">
      		{standardsAsHtml}
      	</div>
      </div>
    )
  }
});

var SingleStudent = React.createClass({
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
      <div className="graph-container">
      	<div className="graph-title">Performance Details for {this.props.currentStudent.firstName} {this.props.currentStudent.lastInitial}</div>
      	<span> October 01, 2014 - November 01, 2014</span>
      	<div className="graph">
          <iframe
            src="../4-d3js-trials/sunburst/index.html"
            width = "500px"
            height = "500px"
            seamless
            scrolling = "no"
            frameborder = "0"
          ></iframe>
      	</div>
      </div>
    )
  }
});

var ReportSingleStudent = React.createClass({
  handleClick: function(student) {
    console.log("Clicked");
    PubSub.publish( 'SELECT_STUDENT', student );
  },
  render: function() {
    console.log(this.props.student);
    return (
      <div className="item">
        <div className="student" onClick={this.handleClick.bind(this, this.props.student)}>
          <div className="imageWrapper"></div>
          <span className="student-link">{this.props.student.firstName} {this.props.student.lastInitial}</span>
        </div>
      </div>
    )
  }
});

var ReportStudentList = React.createClass({
  render: function() {
    console.log(this.props.allStudents);
    var studentListHtml = [];
    this.props.allStudents.forEach(function(oneStudent) {
      studentListHtml.push(<ReportSingleStudent student={oneStudent} key={oneStudent.id}/>)
    });
    return (
      <div id="students-in-class" className="row">
          <div id="student-list-container" className="col-xs-10">
            <div className="list">
              {studentListHtml}
            </div>
        </div>
      </div>
      );
    }
});

var ReportUI = React.createClass({
  render: function() {
    console.log(this.props.allStudents);
    return (
      <div id="pageContent">
        <div id="top-bar">
  				<div id="top-student-navigation">
  					<div className="container">
              <ReportStudentList allStudents = {this.props.allStudents}></ReportStudentList>
  					</div>
  				</div>
  			</div>
        <div id="report-container" className="container">
          <div className="row">
            <div className="col-md-7">
              <SingleStudent currentStudent = {this.props.currentStudent}></SingleStudent>
            </div>
            <div className="col-md-5">
              <StandardsWidget
                availableStandards = {this.props.availableStandards}
                currentStandard = {this.props.currentStandard}>
              </StandardsWidget>
            </div>
          </div>
        </div>
        <Resources
          resources = {this.props.resources}
          currentStandard = {this.props.currentStandard}>
        </Resources>
      </div>
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
  <ReportUI
    allStudents = {allStudents}
    currentStudent = {currentStudent}
    availableStandards = {availableStandards}
    currentStandard = {currentStandard}
    resources = {resources}
  />
, document.getElementById("jsFrameworksPOC-React"));
