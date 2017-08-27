import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import Link from 'next/link';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary[200],
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

function RelatedArticles(props) {
  const { classes, articles } = props;
  const renderRelatedArticles = arrayOfArticles => (
    <GridList className={classes.gridList} cols={2.5} cellHeight={280}>
      {arrayOfArticles.map(article =>
        (<GridListTile key={article.slug}>
          <img src={article.metadata.header_image.imgix_url} alt={article.title} />
          <Link href={`/post?slug=${article.slug}`}>
            <GridListTileBar title={article.title} classes={{ root: classes.titleBar, title: classes.title }} />
          </Link>
        </GridListTile>),
      )}
    </GridList>
  );

  return (
    <div style={{ marginTop: 0 }}>
      <Typography type="headline" component="h2" >
        Related Articles
      </Typography>
      <div className={classes.root}>
        {renderRelatedArticles(articles)}
      </div>
    </div>
  );
}

RelatedArticles.propTypes = {
  classes: PropTypes.object.isRequired,
  articles: PropTypes.array.isRequired,
};

export default withStyles(styleSheet)(RelatedArticles);
