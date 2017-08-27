import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import get from 'lodash.get';

import { authorAvatarStrg, authorNameStrg, articleDateStrg } from '../../utils/Constants';

function renderAuthor(props) {
  const { article } = props;
  const authorName = get(article, authorNameStrg);
  const authorImg = get(article, authorAvatarStrg);
  const articleDate = get(article, articleDateStrg);

  return (
    <Grid container direction="row" align="center">
      <Grid item>
        <Avatar src={authorImg} alt={authorName} />
      </Grid>
      <Grid item>
        <Typography type="body2" gutterBottom>
          {authorName}
        </Typography>
        <Typography type="caption">
          {articleDate}
        </Typography>
      </Grid>
    </Grid>);
}

export default renderAuthor;

renderAuthor.propTypes = {
  article: PropTypes.object.isRequired,
};
