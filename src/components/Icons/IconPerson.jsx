/**
 * Created by xmityaz on 15.10.16.
 */

import React, { PropTypes } from 'react';

const propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string
};

const defaultProps = {
  height: "50px",
  width: "50px",
  fill: "#444444"
};

function IconAlert({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 50 50"
      aria-labelledby="title"
    >
      <title id="title">Alert</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" fill={fill}>
          <path d="M14.3840746,43 C13.5003705,40.9102821 13,38.5281834 13,36 C13,29.9946025 15.8233066,24.8134781 19.9012835,22.4174223 C17.5447926,20.7944833 16,18.0776445 16,15 C16,10.0294373 20.0294373,6 25,6 C29.9705627,6 34,10.0294373 34,15 C34,18.0776445 32.4552074,20.7944833 30.0987165,22.4174223 C34.1766934,24.8134781 37,29.9946025 37,36 C37,38.5281834 36.4996295,40.9102821 35.6159254,43 L14.3840746,43 Z" id="Combined-Shape"></path>
        </g>
      </g>
    </svg>
  );
}

IconAlert.propTypes = propTypes;
IconAlert.defaultProps = defaultProps;

export default IconAlert ;
