import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { useState } from 'react'
import AllProductManagers from './components/AllProductManagers'
import CreateProductManager from './components/CreateProductManager'
import EditProductManager from './components/EditProductManager'
import DetailsProductManager from './components/DetailsProductManager'


function App() {

  const [formSubmitted, setFormSubmitted] = useState(false);
  // this is here so the application can "toggle / access" this State variable anywhere

  return (
    <BrowserRouter>
    
      <div className="App container">
        <h1>These are the Product Managers</h1>
        <Link to = "/" className="btn btn-info m-2">Home</Link>
        <Link to = "/create" className="btn btn-warning m-2">Create</Link>
        <Switch>
          <Route exact path = "/">
            <AllProductManagers formSubmitted = { formSubmitted } />
          </Route>
          <Route exact path = "/create">
            <CreateProductManager formSubmitted = { formSubmitted } setFormSubmitted = { setFormSubmitted } />
          </Route>
          <Route exact path = "/details/:id">
            <DetailsProductManager />
          </Route>
          <Route exact path = "/edit/:id">
            <EditProductManager />
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
