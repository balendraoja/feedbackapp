// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  changeStatus = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props
    const {isClicked} = this.state
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="app-container">
        {!isClicked && (
          <div className="question-container">
            <h1 className="question">
              How satisfied are you with our customer support perfomance?
            </h1>
            <ul className="emojis-container">
              {emojis.map(eachEmoji => (
                <li className="emoji-container">
                  <button
                    type="button"
                    className="emoji-button"
                    onClick={this.changeStatus}
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      alt="name"
                      className="emoji-image"
                    />
                  </button>
                  <p className="emoji-text">{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {isClicked && (
          <div className="response-container">
            <img src={loveEmojiUrl} alt="loveEmoji" className="emoji-image" />
            <h1 className="heading">Thank You!</h1>
            <p className="emoji-text">Random Text</p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
