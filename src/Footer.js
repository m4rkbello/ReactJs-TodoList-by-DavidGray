// import React from 'react'

const Footer = ( {length} ) => {
    const today = new Date();

  return (
    <footer>
    <h4>
      <center>
        <p>{length} List {length === 1 ? "Item" : "Items"}</p>
        <h6>M4rk | Copyright &copy; {today.getFullYear()}</h6>
      </center>
    </h4>
    </footer>
  )
}

export default Footer
