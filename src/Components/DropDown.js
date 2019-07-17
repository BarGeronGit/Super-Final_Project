import React from 'react';
import './DropDown.css';
import Select from 'react-select'


const DropDown = (props) =>{
const options = props.options.map( item =>  { return { value: item.value, label: item.text } });
const headline = (props.chosen !== 0 ) ? props.chosen : props.headline
    return(
        <React.Fragment>
          <div className="divDropdown">
          <Select options={options} placeholder={headline} onChange={(e) => {props.changed(e.value)}}/>
            {/* <select className='dropdown' onChange={(e) => props.changed(e)} value="MBA1">
              {props.options.map( (item, index) => {
                  return <option key={index} value={item.text}>{item.text}</option>
              } )}
            </select> */}
          </div>
              {/* <Dropdown  className='dropdown' placeholder='-' selection options={props.options} onChange={ (e) => props.changed(e) } />  */} 
        </React.Fragment>
         )
}

export default DropDown;