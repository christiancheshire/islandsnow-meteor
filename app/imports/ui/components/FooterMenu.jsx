import React from 'react';
import { Grid, List, Item, Input, Label } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Grid columns='three' className='footer-background'>
          <Grid.Column>
            NAVIGATION
            <hr/>
            <List.Item>About Us</List.Item>
            <List.Item>Employment</List.Item>
            <List.Item>Videos</List.Item>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <hr/>
            <List.Item>Men</List.Item>
            <List.Item>Women</List.Item>
            <List.Item>Kids</List.Item>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <hr/>
            <Item>Sign up for the latest updates</Item>
            <Input placeholder='Enter email address'></Input>
            <Label color='black'>
              Join
            </Label>
          </Grid.Column>
        </Grid>
    );
  }
}
