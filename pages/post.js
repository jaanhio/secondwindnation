import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import compose from 'recompose/compose';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import throttle from 'lodash.throttle';

import { getPostBySlug, getRelatedPost, getAllObjectsByType } from '../model/cosmic';
import SingleArticle from '../components/Article/SingleArticle';
import HeaderTabs from '../components/Shared/HeaderTabs';
import withRoot from '../components/withRoot';
import filterArticle from '../utils/helpers';

const styleSheet = createStyleSheet({
  root: {
    flex: '1 1 auto',
  },
});

class postPage extends React.Component {
  static async getInitialProps({ query }) {
    const { slug } = query;
    const article = await getPostBySlug(slug);
    const relatedArticles = await getRelatedPost({ type_slug: 'posts', metafield_key: 'category', metafield_value: article.object.metadata.category });
    return { article, relatedArticles };
  }

  constructor(props) {
    super(props);
    this.checkIfEndOfPage = this.checkIfEndOfPage.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
    this.getMorePost = this.getMorePost.bind(this);
    this.state = {
      renderedArticles: [props.article.object],
      relatedArticles: props.relatedArticles,
      isInfiniteLoading: false,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', throttle(this.checkIfEndOfPage, 600));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkIfEndOfPage);
  }
  async getMorePost() {
    this.setState((prevState) => {
      return {
        isInfiniteLoading: true,
      };
    });
    const nextArticle = await getAllObjectsByType(undefined, undefined, 1);
    this.setState((prevState) => {
      return {
        isInfiniteLoading: false,
        renderedArticles: [...prevState.renderedArticles, ...nextArticle.objects.all],
      };
    });
  }
  checkIfEndOfPage() {
    if ((window.innerHeight + window.pageYOffset) >= (0.95 * document.body.scrollHeight)) {
      this.getMorePost();
    }
  }
  renderArticles() {
    return this.state.renderedArticles.map(article => <SingleArticle key={article.slug} article={article} relatedArticles={filterArticle(article, this.state.relatedArticles)} isInfiniteLoading={this.state.isInfiniteLoading} />);
  }

  render() {
    const { classes, relatedArticles } = this.props;
    const currentPath = this.props.url.pathname;
    const article = this.props.article.object;
    return (
      <Grid container className={classes.root} direction="column" align="center" justify="center">
        <HeaderTabs pathname={currentPath} />
        {this.renderArticles()}
      </Grid>
    );
  }
}

postPage.defaultProps = {
  relatedArticles: {},
};

postPage.propTypes = {
  classes: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
  relatedArticles: PropTypes.object,
  url: PropTypes.object.isRequired,
};

export default compose(withStyles(styleSheet), withRoot)(postPage);
