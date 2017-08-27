import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import { LinearProgress } from 'material-ui/Progress';
import throttle from 'lodash.throttle';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';

const styleSheet = createStyleSheet({
  container: {
    position: 'relative',
    marginTop: 100,
  },
  listOfArticles: {
  },
  card: {
    margin: '10',
    textAlign: 'center',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  cardImage: {
    width: '80%',
    height: 'auto',
    opacity: 1,
    borderRadius: '1%',
    '&:hover': {
      opacity: 0.8,
      cursor: 'pointer',
      transition: '0.3s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  title: {
    fontSize: '20px',
    lineHeight: '1.2',
    letterSpacing: '-0.05em',
    textAlign: 'center',
    fontWeight: 500,
  },
  date: {
    letterSpacing: '0.02em',
    fontSize: '15px',
    color: '#999',
    fontWeight: 300,
    lineHeight: 1.47,
    pointerEvents: 'auto',
  },
});

function ArticlesGrid(props) {
  const { articles, classes } = props;

  const renderLoading = (props) => {
    if (props.isInfiniteLoading) {
      return (
        <div style={{ width: '100%', marginTop: 30 }}>
          <LinearProgress />
        </div>
      );
    }
  };

  const renderArticles = listofArticles =>
    listofArticles.map(article =>
      /* eslint-disable max-len */
      (<Grid key={article.slug} item className={classes.listOfArticles} xs={6}>
        <Card key={article.slug} className={classes.card}>
          <Link href={`/post?slug=${article.slug}`} prefetch>
            <CardMedia>
              <img className={classes.cardImage} src={article.metadata.header_image.imgix_url} alt={article.title} />
            </CardMedia>
          </Link>
          <CardContent>
            <Typography classes={{ title: classes.title }} component="h2" type="title" gutterBottom >
              {article.title}
            </Typography>
            <Typography className={classes.date} type="subheading" gutterBottom >
              {article.metadata.date}
            </Typography>
          </CardContent>
        </Card>
      </Grid>));
  /* eslint-enable max-len */

  return (
    <Grid container id="ArticlesGrid" className={classes.container} justify="center" direction="row" spacing={0}>
      {renderArticles(articles)}
      {renderLoading(props)}

    </Grid>
  );
}

export default compose(withStyles(styleSheet), withWidth())(ArticlesGrid);

ArticlesGrid.propTypes = {
  articles: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  isInfiniteLoading: PropTypes.bool.isRequired,
};
