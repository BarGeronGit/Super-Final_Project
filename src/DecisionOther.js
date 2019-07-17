import React, { Component } from 'react';
import MenuStudent from './MenuStudent'
import "./App.1.css";
import HeaderMain from './Header'
import { Form } from 'semantic-ui-react'

class FormExampleSubcomponentControl extends Component {
    render() {
        return (
            <div>
                <div>
                    <MenuStudent />
                    <HeaderMain text={"פירמה 3"} />
                </div>
                <div id="FormDiv">
                    <Form >
                        <Form.Group >
                            <Form.Input fluid label='משמרת ראשונה' />
                            <Form.Input fluid label='משמרת ראשונה' />
                            <Form.Input fluid label='חומר גלם עתידי 1' />
                            <Form.Input fluid label='הרחבה שלב 1' />

                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='משמרת שנייה' />
                            <Form.Input fluid label='משמרת שנייה' />
                            <Form.Input fluid label='חומר גלם עתידי 2' />
                            <Form.Input fluid label='הרחבה שלב 2' />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='מחיר ליחידה' />
                            <Form.Input fluid label='מחיר ליחידה' />
                            <Form.Input fluid label='תחזוקה שלב 1' />
                            <Form.Input fluid label='מחקר הנדסי' />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='פרסום' />
                            <Form.Input fluid label='פרסום' />
                            <Form.Input fluid label='תחזוקה שלב 2' />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='בקרת איכות' />
                            <Form.Input fluid label='בקרת איכות' />
                            <Form.Input fluid label='משמרת שנייה' />
                            <Form.Input fluid label='משמרת שנייה' />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='מחקר ופיתוח' />
                            <Form.Input fluid label='מחקר ופיתוח' />
                            <Form.Input fluid label='משמרת שנייה' />
                            <Form.Input fluid label='משמרת שנייה' />
                        </Form.Group>
                        <Form.Group >
                            <Form.Input fluid label='עמלת סוכנים' />
                            <Form.Input fluid label='עמלת סוכנים' />
                            <Form.Input fluid label='משמרת שנייה' />
                            <Form.Input fluid label='משמרת שנייה' />
                        </Form.Group>
                        <Form.Button>Submit</Form.Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default FormExampleSubcomponentControl