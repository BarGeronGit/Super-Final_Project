import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

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
      <Menu color={color} inverted widths={5}>

        <Menu.Item
          name='דף מנהל'
          active={activeItem === 'דף מנהל'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='דוחות וגרפים'
          active={activeItem === 'דוחות וגרפים'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='לוח שנתי'
          active={activeItem === 'לוח שנתי'}
          onClick={this.handleItemClick}
        />
        <Menu.Item href='/StepOne'
          name='יצירת משחק'
          active={activeItem === 'יצירת משחק'}
          onClick={this.handleItemClick}
        />
        <Menu.Item link='/NavigationPage' name='דף הבית' active={activeItem === 'דף הבית'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map(color => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
