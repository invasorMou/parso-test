import React from 'react'
import Company from './Company'
import SearchBar from './SearchBar'
import Logout from './Logout'

const Header = (props) => {
  return (
    <header className="header">
    
      <Company company={ props.company }/>
      
      <div className="header__menu">
      
        <SearchBar />
        
        <Logout />
      
      </div>
      
    </header>
  )
}

export default Header