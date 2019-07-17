import React, { Component } from 'react';
import MenuStudent from './MenuStudent'
import ProductData from './ProductData'
import "./App.1.css";
import HeaderMain from './Header'
import { Label, Icon, Form, Input } from 'semantic-ui-react'
import DecisionLine from './DecisionLine';

class AltDecision extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <MenuStudent />
                    <HeaderMain text={"פירמה 3"} />
                </div>
                <div id="FormDiv">
                    <Form>
                        <Form.Field inline >
                            <label>  First name  </label>
                            <Input placeholder='First name' />
                        </Form.Field>
                        <Form.Field inline>
                            <label>   First name           </label>
                            <Input placeholder='First name' />
                        </Form.Field>
                        <Form.Field inline>
                            <label>   First name  </label>
                            <Input placeholder='First name' />
                        </Form.Field>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AltDecision;