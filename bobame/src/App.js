import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      // Import all the Routes here
      <div>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;