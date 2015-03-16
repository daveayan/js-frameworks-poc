var ReportStudentList = React.createClass({displayName: "ReportStudentList",
  render: function() {
    return (
      React.createElement("div", {id: "students-in-class", className: "row"}, 
        React.createElement("div", {id: "arrowL", className: "col-xs-1"}), 
          React.createElement("div", {id: "student-list-container", className: "col-xs-10"}, 
            React.createElement("div", {className: "list"}, 
              React.createElement("div", {className: "item"}, 
                React.createElement("div", {className: "evaluation-student"}, 
                  React.createElement("div", {className: "imageWrapper"}), 
                  React.createElement("span", {className: "student-link"}, "Student A")
                )
              ), 
              React.createElement("div", {className: "item"}, 
                React.createElement("div", {className: "evaluation-student"}, 
                  React.createElement("div", {className: "imageWrapper"}), 
                  React.createElement("span", {className: "student-link"}, "Student B")
                )
              ), 
              React.createElement("div", {className: "item"}, 
                React.createElement("div", {className: "evaluation-student"}, 
                  React.createElement("div", {className: "imageWrapper"}), 
                  React.createElement("span", {className: "student-link"}, "Student C")
                )
              )
            )
        ), 
        React.createElement("div", {id: "arrowR", className: "col-xs-1"})
      )
      );
    }
});

React.render(React.createElement(ReportStudentList, null), document.getElementById("pogStudentList"));
