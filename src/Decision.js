import React from 'react';
import ProductData from './ProductData'
import ProductDataTwo from './ProductDataTwo'
import "./App.1.css";
import "./Decision.css";
import HeaderMain from './Header'
import ProductDataFactory from './ProductDataFactory'
import ProductDataFactoryTwo from './ProductDataFactoryTwo'
import ProductDataFunding from './ProductDataFunding'
import { Form } from 'semantic-ui-react'
import ProductDataAgents from './ProductDataAgents'
import { Button, Icon } from 'semantic-ui-react'
import axios from 'axios';
import RouteButtonBack from './RouteButtonBack'


// const delay = ms => new Promise(res => setTimeout(res, ms));

// const yourFunction = async () => {
//     await delay(5000);
//     console.log("Waited 5s");

//     await delay(5000);
//     console.log("Waited an additional 5s");
// };

class Decision extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstShift1: "",
            SecondShift1: "",
            PricePerUnit1: "",
            Advertising1: "",
            QA1: "",
            ReasearchDevelopment1: "",
            AgentsCommision1: "",
            FirstShift2: "",
            SecondShift2: "",
            PricePerUnit2: "",
            Advertising2: "",
            QA2: "",
            ReasearchDevelopment2: "",
            AgentsCommision2: "",
            LongTimeLoan: "",
            ShortTimeLoan: "",
            BillsDeposit: "",
            ShortLoanPay: "",
            AgentsWorking: "",
            AgentToTrain: "",
            BaseSalary: "",
            MaterialFuture1: "",
            MaterialFuture2: "",
            MaintenanceStageOne: "",
            MaintenanceStageTwo: "",
            ExpendLevOne: "",
            ExpendLevTwo: "",
            EngineringResearch: "",
            Bonds: "",
            StockSells: "",
            Dividand: "",
            InvestmentSum: "",
            IsSpecialReport: "",
            TypeOfInvestment: "",
            isCancelInvestment: "",
            isAllowNotifications: "",
            componentfromdb: "",

        }

    }

    componentDidMount = () => {
        console.log("this.props.location.state.fromNotifications", this.props.location.state.fromNotifications)
        console.log("this.props.location.state.GameID", this.props.location.state.GameID)
        this.handleSeeDecision()
    }
    handleSeeDecision = () => {
        axios.get('http://localhost:61009/api/NewDecision', {
            params: {
                ID: this.props.location.state.TeamId
            }
        })
            .then(this.yourFunction)
            //     console.log(response.data.FirstShift1);
            //     console.log("this.state.FirstShift1", this.state.FirstShift1);
            // })
            .catch(function (error) {
                console.log(error);
            })
            .then(function (response) {
                // response.data.map = (e) => {
                //     console.log("handleSeeDecision key", e.key)
                //     console.log("handleSeeDecision vlaue", e.value)
                //     return (
                //         this.setState({ [e.key]: e.value }, () => {
                //             console.log("handleSeeDecision key", e.key)
                //             console.log("handleSeeDecision vlaue", e.value)
                //         })
                //     )
                // }
            });

    }

    yourFunction = (response) => {
        //      console.log(response.data[0].key,response.data[0].value )
        console.log(response.data)
        //  response.data.forEach(element => {
        //     this.setState({[element.key]: element.value}
        //  });
        this.setState({ FirstShift1: response.data.FirstShift1 });
        this.setState({ SecondShift1: response.data.SecondShift1 });
        this.setState({ PricePerUnit1: response.data.PricePerUnit1 });
        this.setState({ Advertising1: response.data.Advertising1 });
        this.setState({ QA1: response.data.QA1 });
        this.setState({ ReasearchDevelopment1: response.data.ReasearchDevelopment1 });
        this.setState({ AgentsCommision1: response.data.AgentsCommision1 });
        this.setState({ FirstShift2: response.data.FirstShift2 });
        this.setState({ SecondShift2: response.data.SecondShift2 });
        this.setState({ PricePerUnit2: response.data.PricePerUnit2 });
        this.setState({ Advertising2: response.data.Advertising2 });
        this.setState({ QA2: response.data.QA2 });
        this.setState({ ReasearchDevelopment2: response.data.ReasearchDevelopment2 });
        this.setState({ AgentsCommision2: response.data.AgentsCommision2 });
        this.setState({ LongTimeLoan: response.data.LongTimeLoan });
        this.setState({ ShortTimeLoan: response.data.ShortTimeLoan });
        this.setState({ BillsDeposit: response.data.BillsDeposit });
        this.setState({ ShortLoanPay: response.data.ShortLoanPay });
        this.setState({ AgentsWorking: response.data.AgentsWorking });
        this.setState({ AgentToTrain: response.data.AgentToTrain });
        this.setState({ BaseSalary: response.data.BaseSalary });
        this.setState({ MaterialFuture1: response.data.MaterialFuture1 });
        this.setState({ MaterialFuture2: response.data.MaterialFuture2 });
        this.setState({ MaintenanceStageOne: response.data.MaintenanceStageOne });
        this.setState({ MaintenanceStageTwo: response.data.MaintenanceStageTwo });
        this.setState({ ExpendLevOne: response.data.ExpendLevOne });
        this.setState({ ExpendLevTwo: response.data.ExpendLevTwo });
        this.setState({ EngineringResearch: response.data.EngineringResearch });
        this.setState({ Bonds: response.data.Bonds });
        this.setState({ StockSells: response.data.StockSells });
        this.setState({ Dividand: response.data.Dividand });
        this.setState({ InvestmentSum: response.data.InvestmentSum });
        this.setState({ IsSpecialReport: response.data.IsSpecialReport });
        this.setState({ TypeOfInvestment: response.data.TypeOfInvestment });
        this.setState({ isCancelInvestment: response.data.isCancelInvestment });
        this.setState({ isAllowNotifications: response.data.isAllowNotifications });


    }


    handleDecision = () => {
        const Decision = {
            FirstShift1: this.state.FirstShift1,
            SecondShift1: this.state.SecondShift1,
            PricePerUnit1: this.state.PricePerUnit1,
            Advertising1: this.state.Advertising1,
            QA1: this.state.QA1,
            ReasearchDevelopment1: this.state.ReasearchDevelopment1,
            AgentsCommision1: this.state.AgentsCommision1,
            FirstShift2: this.state.FirstShift2,
            SecondShift2: this.state.SecondShift2,
            PricePerUnit2: this.state.PricePerUnit2,
            Advertising2: this.state.Advertising2,
            QA2: this.state.QA2,
            ReasearchDevelopment2: this.state.QA2,
            AgentsCommision2: this.state.AgentsCommision2,
            LongTimeLoan: this.state.LongTimeLoan,
            ShortTimeLoan: this.state.ShortTimeLoan,
            BillsDeposit: this.state.BillsDeposit,
            ShortLoanPay: this.state.ShortLoanPay,
            AgentsWorking: this.state.AgentsWorking,
            AgentToTrain: this.state.AgentToTrain,
            BaseSalary: this.state.BaseSalary,
            MaterialFuture1: this.state.MaterialFuture1,
            MaterialFuture2: this.state.MaterialFuture2,
            MaintenanceStageOne: this.state.MaintenanceStageOne,
            MaintenanceStageTwo: this.state.MaintenanceStageTwo,
            ExpendLevOne: this.state.ExpendLevOne,
            ExpendLevTwo: this.state.ExpendLevTwo,
            EngineringResearch: this.state.EngineringResearch,
            Bonds: this.state.Bonds,
            StockSells: this.state.StockSells,
            Dividand: this.state.Dividand,
            InvestmentSum: this.state.InvestmentSum,
            IsSpecialReport: this.state.IsSpecialReport,
            TypeOfInvestment: this.state.TypeOfInvestment,
            isCancelInvestment: this.state.isCancelInvestment,
            isAllowNotifications: this.state.isAllowNotifications,
        };
        axios.post(`http://localhost:61009/api/NewDecision`, { Decision })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    handleChange = (num, e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeNotification = () => {
        if (this.state.isAllowNotifications === true) {
            this.setState({ isAllowNotifications: false })
        } else {
            this.setState({ isAllowNotifications: true })
        }
    }

    handleChangeNotification2 = () => {
        if (this.state.IsSpecialReport === true) {
            this.setState({ IsSpecialReport: false })
        } else {
            this.setState({ IsSpecialReport: true })
        }
    }
    render() {
        return (
            <React.Fragment>
                <HeaderMain text={"פירמה מספר  " + this.props.location.state.TeamId} />
                <h1>{this.props.location.state.TeamName}</h1>
                <Form>
                    <div id="ProductDataDivs">
                        <div className="MidDivDecision">
                            <div>
                                <ProductData FirstShift={this.state.FirstShift1} SecondShift={this.state.SecondShift1} PricePerUnit={this.state.PricePerUnit1} Advertise={this.state.Advertising1} QA={this.state.QA1} ResearchAndDevelopment={this.state.ReasearchDevelopment1} AgentCommision={this.state.AgentsCommision1} handleChange={this.handleChange} />
                            </div>
                            <div >
                                <ProductDataTwo FirstShift={this.state.FirstShift2} SecondShift={this.state.SecondShift2} PricePerUnit={this.state.PricePerUnit2} Advertise={this.state.Advertising2} QA={this.state.QA2} ResearchAndDevelopment={this.state.ReasearchDevelopment2} AgentCommision={this.state.AgentsCommision2} handleChange={this.handleChange} />
                            </div>
                            <div>
                                <div className="containerDivDecision">
                                    <ProductDataFactory MaterialFuture1={this.state.MaterialFuture1} MaterialFuture2={this.state.MaterialFuture2} mainteneceStage1={this.state.MaintenanceStageOne} mainteneceStage2={this.state.MaintenanceStageTwo} handleChange={this.handleChange} />
                                </div>
                                <div className="containerDivDecision">
                                    <ProductDataFactoryTwo ExpendLevOne={this.state.ExpendLevOne} ExpendLevTwo={this.state.ExpendLevTwo} EngineringResearch={this.state.EngineringResearch} handleChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="MidDivDecision">
                            <div className="containerDivDecision">
                                <ProductDataFunding LongTimeLoan={this.state.LongTimeLoan} ShortTimeLoan={this.state.ShortTimeLoan} BillsDeposit={this.state.BillsDeposit} ShortLoanPay={this.state.ShortLoanPay} handleChange={this.handleChange} />
                            </div>
                            <div className="containerDivDecision">
                                <ProductDataAgents AgentsWorking={this.state.AgentsWorking} AgentToTrain={this.state.AgentToTrain} BaseSalary={this.state.BaseSalary} handleChange={this.handleChange} />
                            </div>
                            {/* <div className="containerDivDecision">
                                <ProductDataStockMarket
                                    Bonds={this.state.Bonds}
                                    StockSells={this.state.StockSells}
                                    Dividand={this.state.Dividand}
                                    InvestmentSum={this.state.InvestmentSum}
                                    handleChange={this.handleChange}
                                    handleChangeNotification2={this.handleChangeNotification2} />
                            </div> */}
                        </div>
                        <div className="ButtonsDivDecision">
                            <RouteButtonBack pathname="/GamePage" GameID={this.props.location.state.GameID} />
                            <Button id="BackDesc" color={"black"}><Icon disabled name='angle right' />חזור להחלטה קודמת</Button>
                            <Button size={"large"} color={'green'} onClick={this.handleDecision} type='submit'>אשר החלטה</Button>
                            <Button id="NextDesc" color={"black"}>עבור להחלטה הבאה<Icon disabled name='angle left' /></Button>
                        </div>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default Decision;