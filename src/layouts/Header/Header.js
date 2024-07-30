/* eslint-disable jsx-a11y/alt-text */
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from './Search';
import Logo from './Logo';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} />

                <Search />

                <Logo />
            </div>
        </div>
    );
}

export default Header;
