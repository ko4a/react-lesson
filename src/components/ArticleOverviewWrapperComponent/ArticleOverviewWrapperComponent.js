import React from 'react'
import PropTypes from 'prop-types'
import styles from './ArticleOverviewWrapper.module.css'
export const ArticleOverviewWrapperComponent =({children})=>
    <div className={styles.wrapper}>
        {children}
    </div>

ArticleOverviewWrapperComponent.propTypes = {
  children: PropTypes.array
};