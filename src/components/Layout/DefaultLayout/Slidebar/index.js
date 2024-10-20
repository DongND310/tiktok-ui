import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Slidebar</h2>
        </aside>
    );
}

export default Slidebar;
