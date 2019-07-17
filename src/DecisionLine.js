import React, { Component } from 'react';
import MenuStudent from './MenuStudent'
import ProductData from './ProductData'
import "./App.1.css";
import HeaderMain from './Header'
import { Divider, Icon, Form, Input } from 'semantic-ui-react'


class DecisionLine extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <label id="LableDiv">{this.props.labelName}</label>
                <Input className="goLeft1" />
                <label className="AddON">{this.props.label2Name}</label>
            </div>
        )
    }
}

export default DecisionLine;