function Header(props) {
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