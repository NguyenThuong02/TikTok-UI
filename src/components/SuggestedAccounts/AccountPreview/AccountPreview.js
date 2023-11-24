import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/367441266_823142876156575_4102467173689873828_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0VCTmJPqQuQAX-sItSw&_nc_ht=scontent.fhan17-1.fna&oh=00_AfB6MNXojVkZNoMtBLX2LuOVUdFDNDD6xYXNczc4PyXDjA&oe=65660CE5"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>ThuongNguyen</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>Nguyễn Thanh Thưởng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
