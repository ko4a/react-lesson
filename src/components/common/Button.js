import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import styles from './Button.module.css'
export const Button =({name, onClick, styleName})=>{
  return (<button className={classnames(styles.button, styleName)} onClick={onClick}> {name}</button>)
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};