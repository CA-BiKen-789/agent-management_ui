import classNames from 'classnames/bind';
import styles from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navigation() {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul>
                    <li>
                        <NavLink to="/" className={cx(isActive('/'))}>
                            Giới Thiệu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={cx(isActive('/about'))}>
                            về chúng tôi
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink exact to="/policy" className={cx(isActive('/policy'))}>
                            chính sách
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/discount" className={cx(isActive('/discount'))}>
                            cách tính hoa hồng
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/information" className={cx(isActive('/information'))}>
                            thông tin
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Navigation;