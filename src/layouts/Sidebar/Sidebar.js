import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAddressCard,
    faBoxesStacked,
    faCalendarDays,
    faCoins,
    faHouse,
    faNewspaper,
} from '@fortawesome/free-solid-svg-icons';
import { faWpforms } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('sidebar-list')}>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faHouse} />
                        Trang chủ
                    </Link>
                </li>
                <li>
                    <Link to="/tintuc">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faNewspaper} />
                        Tin tức
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faAddressCard} />
                        Profile
                    </Link>
                </li>
                <li>
                    <Link to="/gochoctap">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faBoxesStacked} />
                        Góc học tập
                    </Link>
                </li>
                <li>
                    <Link to="/thoikhoabieu">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faCalendarDays} />
                        Thời khóa biểu
                    </Link>
                </li>
                <li>
                    <Link to="/dangky_hoctap">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faWpforms} />
                        Đăng ký trực tiếp
                    </Link>
                </li>
                <li>
                    <Link to="/taichinh">
                        <FontAwesomeIcon className={cx('sidebar-icon')} icon={faCoins} />
                        Tài chính
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
