import React from 'react'
import PrecIcon from '../assets/images/icon-angle-left.svg'
import NextIcon from '../assets/images/icon-angle-right.svg'


class ButtonHolder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      limit: 2
    }

    this.changeCurrent = this.changeCurrent.bind(this)
  }

  changeCurrent(dir) {
    /*
    Change current view on mouse click
    */
    let currentVal

    if (dir === "forward") {
      if (this.state.current === this.state.limit) {
        currentVal = 0
      } else {
        currentVal = this.state.current + 1
      }
    } else {
      if (this.state.current <= 0) {
        currentVal = this.state.limit
      } else {
        currentVal = this.state.current - 1
      }
    }

    this.setState({
      ...this.state,
      current: currentVal
    })

    this.props.setVisibleInd(this.state.current)
  }

  keyListen(e) {
    /*
    Change view on key press
    */
    if (e.key === "ArrowLeft") {
      this.changeCurrent("backward")
    } else if (e.key === "ArrowRight") {
      this.changeCurrent("forward")
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => this.keyListen(e))
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", (e) => this.keyListen(e))
  }

  render() {
    return (
      <div className='btn-holder'>
        <span role="button"
          onClick={() => this.changeCurrent("backward")}>
          <img src={PrecIcon} alt="previous item button" />
        </span>

        <span role="button"
          onClick={() => this.changeCurrent("forward")}>
          <img src={NextIcon} alt="next item button" />
        </span>

      </div>
    )
  }

}

export default ButtonHolder