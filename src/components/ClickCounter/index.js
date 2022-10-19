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
        <h1 className="title">
          The button has been clicked <span>{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
