import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.1.css';
// import Teams from './Teams';
// import PickFiles from './PickFile'
// import { Route, BrowserRouter as Router } from 'react-router-dom';
// import Files from './Files';
import FatherGameOpening from './Classes/FatherGameOpening.js'
// import FooterBlock from './Footer'
// import SideMenu from './SideMenu';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Icon } from 'semantic-ui-react';
import './App.1.css';
import Login from './Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Decision from './Decision'
import NavigationPage from './NavigationPage'
import GamePage from './GamePage'
import AlertMessage from './AlertMessage'
import axios from "axios";
import DashBoard from './Dashboard'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Admin from './Classes/AdminPage'
import Chat from './Chat';




class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loginStatusId: 0,
      Id: 0,
      Password: 0,
    }
  }

  CheckAuthentication = () => {
    console.log(this.state.Id, this.state.Password)
    axios.get('http://localhost:61009/api/Lecturers', {
      params: {
        Email: this.state.Id,
        Password: this.state.Password,
      }
    })
      .then(this.handleResponse)
      .catch(error => this.setState({
        message: "שגיאה בחיבור לשרת, בדוק את חיבור האינטרנט",
        errorstatus: true
      }))
  }

  handleerrortofalse = () => {
    this.setState({ errorstatus: false })
  }

  handleResponse = (response) => {
    if (response.data != 0) {
      this.setState({
        loginStatusId: response.data,
        loginStatusTime: 1
      })
      localStorage.setItem("login", response.data)
    } else {
      this.setState({
        errorstatus: true,
        message: "שם משתמש או סיסמא לא נכונים"
      })
    }
  }

  handleStateData = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleStateStatusFalse = () => {
    this.setState({ loginStatusId: 0 })
  }



  render() {
    var item = localStorage.getItem("loginName") !== null ? localStorage.getItem("loginName") :  null
    if (this.state.loginStatusId != 0) {
      return (
        <div className="App">
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
                        דף הבית
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="FatherGameOpening">
                      <NavIcon>
                        <Icon name="gavel" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        יצירת משחק
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="Chat">
                      <NavIcon>
                        <Icon name="wechat" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        צ'אט
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="DashBoard">
                      <NavIcon>
                        <Icon name="chart line" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        דוחות וגרפים
                    </NavText>
                    </NavItem>
                    <NavItem eventKey="Admin">
                      <NavIcon>
                        <Icon name="adn" style={{ fontSize: '1.75em' }} />
                      </NavIcon>
                      <NavText>
                        דף מנהל
                  </NavText>
                    </NavItem>
                    <NavItem onSelect={this.handleStateStatusFalse} eventKey="">
                      <NavIcon id="powOff">
                        <Icon name="power off" style={{ fontSize: '1.45em' }} />
                      </NavIcon>
                      <NavText id="powOff">
                        התנתק
                </NavText>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main style={{ marginLeft: "100px", marginRight: "25px" }}>
                  <Route path="/" component={NavigationPage} exact />
                  <Route path="/Login" component={Login} exact />
                  <Route path="/FatherGameOpening" component={FatherGameOpening} />
                  <Route path="/Admin" render={(props) => <Admin {...props} AdminId={this.state.loginStatusId} Password={this.state.Password} />} />
                  <Route path="/DashBoard" component={DashBoard} />
                  <Route path="/Decision" component={Decision} exact />
                  <Route path="/NavigationPage" component={NavigationPage} />
                  <Route path="/GamePage" component={GamePage} />
                  <Route path="/Chat" component={Chat} />
                </main>
              </React.Fragment>
            )}
            />
          </Router>
        </div>
      );
    } else {
      return (
        <Router>
          <div>
            <Login
              handleStateData={this.handleStateData}
              handleStateStatus={this.handleStateStatus}
              CheckAuthentication={this.CheckAuthentication}
            />
            <AlertMessage
              message={this.state.message}
              errorstatus={this.state.errorstatus}
              handleerrortofalse={this.handleerrortofalse} />
          </div>
        </Router>
      )
    }
  }
}

export default App;