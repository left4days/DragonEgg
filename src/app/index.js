import React from 'react';
import cx from 'classnames';
// import { push } from 'react-router-redux';
import { Row, Column } from 'ui/UxBox';
import { Route, Link } from "react-router-dom";

import Landing from './Landing';
import Auth from './Auth';
import AdminPanel from './AdminPanel';
import NoPage from './noPage';

import './uxComponent/uxStyles/index.scss';
import './styles.scss';

class App extends React.Component {
    render() {
        return(
            <Column className="main">
                <Row tagName="header" className={cx("main__header", '')} height="40px" ai="center" flexGrow="0">
                    <Row width="auto" className="main__logo" height="auto" margin="0 10px">
                        {/*<NavLink to='/'>Dragon Egg</NavLink>*/}
                    </Row>
                </Row>
                <Row className="main__body" overflow="auto" minHeight="calc(100vh - 120px)">
                    <Switch>
                        <Route path='/' exact component={Landing} />
                        <Route path='/auth' component={Auth} />
                        <Route path='/admin' component={AdminPanel} />
                        <Route component={NoPage} />
                    </Switch>
                </Row>
            </Column>
        )
    }
}

export default App;
