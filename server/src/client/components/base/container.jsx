import cx from 'classnames';
import React from 'react';
import * as styles from './container.module.scss';

function Container({ children, className }) {
  return <div className={cx(className, styles.container)}>{children}</div>;
}

export default Container;
