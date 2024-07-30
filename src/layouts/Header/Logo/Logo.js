import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Logo() {
    return (
        <div className={cx('logo')}>
            <button>Đăng nhập</button>
        </div>
    );
}

export default Logo;
