import classNames from 'classnames/bind';
import styles from './Footer.module.css';
import ReadMore from '~/components/ReadMore';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('description')}>
                    <img src="/images/footer_logo.png" alt='Logo' />
                    <div className={cx('read-more-link')}>
                        <ReadMore limit={230}>
                            789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được
                            cấp thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port.
                            Đây là tổ chức quốc tế phát triển với quy mô trải
                            789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được
                            cấp thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port.
                            Đây là tổ chức quốc tế phát triển với quy mô trải
                        </ReadMore>
                    </div>
                </div>
                <div className={cx('info')}>
                    <h2>Thông tin</h2>
                    <ul>
                        <li>
                            Về 789BET
                        </li>
                        <li>
                            Điều khoản và điều kiện
                        </li>
                        <li>
                            Chơi có trách nhiệm
                        </li>
                        <li>
                            Miễn trách nhiệm
                        </li>
                        <li>
                            Quyền riêng tư
                        </li>
                    </ul>
                </div>
                <ul className={cx('support')}>
                    <li>
                        Hướng dẫn rút tiền
                    </li>
                    <li>
                        Hướng dẫn nạp tiền
                    </li>
                    <li>
                        Câu hỏi thường gặp
                    </li>
                    <li>
                        Liên hệ
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;