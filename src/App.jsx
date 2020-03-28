import React from 'react'
import CounterIndicator from './components/CounterIndicator'
import CounterButtons from './components/CounterButtons'

const App = () => {
  return (
    <div className="container">
      <div className="row has-space-top has-space-bottom">
        <div className="col-md-4 col-sm-12 is-flex-center">
          <span className="lin-logo is-flex-center">React Starter</span>
        </div>
        <div className="col-md-8 col-sm-12 text-right">
          <h3>An optimal web app setup</h3>
        </div>
        <div className="col-12">
          <div className="lin-card has-space-top text-center">
            <CounterIndicator />
            <CounterButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
