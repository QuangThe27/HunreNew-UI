import style from './DefaultLayout.module.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className={cx('body')}>
                <div className={cx('sidebar')}>
                    <Sidebar />
                </div>

                <div className={cx('content')}>{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
