import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LinkedinFollowCompany extends Component {
  static propTypes = {
    companyId: PropTypes.number,
    counter: PropTypes.oneOf(['top', 'right']),
    lang: PropTypes.string
  };

  static defaultProps = {
    counter: 'top',
    lang: 'en_US'
  };

  componentDidMount () {
    // Load the SDK asynchronously
    ((doc, tag, id) => {
      const {lang} = this.props,
        [element] = doc.getElementsByTagName(tag),
        fjs = element;
      let js = element;
      if (doc.getElementById(id)) {
        return;
      }
      js = doc.createElement(tag);
      js.id = id;
      js.type = 'text/javascript';
      js.src = '//platform.linkedin.com/in.js';
      js.innerHTML = `lang: ${lang}`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'linkedin-jssdk');
  }

  render () {
    const {companyId, counter} = this.props;

    return (
      <div>
        <script
          type="IN/FollowCompany"
          data-id={companyId}
          data-counter={counter}
        />
      </div>
    );
  }
}

export default LinkedinFollowCompany;
