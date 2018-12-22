import * as React from 'react';
import { DrawerNavbarComponent } from 'app/components/drawer-navbar/drawer-navbar.component';

class LayoutMain extends React.Component<any, any> {
  render() {
    return <div>
      <DrawerNavbarComponent>
        {this.props.children}
      </DrawerNavbarComponent>
    </div>
  }
}

export const LayoutMainComponent = LayoutMain;