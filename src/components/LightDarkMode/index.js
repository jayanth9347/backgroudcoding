import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {click: 'LightMode'}
  onButton = () => {
    this.setState(prevState => ({
      click: prevState.click === 'LightMode' ? 'LightMode' : 'DarkMode',
    }))
  }
  render() {
    const {click} = this.state
    return (
      <div className="center">
        {' '}
        <div className="background">
          {' '}
          <h1> Click to change color </h1>{' '}
          <div>
            <button className="button" onClick={this.onButton}>
              {' '}
              {click}{' '}
            </button>
          </div>
        </div>{' '}
      </div>
    )
  }
}

export default LightDarkMode
