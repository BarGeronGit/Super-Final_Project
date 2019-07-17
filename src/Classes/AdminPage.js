import React from 'react';
import './AdminPage.css';
import Dropdown from '../DropDown'
import MainHeader from '../Header'
import RouteButton from '../Components/RouteButton'
import axios from 'axios'
import AlertMessage from './AlertMessage';
import Loading from '../Components/Loading'

class Admin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mileStoneName: null,
            MileStoneToPickFrom: [],
            chosen: 0,
            errorStatus: false,
            Loading: false,
            firstName: null,
            surName: null,
            passwordAdmin: null,
            wrongAdminDetailes: null,
            wrongPassWordDetailes: null,
            oldPass: null,
            newPass: null,
            newPassVer: null,
            existInDb: false,
            showMileDiv: false,
            showAdminDiv: false,
            showPassDiv: false,
            passwordCurrent: null,
        }
    }

    handleErrorsToFalse = () => {
        this.setState({
            errorStatus: false,
            existInDb: false,
        })
    }


    handleChangeMileStoneName = (ev) => {
        this.setState({ mileStoneName: ev.target.value })
    }

    handleChange = (ev) => {
        this.setState({ chosen: ev })
    }

    handleChangeStateAdmin = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
            wrongAdminDetailes: null
        })
    }

    handleChangeStatePassword = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value,
            wrongPassWordDetailes: null
        })
    }
    //Get MILESTONE data from DB
    //****************************************************************************************** */
    componentWillMount() {
        this.Search();
        this.bringLecturers();
        this.setState({
            AdminId: this.props.AdminId,
            passwordCurrent: this.props.Password
        })
    }

    Search() {
        let url = 'http://localhost:61009/api/MileStone'

        fetch(url)
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => this.getData(data))
            .catch(error => this.setState({
                message: "הייתה שגיאה בחיבור לשרת",
                errorStatus: true,
                Loading: false
            }));
    }

    handleErrors = (response) => {
        if (!response.ok) {
            console.log(response)
            throw Error(response.statusText);
        }
        return response;
    }

    getData = (data) => {
        var mileStonesArr = [];
        data.map((mile) => mileStonesArr.push({ id: mile.Key, value: mile.Key, text: mile.DropDown }))
        this.setState({
            MileStoneToPickFrom: mileStonesArr
        });
    }
    //****************************************************************************************** */


    //Get Admin data from DB
    //****************************************************************************************** */
    bringLecturers() {
        let url = 'http://localhost:61009/api/Lecturers'

        fetch(url)
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => this.getDataLecturer(data))
            .catch(error => this.setState({
                message: "הייתה שגיאה בחיבור לשרת",
                errorStatus: true,
                Loading: false
            }));
    }

    handleErrors = (response) => {
        if (!response.ok) {
            console.log(response)
            throw Error(response.statusText);
        }
        return response;
    }

    getDataLecturer = (data) => {
        var LecturerArr = [];
        data.map((lecturer) => LecturerArr.push({ id: lecturer.Number, firstName: lecturer.FirstName, surName: lecturer.SurName, password: lecturer.Password }))
        this.setState({
            adminArr: LecturerArr
        });
    }

    //insert new milestone to DB 
    //****************************************************************************************** */

    handleDataInsertMileStone = () => {
        const mileName = this.state.mileStoneName
        if (mileName === null || mileName === "" || mileName.length < 2) {
            this.setState({
                errorStatus: true,
                message: "אנא הזן ערך לאבן דרך"
            })
        } else {
            this.setState({ Loading: true })
            axios({
                method: 'Post',
                url: 'http://localhost:61009/api/MileStone/' + mileName,
            })
                .then(this.handleResponse)
                .catch(error => this.setState({
                    message: "הייתה שגיאה בחיבור לשרת",
                    errorStatus: true,
                    Loading: false
                }));
        }
    }


    //insert new admin to DB 
    //****************************************************************************************** */


    checkIfExist = () => {
        var flag = null;
        var adminArr = this.state.adminArr
        adminArr.forEach(element => {
            var firstName = this.state.firstName
            var surName = this.state.surName
            if (element.firstName === firstName && element.surName === surName) {
                flag = true;
            }
        })
        this.setState({ existInDb: flag }, () => {
            if (this.state.existInDb) {
                this.setState({
                    errorStatus: true,
                    message: "מנהל משחק קיים במערכת",
                })
            } else {
                this.handleDataInsertAdmin();
            }
        });
    }

    handleDataInsertAdmin = () => {
        var firstName = this.state.firstName
        var surName = this.state.surName
        var passwordAdmin = this.state.passwordAdmin
        if (firstName === null || firstName === "" || surName === null || surName === "" || passwordAdmin === null || passwordAdmin === "" || passwordAdmin.length < 8) {
            this.setState({ wrongAdminDetailes: "אחד או יותר מהנתונים שגויים" })
        } else {
            this.setState({ Loading: true })
            axios({
                method: 'Post',
                url: 'http://localhost:61009/api/Lecturers/' + firstName + '/' + surName + '/' + passwordAdmin,
            })
                .then(this.handleResponse)
                .catch(error => this.setState({
                    message: "הייתה שגיאה בחיבור לשרת",
                    errorStatus: true,
                    Loading: false
                }));
        }
    };

    //Change passowrd to admin in DB 
    //****************************************************************************************** */

    changePasswordAdmin = () => {
        const newPass = this.state.newPass
        const passVer = this.state.newPassVer
        const id = this.state.AdminId
        const oldPass = this.state.oldPass
        const passwordCurrent = this.state.passwordCurrent
        if (oldPass === passwordCurrent && newPass === passVer && newPass.length > 7) {
            this.setState({ Loading: true })
            axios({
                method: 'Post',
                url: 'http://localhost:61009/api/Lecturers/' + id + '/' + newPass,
            })  .then(this.handleResponse)
                .catch(error => this.setState({
                    message: "הייתה שגיאה בחיבור לשרת",
                    errorStatus: true,
                    Loading: false,
                    title: "שגיאה!"
                }));

        } else (
            this.setState({ wrongPassWordDetailes: "אחד או יותר מהפרטים שגויים" })
        )
    }

    //Callback functions 
    //****************************************************************************************** */
    handleResponse = (response) => {

        if (response.data === 0) {
            console.log("handleResponse bad", response.data)
            this.setState({
                errorStatus: true,
                message: "שגיאה בהזנת הנתונים",
                Loading: false,
                title: "שגיאה!"
            })

        } else if ((response.data === 1)) {
            console.log("handleResponse good", response.data)
            this.setState({
                errorStatus: true,
                message: "הנתונים הוכנסו בהצלחה!",
                title: "הצלחה!",
                Loading: false,
                firstName: null,
                surName: null,
                passwordAdmin: null,
                mileStoneName: null,
                existInDb: false

            })
        }
    }


    //Handle divs 
    //****************************************************************************************** */
    changeShowDivMile = () => {
        this.setState({ showMileDiv: !this.state.showMileDiv })
    }
    changeShowDivAdmin = () => {
        this.setState({ showAdminDiv: !this.state.showAdminDiv })
    }
    changeShowDivPass = () => {
        this.setState({ showPassDiv: !this.state.showPassDiv })
    }
    //****************************************************************************************** */


    render() {
        var elementMile = this.state.showMileDiv ? (<div className="divmiddle">
            <div className="itemHeadline">
                <h2>{"הוספת אבן דרך"}</h2>
            </div>
            <div className="container">
                <div className="itemNameMile ui input elementStyle">
                    <div className="textItem"> שם אבן דרך:</div>
                    <input type="text" placeholder={"שם אבן דרך"} onChange={this.handleChangeMileStoneName} />
                </div>
                <div className="itemNameMile ui input elementStyle">
                    <div className="textItem"> אבני דרך קיימות: </div>
                    <Dropdown options={this.state.MileStoneToPickFrom} chosen={this.state.chosen} headline={"אבן דרך"} changed={this.handleChange} />
                </div>
            </div>
            <div className="greenButton" onClick={this.handleDataInsertMileStone} >
                <div className="itemButton">
                    <RouteButton
                        value={"הכנס אבן דרך"} />
                </div>
            </div>
        </div>) : (<div className="greenButton" onClick={this.changeShowDivMile} >
            <div className="itemButton">
                <RouteButton
                    value={"הכנס אבן דרך חדשה"} />
            </div>
        </div>)

        var elementAdmin = this.state.showAdminDiv ? (<div className="divmiddle">
            <div className="itemHeadline">
                <h2>{"הוספת מנהל משחק"} </h2>
            </div>
            <div style={{ width: "100%" }} className="itemNameWrong ui input elementStyle">
                <div style={{ color: "red" }}>
                    {this.state.wrongAdminDetailes}
                </div>
            </div>
            <div className="containerAdmin">
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem"> שם פרטי:</div>
                    <input type="text" name="firstName" placeholder={"שם פרטי"} onChange={this.handleChangeStateAdmin} />
                </div>
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem"> שם משפחה:</div>
                    <input type="text" name="surName" placeholder={"שם משפחה"} onChange={this.handleChangeStateAdmin} />
                </div>
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem">סיסמא:</div>
                    <input type="text" name="passwordAdmin" placeholder={"סיסמא"} onChange={this.handleChangeStateAdmin} />
                </div>
                <div style={{ width: "100%"}} className="passWordStyle ui input elementStyle">
                <div>
                    סיסמא באורך 8 תווים לפחות
                </div>
            </div>
            </div>
            <div className="greenButton" onClick={this.checkIfExist} >
                <div className="itemButton">
                    <RouteButton
                        value={"הכנס מנהל משחק"} />
                </div>
            </div>
        </div>
        ) : (<div className="greenButton" name="blabla" onClick={this.changeShowDivAdmin} >
            <div className="itemButton">
                <RouteButton
                    value={"הכנס מנהל משחק חדש"} />
            </div>
        </div>)

        var elementPass = this.state.showPassDiv ? (<div className="divmiddle">
            <div className="itemHeadline">
                <h2>{"החלפת סיסמא"} </h2>
            </div>
            <div style={{ width: "100%" }} className="itemNameWrong ui input elementStyle">
                <div style={{ color: "red" }}>
                    {this.state.wrongPassWordDetailes}
                </div>
            </div>
            <div className="containerAdmin">
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem"> סיסמא נוכחית:</div>
                    <input type="text" name="oldPass" placeholder={"סיסמא נוכחית"} onChange={this.handleChangeStatePassword} />
                </div>
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem"> סיסמא חדשה:</div>
                    <input type="text" name="newPass" placeholder={"סיסמא חדשה"} onChange={this.handleChangeStatePassword} />
                </div>
                <div className="itemNameMileAdmin ui input elementStyle">
                    <div className="textItem"> וידוא סיסמא חדשה:</div>
                    <input type="text" name="newPassVer" placeholder={"וידוא סיסמא חדשה"} onChange={this.handleChangeStatePassword} />
                </div>
                <div style={{ width: "100%"}} className="passWordStyle ui input elementStyle">
                <div>
                    סיסמא באורך 8 תווים לפחות
                </div>
            </div>
            </div>
            <div className="greenButton" onClick={this.changePasswordAdmin} >
                <div className="itemButton">
                    <RouteButton
                        value={"החלף סיסמא"} />
                </div>
            </div>
        </div>) : (<div className="greenButton" name="blabla" onClick={this.changeShowDivPass} >
            <div className="itemButton">
                <RouteButton
                    value={"החלפת סיסמא"} />
            </div>
        </div>)

        if (this.state.Loading === true) {
            return (
                <div>
                    <Loading
                        Loading={"אנא המתן בזמן הכנסת הנתונים.."} />
                </div>
            )
        } else {
            return ((
                <React.Fragment>
                    <div className="divmiddleHeader">
                    <div className="itemHeadline">
                        <MainHeader text={"דף מנהל"} />
                    </div>
                    {elementMile}
                    {elementAdmin}
                    {elementPass}
                    </div>
                    <AlertMessage
                        errorStatus={this.state.errorStatus}
                        handleErrorsToFalse={this.handleErrorsToFalse}
                        message={this.state.message}
                        title={this.state.title}
                    />
                </React.Fragment>
            ))
        }
    }
}

export default Admin
