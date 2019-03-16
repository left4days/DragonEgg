import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// import './styles.scss';

class Auth extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { className } = this.props;

        return (
            <div className={cx('auth-page', className)}>
                AuthPage
            </div>
        );
    }
}

Class.propTypes = {
    className: PropTypes.string,
};

Class.defaultProps = {
    className: '',
};

export default Auth;
