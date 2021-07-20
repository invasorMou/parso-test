function Dashboard(props) {
  const dashboardMenu = props.menu.map((element, idx) => { 
    return (
      <li key={ idx } className={ `dashboard__link${ idx === 0 ? ' dashboard__link--active' : '' }` }> 
        <a href="#">
          <i class={ `fe ${ element.icon }` }></i>
          { element.title }
        </a>
      </li>
    )
   })
  
  return(
    <aside className="dashboard">
    
      <ul className="dashboard__menu">
        { dashboardMenu }
      </ul>
    </aside>
  )
}