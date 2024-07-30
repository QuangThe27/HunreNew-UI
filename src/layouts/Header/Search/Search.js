import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input placeholder="Tìm kiếm thông tin?" />
            <button>
                <FontAwesomeIcon className={cx('search-btn')} icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Search;
