import React from 'react';

import './index.scss';

export default function FloatingSquares(props) {
  return (
    <div class='container'>
      <ul class='particles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        {props.component}
      </ul>
    </div>
  );
}
