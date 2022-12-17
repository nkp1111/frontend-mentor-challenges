import React from 'react'


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
  render() {
    return (
      <div className='btn-holder'>
        <span onClick={() => this.changeCurrent("forward")}>
          Next
          <img src="" alt="" />
        </span>
        <span onClick={() => this.changeCurrent("backward")}>
          Prev
          <img src="" alt="" />
        </span>
      </div>
    )
  }

}

export default ButtonHolder