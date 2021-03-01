import React from 'react';
import PropTypes from 'prop-types';
import cleanProps from 'react-clean-props';

import Loader from './Loader';

const DEFAULT_CLASS_NAME = 'react-load-mask';

const notEmpty = s => !!s;

export default class LoadMask extends React.Component {
  render() {
    const props = this.props;

    const visibleClassName = props.visible
      ? `${DEFAULT_CLASS_NAME}--visible`
      : '';
    const className = [
      props.className,
      DEFAULT_CLASS_NAME,
      visibleClassName,
      props.theme && `${DEFAULT_CLASS_NAME}--theme-${props.theme}`
    ]
      .filter(notEmpty)
      .join(' ');

    return (
      <div {...cleanProps(props, LoadMask.propTypes)} className={className}>
        <Loader size={props.size} theme={props.theme} />
        {this.props.children}
      </div>
    );
  }
}

LoadMask.defaultProps = { visible: false, theme: 'default' };

LoadMask.propTypes = { visible: PropTypes.bool, theme: PropTypes.string };
