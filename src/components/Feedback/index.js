import {useState} from 'react'
import './index.css'

const Feedback = props => {
  const {resources} = props
  const {emojis, loveEmojiUrl} = resources

  // State variables to manage the display
  const [display, setDisplay] = useState('display1')
  const [display2, setDisplay2] = useState('display2')

  // Function to switch the display values
  const Getresult = () => {
    setDisplay(prevDisplay =>
      prevDisplay === 'display1' ? 'display2' : 'display1',
    )
    setDisplay2(prevDisplay2 =>
      prevDisplay2 === 'display1' ? 'display2' : 'display1',
    )
  }

  return (
    <div className="card">
      <div className={`response ${display}`}>
        <img src={loveEmojiUrl} alt="love emoji" className="love" />
        <h1 className="thanku">Thank You!</h1>
        <p className="desc2">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
      <div className={`request ${display2}`}>
        <h1 className="desc">
          How satisfied are you with our customer support performance?
        </h1>
        <ol className="emojie-cont">
          {emojis.map(emoji => (
            <li className="emoji" key={emoji.name}>
              <img
                src={emoji.imageUrl}
                onClick={Getresult}
                className="image"
                alt={emoji.name}
              />
              <p className="feel">{emoji.name}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Feedback
