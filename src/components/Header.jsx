const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-bar'>
          <img className='header-logo' src='images/logo.png' alt='logo' />
          <img
            className='header-avatar'
            src='images/user-avatar.png'
            alt='avatar'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
