var ReportStudentList = React.createClass({displayName: "ReportStudentList",
  render: function() {
    return (
      React.createElement("div", {id: "students-in-class", class: "row"}, 
        React.createElement("div", {id: "arrowL", class: "col-xs-1"}), 
          React.createElement("div", {id: "student-list-container", class: "col-xs-10"}, 
            React.createElement("div", {class: "list"}, 
              React.createElement("div", {class: "item"}, 
                React.createElement("div", {class: "evaluation-student"}, 
                  React.createElement("div", {class: "imageWrapper"}), 
                  React.createElement("span", {class: "student-link"}, "Student A")
                )
              ), 
              React.createElement("div", {class: "item"}, 
                React.createElement("div", {class: "evaluation-student"}, 
                  React.createElement("div", {class: "imageWrapper"}), 
                  React.createElement("span", {class: "student-link"}, "Student B")
                )
              ), 
              React.createElement("div", {class: "item"}, 
                React.createElement("div", {class: "evaluation-student"}, 
                  React.createElement("div", {class: "imageWrapper"}), 
                  React.createElement("span", {class: "student-link"}, "Student C")
                )
              )
            )
        ), 
        React.createElement("div", {id: "arrowR", class: "col-xs-1"})
      )
      );
    }
});

React.render(React.createElement(ReportStudentList, null), document.getElementById("pogStudentList"));
