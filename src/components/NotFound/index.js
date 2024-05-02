import Header from '../Header'

import './index.css'

const NotFound = () => {
  return (
    <div className="notFound-container">
      <Header />
      <div className="notFound-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
          alt="not found"
          className="notFound-image"
        />
        <h1 className="notFound-heading">Page Not Found</h1>
        <p className="notFound-para">
          We are sorry, the page you requested could not be found.
        </p>
      </div>
    </div>
  )
}

export default NotFound
