import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <h1 className="header-heading">Daily Mood Tracker</h1>

      <ul className="nav-menu">
        <Link to="/">
          <li className="item">Home</li>
        </Link>

        <Link to="/reports">
          <li className="item">Reports</li>
        </Link>
      </ul>
      <button
        onClick={onClickLogoutBtn}
        type="button"
        className="logout-desktop-btn"
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
