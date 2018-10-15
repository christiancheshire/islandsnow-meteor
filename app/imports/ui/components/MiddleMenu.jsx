import React from 'react';
import { Menu, Container, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Container className = 'midcont'>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SEARCH</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
