import React from 'react';
import { connect } from 'dva';
import styles from './index.css';

function IndexPage({count, dispatch}) {
    return (
        <div className={styles.normal}>
            <h1 className={styles.title}>Yay!2 Welcome to dva1222!</h1>
            <div className={styles.welcome} />
            <ul className={styles.list}>
                <li>To g2 started, edit <code>src/index.js22222</code> and save to reload.</li>
            </ul>
        </div>
    )
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
