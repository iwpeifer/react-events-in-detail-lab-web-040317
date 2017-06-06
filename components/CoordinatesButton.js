import React from 'react'

export default class CoordinatesButton extends React.Component {

  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(event){
    let x = event.clientX
    let y = event.clientY
    return [this.props.onReceiveCoordinates([x, y])]
  }

  render() {
    return (
      <button onClick={this.clickHandler}>TICKLE ME</button>
    )
  }
}
