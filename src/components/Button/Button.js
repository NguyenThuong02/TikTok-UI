import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    text = false,
    primary = false,
    outline = false,
    rounted = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        text,
        primary,
        outline,
        rounted,
        disabled,
        small,
        large,
        leftIcon,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

// PropType là định dạng kiểu dữ liệu
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    text: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounted: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
