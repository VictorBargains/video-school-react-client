import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseLessonMenu from '../courses/courseLessons/CourseLessonMenu';
import { getLesson } from '../../actions/lessonActions';
import { toggleLessonList  as toggleMenu } from '../../actions/uiActions';
import LessonViewNavbar from './LessonViewNavbar';
import LessonVideoPlayer from './LessonVideoPlayer';
import Spinner from '../common/Spinner';
import './LessonView.css';


 class LessonView extends Component {
   constructor(props) {
     super(props);
     this.state = {
      
     }
   }

   componentDidMount() {
    if(this.props.match.params){
      this.props.getLesson(this.props.match.params.id);
    }   
  }

  
  render() {
    let videoPlayer = <Spinner/>;
    let classNames = 'LessonView';
    let menu = <CourseLessonMenu />;

    if(this.props.lesson){
      videoPlayer = <LessonVideoPlayer videoUrl={this.props.lesson.videoUrl} />;
    }

    if(this.props.expanded) {
      classNames += ' expanded';
    }

    return (
      <div className={classNames}>
        <LessonViewNavbar toggleMenu={this.props.toggleMenu} />
        {menu}
        {videoPlayer}
      </div>
    )
  }
}

LessonView.propTypes = {
  getLesson: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  lesson: state.lessons.selectedLesson,
  expanded: state.ui.lessonListExpanded,
  courses: state.courses.allCourses
});

export default connect(mapStateToProps, { getLesson, toggleMenu })(LessonView);