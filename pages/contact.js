import React from 'react';
import PropTypes from 'prop-types';

import HeaderTabs from '../components/Shared/HeaderTabs';
import withRoot from '../components/withRoot';

function Contact(props) {
  return (
    <div>
      <HeaderTabs pathname={props.url.pathname} />
    </div>
  );
}

export default withRoot(Contact);

Contact.propTypes = {
  url: PropTypes.object.isRequired,
};
