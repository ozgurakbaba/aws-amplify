import React from 'react';
import './App.css';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>AWS Amplify</h1>
        <p>Testing build on AWS Amplify</p>
        <AmplifySignOut />
      </div>
    </div>
  );
}

export default withAuthenticator(App);