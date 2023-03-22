import './App.css'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import AllProductManagers from './components/AllProductManagers'
import CreateProductManager from './components/CreateProductManager'
import EditProductManager from './components/EditProductManager'
import DetailsProductManager from './components/DetailsProductManager'



function App() {
  return (
    <BrowserRouter>
    
      <div className="App container">
        <h1>These are the Product Managers</h1>
        <Link to = "/" className="btn btn-info">Home</Link>
        <Switch>
          <Route exact path = "/">
            <AllProductManagers />
          </Route>
          <Route exact path = "/create">
            <CreateProductManager />
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
