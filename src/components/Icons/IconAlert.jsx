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
          <path d="M25,3 L48,45 L2,45 L25,3 Z M25,9 L43,42 L7,42 L25,9 Z" id="Combined-Shape"></path>
          <circle id="Oval" cx="25" cy="39" r="2"></circle>
          <path d="M22.1910828,17.72 C23.1273885,16.76 26.8726115,16.76 27.8089172,17.72 C28.7452229,18.68 25.9363057,35 25.9363057,35 L24.0636943,35 C24.0636943,35 21.2547771,18.68 22.1910828,17.72 Z" id="Rectangle-2"></path>
        </g>
      </g>
    </svg>
  );
}

IconAlert.propTypes = propTypes;
IconAlert.defaultProps = defaultProps;

export default IconAlert ;
