import * as React from 'react';
import { connect } from 'react-redux';
import { ICourse } from 'app/containers/courses-page/courses-page.reducers';
import { addCourse } from 'app/containers/courses-page/courses-page.actions';

interface IProps {
  courses: ICourse;
  onAddCourse: any;
}

const mapStateToProps = (state: any) => {
  return {
    courses: state.courses
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddCourse: (course: ICourse) => dispatch(addCourse(course))
  }
}

@connect(mapStateToProps, mapDispatchToProps)

class CoursesPage extends React.Component<IProps> {

  render() {
    const { courses } = this.props;
    console.warn(courses);
    return <div>
      <button onClick={this.onAddCourse}>Add course</button>    
    </div>
  }

  onAddCourse = () => {
    this.props.onAddCourse({
      name: 'Second course',
      description: 'second course'
    })
  }
}

export {
  CoursesPage as CoursesPageContainer
}

