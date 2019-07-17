import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChangeRadio = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          סוג ההשקעה: <b>{this.state.value}</b>
        </Form.Field>
        <Radio
          style={{ marginLeft: "3px" }}
          label='0'
          name='radioGroup'
          value='0'
          checked={this.state.value === 'this'}
          onChange={this.handleChange}
        />
        <Radio
          style={{ marginLeft: "3px" }}
          label='1'
          name='radioGroup'
          value='1'
          checked={this.state.value === 'that'}
          onChange={this.handleChange}
        />

        <Radio
          style={{ marginLeft: "3px" }}
          label='2'
          name='radioGroup'
          value='2'
          checked={this.state.value === 'this'}
          onChange={this.handleChange}
        />
        <Radio
          style={{ marginLeft: "3px" }}
          label='3'
          name='radioGroup'
          value='3'
          checked={this.state.value === 'that'}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
}

