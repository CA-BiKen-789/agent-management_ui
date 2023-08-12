import classNames from 'classnames/bind';
import styles from './Home.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>
                <Banner />
                <Navigation />
            </div>
        </div>
    );
}

export default Home;