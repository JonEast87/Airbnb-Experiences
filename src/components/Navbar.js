import React from "react"
import airbnb_logo from "../images/airbnb-logo.svg"

export default function Navbar() {
  return (
    <nav>
      <img src={airbnb_logo} alt="AirBnb" className="nav--logo"/>
    </nav>
  )
}