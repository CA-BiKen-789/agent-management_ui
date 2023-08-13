import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';
import Title from '~/components/Title';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Banner />
            <Navigation />
            <div className={cx('container')}>
                <div className={cx('container-intro')}>
                    <Title>trang chính thức của 789bet</Title>
                    <div className={cx('intro')}>
                        <img className={cx('title')} src="/images/title_goal.png" alt="Title" />
                        <div className={cx('description')}>
                            <img src="/images/video.png" alt="Video" />
                            <div className={cx('content')}>
                                <span>
                                    789BET là nhà cái có giấy phép cá cược trực tuyến hợp pháp được cấp
                                    thông qua Khu kinh tế Isle of Man & Cagayan Economic Zone and Free Port.
                                    <br />
                                </span>
                                <span>
                                    789BET là một tổ chức xuyên quốc gia với quy mô lớn và nổi tiếng khắp
                                    Châu Á - Thái Bình Dương.
                                    <br />
                                </span>
                                <span>
                                    789BET thuộc về tập đoàn M.A.N Entertainment Group,
                                    trụ sở chính đặt tại thủ đô Manila của "Philippines" và được coi là tập đoàn
                                    lớn nhất trên thị trường cờ bạc trực tuyến châu Á, với đội ngũ nhân viên đông đảo.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('container-info')}>
                    <div className={cx('info-more')}>
                        <div className={cx('goal')}>
                            <img src="/images/goal.png" alt="Mục tiêu" />
                            <div className={cx('goal-content')}>
                                <span>
                                    Mục tiêu của "789BET Online Entertainment" là đảm bảo sự công bằng giữa
                                    Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và năng lực
                                    khách quan của "789BET Online Entertainment".
                                </span>
                                <br />
                                <span>
                                    789BET Online Entertainment
                                    là trang web trò chơi quy mô lớn đáng tin cậy và phổ biến nhất ở thị trường
                                    Châu Á, được chứng nhận bởi Hiệp hội Cá cược Trực tuyến Quốc tế và là một trong
                                    những nhà cái có đa dạng sản phẩm trò chơi trực tuyến được chứng nhận và cấp
                                    phép đầy đủ.
                                </span>
                            </div>
                        </div>
                        <div className={cx('safe')}>
                            <img src="/images/safe.png" alt="An toàn và Bảo mật" />
                            <div className={cx('safe-content')}>
                                <span>
                                    Mục tiêu của "789BET Online Entertainment" là đảm bảo sự công bằng giữa
                                    Khách Hàng và Công Ty, đồng thời thể hiện đầy đủ các phẩm chất và năng lực
                                    khách quan của "789BET Online Entertainment".
                                </span>
                                <br />
                                <span>
                                    789BET Online Entertainment
                                    là trang web trò chơi quy mô lớn đáng tin cậy và phổ biến nhất ở thị trường
                                    Châu Á, được chứng nhận bởi Hiệp hội Cá cược Trực tuyến Quốc tế và là một trong
                                    những nhà cái có đa dạng sản phẩm trò chơi trực tuyến được chứng nhận và cấp
                                    phép đầy đủ.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;