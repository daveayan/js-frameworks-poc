var SingleStudent = React.createClass({
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