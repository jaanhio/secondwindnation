import React from 'react';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet({
  subheading: {
    marginTop: '10vh',
    letterSpacing: '-0.03em',
    fontSize: 32,
    color: '#322',
    lineHeight: 1.2,
    width: 2,
    fontWeight: '300',
    '&:before': {
      content: '""',
      width: 1,
      color: 'rgb(51, 51, 51)',
      height: '30vh',
      display: 'block',
      border: '0px none rgb(51, 51, 51)',
      background: 'rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box',
      transformOrigin: '0.5px 80px',
      caretColor: 'rgb(51, 51, 51)',
    },
  },
});

const TypographyDesign = props => (
  <Typography className={props.classes.subheading} type="subheading">
    Our Latest Articles
  </Typography>
);

TypographyDesign.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TypographyDesign);
