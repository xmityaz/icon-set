/**
 * Created by xmityaz on 15.10.16.
 */

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import theme from './IconContainer.css';

const propTypes = {
  icon: PropTypes.any
};

class IconContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hovered: false,
    };
  }

  onMouseOver = () => {
    this.setState({ hovered: true });
  };

  onMouseOut = () => {
    this.setState({ hovered: false });
  };

  render() {
    const { icon } = this.props;
    const { hovered } = this.state;
    const className = classNames(theme.root, { [theme.hovered]: hovered });

    const iconProps = {
      fill: hovered ? '#ffffff' : '#444444'  // todo: move it to separate variables file
    };
    const IconElement = {
      ...icon,
      props: { ...icon.props, ...iconProps }
    };

    return (
      <div className={className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
        {IconElement}
      </div>
    );
  }
}

IconContainer.propTypes = propTypes;

export default IconContainer ;
