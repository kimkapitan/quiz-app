import React from 'react';
import { MainComponent } from './components/main-component';
import { Navbar } from './components/navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { ThankYouComponent } from './components/thankyou-component';

// Main app function component
const App: React.FC = () => {
  return <>
  <BrowserRouter>
  <Navbar/>
    <div className="container">
      <Switch>
        <Route component={MainComponent} path="/" exact/>
        <Route component={ThankYouComponent} path="/thankyou"/>
      </Switch>
      
    </div>
  </BrowserRouter>
    
  </>
}

export default App;
