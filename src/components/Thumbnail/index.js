import classNames from 'classnames/bind';
import styles from './Thumbnail.module.css';

const cx = classNames.bind(styles);

function Thumbnail({ children }) {
	return (
		<div className={cx('wrapper')}>
			{children}
		</div>
	);
}

export default Thumbnail;