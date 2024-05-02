import './index.css'
const Calender = props => {
  const {details, changeDate, initialimageUrl} = props
  const {emojiName, emojiUrl, date, id} = details

  const onChangeDate = () => {
    changeDate(date, emojiUrl, id)
  }

  return (
    <li className="calender-dates">
      <button
        type="button"
        onClick={onChangeDate}
        className="calender-date-btn"
      >
        <p className="date-para">{date}</p>
        <img className="date-img" src={initialimageUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default Calender
