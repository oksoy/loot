import React from 'react'
import { Route, Switch } from 'react-router'
import App from './app'
import Test from './test/test.container';

export default () => (
  <App>
    <Route path="/" component={ Test } />
  </App>
)