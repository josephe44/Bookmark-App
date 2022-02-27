import PropTypes from 'prop-types'

function Header() {
  const title = 'Bookmark App'
  return (
    <header>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  title: 'Bookmark App',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
