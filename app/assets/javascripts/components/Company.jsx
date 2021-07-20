function Company(props) {
  return(
    <div className="company navbar__link navbar__link--main">
      <a href="#">{ props.company.name }</a>
    </div>
  )
}