import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Router from 'next/router';
import Link from 'next/link';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';

class CenteredTabs extends Component {
  constructor(props) {
    super(props);
    const { pathname } = props;
    switch (pathname) {
      case '/':
        this.state = { initalTab: 0 };
        break;
      case '/about':
        this.state = { initalTab: 1 };
        break;
      case '/contact':
        this.state = { initalTab: 2 };
        break;
      default:
        this.state = { initalTab: 0 };
        break;
    }
    this.state.urlRoute = ['/', '/about', '/contact'];
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index) {
    return Router.push(this.state.urlRoute[index]);
  }

  render() {
    const classes = this.props.classes;
    return (
      <Grid container direction="row" spacing={8}>
        <AppBar className={classes.root} position="fixed" color="default">
          <Grid item xs={2}>
            <Link href="/">
              <img src="/static/secondwind.png" alt="Second Wind Logo" className={classes.img} />
            </Link>
          </Grid>
          <Grid item xs={10}>
            <Tabs className={classes.tabs} index={this.state.initalTab} onChange={this.handleChange} indicatorColor="black" textColor="default">
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="About" />
              <Tab className={classes.tab} label="Contact" />
            </Tabs>
          </Grid>
        </AppBar>
      </Grid>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

const styleSheet = createStyleSheet(theme => ({
  root: {
    flex: '1 1 auto',
    minHeight: '64px',
    backgroundColor: theme.palette.common.fullWhite,
    flexDirection: 'row',
  },
  tab: {
    fontWeight: 300,
    marginTop: '10px',
  },
  tabs: {
    position: 'relative',
    left: '20%',
  },
  img: {
    width: '88px',
    height: 'auto',
    position: 'relative',
    top: '5px',
    cursor: 'pointer',
  },
}));

export default withStyles(styleSheet)(CenteredTabs);
