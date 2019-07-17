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
      <Menu color={color} inverted widths={4}>
        
        <Menu.Item href='/NavigationPage'
          name='דף הבית'
          active={activeItem === 'דף הבית'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='עדכון אבני דרך'
          active={activeItem === 'עדכון אבני דרך'}
          onClick={this.handleItemClick}
        />
                <Menu.Item
          name='שליחת הודעה'
          active={activeItem === 'שליחת הודעה'}
          onClick={this.handleItemClick}
        />
                <Menu.Item
          name='אישור החלטות'
          active={activeItem === 'אישור החלטות'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map(color => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default MenuExampleColoredInvertedMenus
