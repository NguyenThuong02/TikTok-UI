import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
// import Img from '../../img/2.jpeg'; // Không nên dùng như này nên tạo 1 file riêng để import

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7261e2353d2610d05eba8b89601b7e62.jpeg?x-expires=1699902000&x-signature=sH8pDv1zLyeEcYLWjMQMqmMG64c%3D"
                alt="Hoaa"
            />
            {/* <img className={cx('avatar')} src={Img} alt="Hoaa" /> */}
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvanA</span>
            </div>
        </div>
    );
}

export default AccountItem;
