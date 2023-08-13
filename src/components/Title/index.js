import classNames from 'classnames/bind';
import styles from './Title.module.css';

const cx = classNames.bind(styles);

function Title({ children }) {
	return (
		<div className={cx('title')}>
			<img src="/images/arrow_left.png" alt="Arrow" />
			<span>{children}</span>
			<img src="/images/arrow_right.png" alt="Arrow" />
		</div>
	);
}

export default Title;