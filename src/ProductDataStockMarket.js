import React, { Component } from 'react';
import DataLine from './DataLine';
import DataLineIcon from './DataLineIcon';
import { Radio, Checkbox } from 'semantic-ui-react'
import "./Decision.css"
import RadioButtons from './RadioButtons'
class ProductDataStockMarket extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChangeRadio = (e, { value }) => this.setState({ value })
    render() {
        return (
            <div className="GroupOfDecisions">
                <div className="CheckboxDiv">
                <Checkbox name={"IsSpecialReport"} onChange={this.props.handleChangeNotification2} label='דו"ח מיוחד/סמן לאישור' />
                </div>
                <div id="specialCheck">
                <h3 className="HeadlineDecision">בורסה</h3>
                    <DataLineIcon ValueOfField={this.props.Bonds} handleChange={this.props.handleChange} name={"Bonds"} SerialNum={29} Datatext={'מכירת אג"ח'} />
                    <DataLineIcon ValueOfField={this.props.StockSells} handleChange={this.props.handleChange} name={"StockSells"} SerialNum={30} Datatext={"מכירת מניות"} />
                    <DataLineIcon ValueOfField={this.props.Dividand} handleChange={this.props.handleChange} name={"Dividand"} SerialNum={31} Datatext={"דיוידנד"} />
                    <DataLineIcon ValueOfField={this.props.InvestmentSum} handleChange={this.props.handleChange} name={"InvestmentSum"} SerialNum={32} Datatext={"סכום ההשקעה"} />
                    {/* <RadioButtons /> */}
                </div>
            </div>
        )
    }
}

export default ProductDataStockMarket;