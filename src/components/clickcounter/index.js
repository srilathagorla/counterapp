// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">The Button has been clicked {count} times</h1>

        <p> Click the button to increase the count</p>

        <button className="btn btn-primary" onClick={this.onIncrement}>
          click me
        </button>
      </div>
    )
  }
}

export default ClickCounter
