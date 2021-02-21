import React, {Component} from 'react';
import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const CSSModule = () => {
    console.log(styles);
    return (
        <div className = {cx('wapper', 'inverted')}>
            안녕하세요 , 저는 <span className = "something">CSS Module!</span>
        </div>
    )
}

export default CSSModule;