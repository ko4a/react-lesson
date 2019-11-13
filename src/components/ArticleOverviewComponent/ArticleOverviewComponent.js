import React from 'react';
import styles from './ArticleOverviewComponent.module.css'
import PropTypes from 'prop-types'
import {CounterComponent} from "../CounterComponent";

export const ArticleOverviewComponent = ({ title, content, userName, createdAt, imageURL }) => {
    return (
        <div className={styles.card}>
            <h3>
                {title}
            </h3>
            <div>
                <img src={imageURL} className={styles.cardImage} />
            </div>
            <section>
                {content}
            </section>
            <div className={styles.cardFooter}>
                <span>
                    {userName}
                </span>
                <span>
                    {createdAt}
                </span>
            </div>
            <div>
                <CounterComponent/>
            </div>
        </div>
    )
};

ArticleOverviewComponent.propTypes ={
  title:PropTypes.string,
  content: PropTypes.string,
  userName:PropTypes.string,
  createdAt: PropTypes.string,
  imageURL: PropTypes.string
};