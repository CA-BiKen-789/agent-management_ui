import classNames from 'classnames/bind';
import styles from './Information.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';
import Title from '~/components/Title';
const cx = classNames.bind(styles);

function Information() {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<Banner />
			<Navigation />
			<div className={cx('inner')}>
				<Title>thông tin liên hệ</Title>
				<span className={cx('description')}>Nếu bạn gặp bất cứ vấn đề gì khi đăng ký thành viên, tham gia trò chơi hoặc cần giải đáp bất kỳ thông tin nào trên website của 789BET. Hãy liên hệ trực tiếp với dịch vụ Chăm sóc khách hàng trực tuyến 24/7 của chúng tôi. Chúng tôi sẽ ngay lập tức giải quyết vấn đề giúp bạn.</span>
				<div className={cx('thumbnail')}>
					<img src="/images/customer_care.png" alt="Chăm sóc khách hàng" />
					<img src="/images/phone.png" alt="Điện thoại" />
					<img src="/images/email.png" alt="Email" />
				</div>
			</div>
		</div>
	);
}

export default Information;