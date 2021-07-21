import React from 'react'

const Company = (props) => {
  return(
    <h4 className="company header__link header__link--main">
      <a href="#">{ props.company.name }</a>
    </h4>
  )
}

export default Company