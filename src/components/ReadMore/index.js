import { useState } from "react";
import classNames from 'classnames/bind';
import styles from './ReadMore.module.css';

const cx = classNames.bind(styles);

function ReadMore({ limit, children }) {

    const text = children;

    const [readMore, setReadMore] = useState(false);

    const toggleReadMore = () => {
        setReadMore(prevState => !prevState);
    }

    return (
        <p className={cx('read-more-link')}>
            {readMore ? text : text.substr(0, limit)}
            <span onClick={toggleReadMore}>{readMore ? ' Ẩn bớt' : '...Xem thêm'}</span>
        </p>
    );
}

export default ReadMore;