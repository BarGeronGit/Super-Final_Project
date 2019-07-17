import React from 'react';
import { DateTimeInput, } from 'semantic-ui-calendar-react';
import Radium from 'radium';
import './Calendar.css';



class DateTimeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateTime: '',
        };
    }

   

    handleChange = (event, { name, value }) => {
        if (this.state.hasOwnProperty(name)) {
            this.setState({ [name]: value }, () => {
                 this.handle(this.state.dateTime);
            });
           
        }
       
    }
    
handle = (event) => {
    this.props.changedDate(event)
}

    render() {
        const placeHolderValue = this.props.chosen == "" ? "תאריך/שעה" : this.props.chosen 
        return (
            <div >
                <DateTimeInput 
                    name="dateTime"
                    placeholder={placeHolderValue}
                    value={this.state.dateTime}
                    onChange={this.handleChange}
                    closable = {true}
                />
            </div>
        );
    }
}

export default Radium(DateTimeForm);