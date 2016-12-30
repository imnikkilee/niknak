import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

// Styles
import './Container.scss';

class Container extends Component {

  /**
    *
    * Props:
    *
    * size: 'fullWidth' or 'maxWidth', required
    *
  */

  static propTypes = {
    className: PropTypes.string,
    size: PropTypes.string.isRequired
  }

  render() {
    const {
      className,
      size
    } = this.props;

    return (
      <div className={classnames(['Container', size, className])}>
        {this.props.children}
      </div>
    )
  }
}

export default Container;
