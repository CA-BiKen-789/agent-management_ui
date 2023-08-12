import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Banner />
            <Navigation />
            <div className={cx('content')}>

            </div>
            <Footer />
        </div>
    );
}

export default Home;