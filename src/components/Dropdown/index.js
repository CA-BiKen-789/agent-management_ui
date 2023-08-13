import classNames from 'classnames/bind';
import styles from './Dropdown.module.css';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Dropdown({ urlImage, title, children }) {
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);

        const toggler = () => { setToggleValue(!toggleValue) };
        return [toggleValue, toggler]
    };
    const [toggle, setToggle] = useToggle();

    return (
        <div className={cx('wrapper')}>
            <img
                className={toggle ? cx('background') : cx('')}
                src={urlImage}
                onClick={setToggle}
                alt={title}
            />
            {toggle && (
                <div className={cx('content-dropdown')}>
                    {children}
                </div>
            )}
        </div>
    );
}

export default Dropdown;