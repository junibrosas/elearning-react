import * as React from 'react';
import { connect } from 'react-redux';
import { ICourse } from 'app/containers/courses-page/courses-page.reducers';
import { addCourse } from 'app/containers/courses-page/courses-page.actions';
import { LayoutMainComponent } from 'app/components/layout-main/layout-main.component';
import Typography from '@material-ui/core/Typography';

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
    return <LayoutMainComponent>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
        Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
        viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
        Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
        at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </LayoutMainComponent>
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

