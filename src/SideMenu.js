import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react';
import { Icon, Button } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.1.css';
import Login from './Login';
import Teams from './Teams';
import PickFiles from './PickFile'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Files from './Files';
import FatherGameOpening from './Classes/FatherGameOpening.js'
import Decision from './Decision'
import NavigationPage from './NavigationPage'
import GamePage from './GamePage'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SideMenu extends React.Component {
    render() {
        return (
            <Router>
                <Route render={({ location, history }) => (
                    <React.Fragment>
                        <SideNav className="sidenav---sidenav---_2tBP"
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}
                        >
                            <SideNav.Toggle />
                            <SideNav.Nav defaultSelected="דף הבית">
                                <NavItem eventKey="">
                                    <NavIcon>
                                        <Icon name="home" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Home
                                </NavText>
                                </NavItem>
                                <NavItem eventKey="devices">
                                    <NavIcon>
                                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                    </NavIcon>
                                    <NavText>
                                        Devices
                                </NavText>
                                </NavItem>
                            </SideNav.Nav>
                        </SideNav>
                        <main>
                            <Route path="/StepOne" component={FatherGameOpening} exact />
                            <Route path="/Teams" component={Teams} />
                            <Route path="/Files" component={Files} />
                            <Route path="/PickFIles" component={PickFiles} />
                            <Route path="/Decision" component={Decision} />
                            <Route path="/NavigationPage" component={NavigationPage} />
                            <Route path="/GamePage" component={GamePage} />
                        </main>
                    </React.Fragment>
                )}
                />
            </Router>
        )
    }
}

export default SideMenu;