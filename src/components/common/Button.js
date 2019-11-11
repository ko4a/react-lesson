import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const Button =({name, onClick})=>{
  return (<button className={styles.button} onClick={()=>onClick('clicked')}> {name}</button>)
};

Button.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
};