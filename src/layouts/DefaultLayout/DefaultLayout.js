import style from './DefaultLayout.module.scss';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    // Hiện thị sidebar
    const showSidebar = true;

    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('body')}>
                {showSidebar && (
                    <div className={cx('sidebar')}>
                        <Sidebar />
                    </div>
                )}

                <div className={cx('content', { 'full-width': !showSidebar })}>{children}</div>
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;
