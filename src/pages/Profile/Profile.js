import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <h2>Thông tin cá nhân</h2>
            <div className={cx('card')}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                    alt="ảnh"
                />
                <div className={cx('info')}>
                    <span>
                        <p>Họ và tên: </p>Nguyễn Thế Quang
                    </span>
                    <span>
                        <p>Ngày sinh: </p>27/01/2003
                    </span>
                    <span>
                        <p>CMND/CCCD: </p>027203004584
                    </span>
                    <span>
                        <p>Mã sinh viên: </p>21111062295
                    </span>
                    <span>
                        <p>Ngành học: </p>Công nghệ thông tin
                    </span>
                    <span>
                        <p>Lớp: </p>DH11C8
                    </span>
                    <span>
                        <p>Khóa: </p>2021-2025
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
