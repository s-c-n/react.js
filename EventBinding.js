import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        }
        count = () => {
          this.setState({
            count: this.state.count + 1
          })
        }
  render() {
    return (
      <div>
        <h3>You have clicked on the button{this.state.count}time</h3>
        <button onClick={this.count}>Click to Update</button>
      </div>
    )
  }
}

export default EventBinding
