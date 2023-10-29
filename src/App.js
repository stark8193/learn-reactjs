import React, { useEffect } from 'react';
import ToDoList from './features/Todo/pages';
import { Route } from 'react-router-dom';
import FoodFeature from './features/food/pages';
import { Redirect,NavLink, Switch } from 'react-router-dom/cjs/react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';

function App() {
  useEffect(()=>{
    const fetchProduct= async () =>{
      const params ={
        _limit: 10
      }
      const productList = await productApi.getAll(params);
        
    }

    fetchProduct();
  },[])

  return (
    <div className="App">
      HOME
    {/* <NavLink to="/food"> foooood</NavLink> */}
    <p><NavLink to="/food">luanfood</NavLink></p>
    <Switch>
      <Redirect from="/home" to="/" exact/>
    
      <Route path="/todo"  component={ToDoList} exact/>
      <Route path="/todo/:todoId"  component={ToDoList}/>
      <Route path="/food"  component={FoodFeature}/>

      <Route  component={NotFound}/>
    </Switch>
    </div>
    
  );
}

export default App;
