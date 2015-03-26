var SingleStudent = React.createClass({displayName: "SingleStudent",
    handleClick: function(student) {
        console.log("Clicked");
        PubSub.publish( 'SELECT_STUDENT', student );
    },
    render: function() {
        console.log(this.props.student);
        return (
            React.createElement("div", {className: "item"}, 
                React.createElement("div", {className: "student", onClick: this.handleClick.bind(this, this.props.student)}, 
                    React.createElement("div", {className: "imageWrapper"}), 
                    React.createElement("span", {className: "student-link"}, this.props.student.firstName, " ", this.props.student.lastInitial)
                )
            )
        )
    }
});