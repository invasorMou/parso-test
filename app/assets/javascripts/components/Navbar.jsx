function Navbar(props) {
  return (
    <nav className="navbar">
    
      <Company company={ props.company }/>
      
      <div className="navbar__menu">
      
        <SearchBar />
        
        <Logout />
      
      </div>
      
    </nav>
  )
}