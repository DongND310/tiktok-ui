import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://i.pinimg.com/564x/1e/a9/68/1ea9684eedd573de95500a3841d731e7.jpg"
                alt="img"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>huhuhu dau lung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>huhu buon ngu</span>
            </div>
        </div>
    );
}

export default AccountItem;
