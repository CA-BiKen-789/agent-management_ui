import classNames from 'classnames/bind';
import styles from './About.module.css';
import Header from '~/components/Header';
import Banner from '~/components/Banner';
import Navigation from '~/components/Navigation';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Banner />
            <Navigation />
        </div>
    );
}

export default About;