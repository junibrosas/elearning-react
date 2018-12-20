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
    return (
      <div className="animated fadeIn">
        <header className="mb-5">
          <nav className="navbar navbar-expand-lg">
              <div className="container">
                  <a className="navbar-brand" href="#">
                      <img src="img/logo-inline.jpg" className="img-fluid" alt="Application Logo" width="250" />
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav ml-auto nav-flex-icons">
                          <li className="nav-item profile-group">
                              <span className="profile name">John Doe</span>
                              <span className="profile type">Learner</span>
                          </li>
                          <li className="nav-item avatar dropdown">
                              <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="true">
                                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0" alt="avatar image" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                                  <a className="dropdown-item waves-effect waves-light" href="#">Action</a>
                                  <a className="dropdown-item waves-effect waves-light" href="#">Another action</a>
                                  <a className="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
        </header>
      </div>
    )
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

