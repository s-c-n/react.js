import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.updateEvent = this.updateEvent.bind(this)
        }
        updateEvent(){
            this.setState({
                message: 'Goodbye'
                })
        }
  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <button onClick={this.updateEvent}>Click to Update</button>
      </div>
    )
  }
}

export default EventBinding
