// Import react and component method
import React, { Component, PropTypes } from 'react';

// Connect Function { }
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Importing the Action creator
import * as courseActions from '../actions/courseActions';

// Import Style
import './CoursePage.css';

class CoursePage extends Component {
  constructor(props, context) {
    super(props, context);

    // Local state
    this.state = {
      course: { title: '' }
    };

    // Binding my methods
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    // When onChange
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course });
  }

  onClickSave() {
    // Sending the course to the action
    this.props.actions.createCourse(this.state.course);
  }

  courseRow(course, index) {
    // Inserting the course
    return <div key={index}>{course.title}</div>
  }

  render() {
    return (
      <div className="wrapper-course">
        <h1>Course Page</h1>
        <h2>Courses List</h2>
        <span>{this.props.courses.map(this.courseRow)}</span>

        <h2>Add Courses</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          value="save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

// Validating props
CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// state of redux
function mapStateToProps(state, ownProps) {
  return { // return the object
    courses: state.courses // Properties that I want to see in my component
  };
}

// Actions that are availables in my component
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
