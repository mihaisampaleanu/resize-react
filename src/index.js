import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Page from './views/page'
import Page1 from './views/page1'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/" />
        <Route exact component={Page1} path="/page1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
