import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Router from 'next/router';
import Typography from 'material-ui/Typography';

function HomeLargeImageCard(props) {
  const { article, classes } = props;
  const handleClick = () => Router.push(`/post?slug=${article.slug}`);
  return (
    <Grid container className={classes.root} direction="row" wrap="wrap">
      <Grid item xs={12}>
        <img className={classes.img} src={article.metadata.header_image.imgix_url} alt={article.title} />
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" direction="column" wrap="wrap-reverse" spacing={0} >
          <Grid item>
            <Typography className={classes.title} type="title" component="h2" onClick={handleClick} >
              {article.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.caption} type="subheading" onClick={handleClick}>
              {article.metadata.article_caption}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    position: 'relative',
    display: 'flex',
  },
  title: {
    fontWeight: '200',
    position: 'relative',
    letterSpacing: '-0.03em',
    fontSize: '3em',
    lineHeight: '1.2',
    opacity: '1',
    margin: '0 .15em 0 0',
    padding: 5,
    cursor: 'pointer',
  },
  caption: {
    fontWeight: 100,
    color: '#9ea0a6',
    letterSpacing: '-0.03em',
    lineHeight: '1.2',
    fontSize: '2.7em',
    padding: 5,
    transition: 'all .2s ease-out 50ms',
    cursor: 'pointer',
    '&:hover': {
      color: '#74EBD5',
      borderBottom: 'solid 3px #74EBD5',
    },
  },
  img: {
    maxWidth: '100vw',
    height: 'auto',
    position: 'relative',
    opacity: 1,
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
      transition: '0.6s ease-in-out',
    },
  },
});

export default withStyles(styleSheet)(HomeLargeImageCard);

HomeLargeImageCard.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};
