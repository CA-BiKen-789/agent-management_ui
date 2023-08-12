import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src="/images/header_logo.png" alt="logo" />
                <img className={cx('slogan')} src="/images/slogan_suarez.png" alt="Slogan Suarez" />
            </div>
            <div className={cx('action')}>
                <div className={cx('locate')}>
                    <span className={cx('local-time')}>17:17:46 GMT+0700</span>
                    <div className={cx('language')}>
                        <ul>
                            <li>
                                <span>Tiếng Việt</span>
                                <img src="/images/language_logo.png" alt="Language Logo" />
                            </li>
                        </ul>
                        <img src="/images/arrow_down.png" alt='Arrow down' />
                    </div>
                </div>
                <div className={cx('access')}>
                    <a href='/'>
                        Đăng Nhập
                    </a>
                    <a className={cx('register')} href='/'>
                        Đăng Ký
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;