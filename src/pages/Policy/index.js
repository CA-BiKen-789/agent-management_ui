import classNames from 'classnames/bind';
import styles from './Policy.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';
import Title from '~/components/Title';
import Footer from '~/components/Footer';
import Thumbnail from '~/components/Thumbnail';
import Dropdown from '~/components/Dropdown';

const cx = classNames.bind(styles);

function Policy() {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<Banner />
			<Navigation />
			<div className={cx('inner')}>
				<div className={cx('container')}>
					<Title>trang chính thức của 789bet</Title>
					<div className={cx('thumbnail')}>
						<Thumbnail>
							<img src="/images/versatile.png" alt="Đa Năng" />
							<h1>
								Đa Năng
							</h1>
							<span>
								Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
							</span>
						</Thumbnail>
						<Thumbnail>
							<img src="/images/stable.png" alt="Đa Năng" />
							<h1>
								ổn định
							</h1>
							<span>
								Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
							</span>
						</Thumbnail>
						<Thumbnail>
							<img src="/images/support.png" alt="Đa Năng" />
							<h1>
								Hỗ trợ
							</h1>
							<span>
								Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
							</span>
						</Thumbnail>
						<Thumbnail>
							<img src="/images/sp_speed.png" alt="Đa Năng" />
							<h1>
								Siêu tốc
							</h1>
							<span>
								Không phải chịu bất kỳ chi phí nào khi đăng ký, không giới hạn thu nhập, kiếm tiền mọi lúc mọi nơi.
							</span>
						</Thumbnail>
					</div>
					<div className={cx('label')}>
						<img src="/images/label.png" alt="Label" />
					</div>
					<div className={cx('dropdown')}>
						<Dropdown
							urlImage='/images/register_account.png'
							title="Đăng ký tài khoản"
						>
							<span>Click vào mục "Đăng Ký" và điền chính xác những thông tin bắt buộc. Sau đó bạn cần liên hệ đến Telegram: Đại lý 789bet hoặc bộ phận CSKH 24/7 789BET để được hỗ trợ hoàn thành thủ tục đăng ký.</span>
						</Dropdown>
						<Dropdown
							urlImage='/images/approval.png'
							title="Đăng ký tài khoản"
						>
							<span>Đơn đăng ký hợp tác sau khi tạo thành công cần liên hệ đến NEW88 để được xét duyệt, sau khi đạt thỏa thuận về chính sách hợp tác chuyên viên hỗ trợ sẽ kích hoạt tài khoản đại lý và link liên kết cho bạn.</span>
						</Dropdown>
						<Dropdown
							urlImage='/images/discount.png'
							title="Đăng ký tài khoản"
						>
							<span>Dữ liệu tính toán sẽ được thống kê từ 00:00 giờ ngày đầu tiên của tháng đến 23:59:59 (GMT+8) ngày cuối cùng của tháng. Thời gian thanh toán từ ngày 3 đến ngày 5 đầu tháng kế tiếp kèm theo báo cáo đại lý. Hoa hồng lên đến 60% sẽ được chuyển khoản trực tiếp vào tài khoản ngân hàng đại lý cung cấp trước đó. </span>
						</Dropdown>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Policy;