import './index.css'
const EmojiItem = props => {
  const {details, changetoActive, initialActiveEmoji, isActive} = props

  const {emojiName, emojiUrl, id} = details

  const onChnageToAcive = () => {
    changetoActive(id)
  }
  const activeemojiclass = isActive ? 'emoji-image-active' : 'emoji-image'

  return (
    <li className="emoji-items">
      <p className="emoji-name">{emojiName}</p>
      <button onClick={onChnageToAcive} className="emoji-img-btn">
        <img className={activeemojiclass} alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiItem
