import React from 'react'

const Dashboard = (props) => {
  const dashboardMenu = props.menu.map((element, idx) => { 
    return (
      <li key={ idx } className={ `dashboard__link${ idx === 0 ? ' dashboard__link--active' : '' }` }> 
        <a href="#">
          <i className={ `fa ${element.icon}` }></i>
          { element.title }
        </a>
        
      </li>
    )
   })
  
  return(
    <nav className="dashboard">
    
      <ul className="dashboard__menu">
        { dashboardMenu }
      </ul>
    </nav>
  )
}

export default Dashboard