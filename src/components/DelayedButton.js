import React, { Component } from 'react'

export default class DelayedButton extends Component {
  
  handleClick = (event) => {
    event.persist()
    let cb = () => this.props.onDelayedClick(event)
    setTimeout(cb,this.props.delay)
  }
  
  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
        >Delayed</button>
      </div>
    )
  }
}
