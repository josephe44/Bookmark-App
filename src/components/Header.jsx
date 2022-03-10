import PropTypes from 'prop-types'

function Header() {
  const title = 'Bookmark App'
  return (
    <header>
      <div className="container text-center mb-5 mt-2 text-xl uppercase">
        <h2 className="font-bold">{title}</h2>
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
