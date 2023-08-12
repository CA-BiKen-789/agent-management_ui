import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src="/images/banner.png" />
            </div>
        </div>
    );
}

export default Banner;