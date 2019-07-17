import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Route, BrowserRouter as Router } from 'react-router-dom';

const colors = [
  'green',
]

class ExampleMenu extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Router>
        <Menu color={color} inverted widths={5}>

          <Menu.Item
            name='דף הבית'
            active={activeItem === 'דף הבית'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='שליחת הודעה'
            active={activeItem === 'שליחת הודעה'}
            onClick={this.handleItemClick}
          />
          <Menu.Item href='/Decision'
            name='קבלת החלטה חדשה'
            active={activeItem === 'קבלת החלטה חדשה'}
            onClick={this.handleItemClick}
        />
        <Menu.Item
            name='היסטוריית החלטות ודוחות'
            active={activeItem === 'היסטוריית החלטות ודוחות'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='הצגת גרפים'
            active={activeItem === 'הצגת גרפים'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Router>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map(color => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
