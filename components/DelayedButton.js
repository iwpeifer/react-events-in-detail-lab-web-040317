import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
  super(props)
  this.clickHandler = this.clickHandler.bind(this)
}

clickHandler(event){
  event.persist()
  setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
}


  render() {
    return (
      <button onClick={this.clickHandler}>TICKLE ME</button>
    )
  }
}
