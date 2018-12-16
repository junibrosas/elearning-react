import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { configureStore } from 'app/main/store';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router';
import { HomePageContainer } from 'app/containers/home-page/home-page.container';
import { CoursesPageContainer } from 'app/containers/courses-page/courses-page.container';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/courses" component={CoursesPageContainer} />
        <Route path="/" component={HomePageContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
