import React, {Component} from 'react';
import CourseListItem from './course-list-item';

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [{
        username: 'Charles',
        title: 'Test',
        description: 'new test',
        price: 5
      }]
    }
  }
  render() {
    const courseListItems = this.state.courses.map((course) => (
      <CourseListItem  {...course} />
    ))

    return (
      <div className="course-preview-section" >
      <ul>
        { courseListItems }
      </ul>
    </div>
    );
  }
}

export default CourseList;