import classNames from 'classnames/bind';
import styles from './Discount.module.css';
import Navigation from '~/components/Navigation';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Title from '~/components/Title';

const cx = classNames.bind(styles);


function Discount() {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<Banner />
			<Navigation />
			<div className={cx('inner')}>
				<Title>trang chính thức của 789bet</Title>
				<img className={cx('discount-content')} src="/images/content_discount.png" alt="Cách tính hoa hồng" />
			</div>
			<Footer />
		</div>
	);
}

export default Discount;