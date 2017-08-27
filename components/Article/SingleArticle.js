import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import get from 'lodash.get';
import { LinearProgress } from 'material-ui/Progress';

import RelatedArticles from './RelatedArticles';
import ArticleAuthor from './ArticleAuthor';
import { headerImgStrg, contentStrg, titleStrg } from '../../utils/Constants';

const styleSheet = createStyleSheet({
  imgGrid: {
    textAlign: 'center',
  },
  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: 1000,
    maxHeight: 600,
  },
  contentGrid: {
    marginTop: '78px',
  },
  post_content: {
    width: '100%',
    height: 'auto',
    fontFamily: 'Roboto',
    lineHeight: 1.5,
    color: 'initial',
    textAlign: 'justify',
    letterSpacing: '0.025em',
  },
});

function SingleArticle(props) {
  const { article, classes } = props;
  const relatedArticles = props.relatedArticles;
  const headerImg = get(article, headerImgStrg);
  const articleContent = get(article, contentStrg);
  const title = get(article, titleStrg);

  const renderMarkup = (content) => {
    return {
      __html: content,
    };
  };
  const renderLoading = (isInfiniteLoading) => {
    if (isInfiniteLoading) {
      return (
        <div style={{ width: '100%', marginTop: 30 }}>
          <LinearProgress />
        </div>
      );
    }
  };
  return (
    <Grid item className={classes.contentGrid} xs={8}>
      <Grid item className={classes.imgGrid}>
        <img className={classes.img} src={headerImg} alt={title} />
      </Grid>
      <ArticleAuthor article={article} />
      <div className={classes.post_content} dangerouslySetInnerHTML={renderMarkup(articleContent)} />
      <RelatedArticles articles={relatedArticles} />
      { renderLoading(props.isInfiniteLoading)}
    </Grid>
  );
}

SingleArticle.propTypes = {
  article: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  relatedArticles: PropTypes.array.isRequired,
};

export default withStyles(styleSheet)(SingleArticle);
