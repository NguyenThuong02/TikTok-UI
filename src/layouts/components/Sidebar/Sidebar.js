import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCameraRetro,
    faCameraRotate,
    faHouse,
    faHouseChimney,
    faUserPlus,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItems
                    title="For Your"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon className={cx('iconPublic')} icon={faHouseChimney}></FontAwesomeIcon>}
                    activeIcon={<FontAwesomeIcon className={cx('iconPublic')} icon={faHouse}></FontAwesomeIcon>}
                />
                <MenuItems
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon className={cx('iconPublic')} icon={faUserPlus}></FontAwesomeIcon>}
                    activeIcon={<FontAwesomeIcon className={cx('iconPublic')} icon={faUsers}></FontAwesomeIcon>}
                />
                <MenuItems
                    title="LIVE"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon className={cx('iconPublic')} icon={faCameraRotate}></FontAwesomeIcon>}
                    activeIcon={<FontAwesomeIcon className={cx('iconPublic')} icon={faCameraRetro}></FontAwesomeIcon>}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
