import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"

import { login, isAuthenticated } from "../utils/auth"

const Home = () => <p>Home</p>
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
  }
  return (
    <>
      <nav>
        <Link to="/account/home/">Home</Link>
        <Link to="/account/settings/">Settings</Link>
        <Link to="/account/billing/">Billing</Link>
      </nav>
      <Router>
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
        <Home path="/account/" />
      </Router>
    </>
  )
}

export default Account
