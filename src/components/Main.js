import React from 'react';
import {
  BrowserRouter as Router, Route,Link
}
from 'react-router-dom';

const routes=[
  {
    path:'/',
    exact:true,
    sidebar:()=><div>home!</div>
    Dashboard:()=><h2>Home</h2>
  },
   
   {
    path:'/',
  
    sidebar:()=><div>Dashboard</div>
    Dashboard:()=><h2>Dashboard</h2>
  }

]
class Main extends React.Components{
  render(){
    return(
      <Router>
      <div style={{display:'flex',padding:'10px',width:'40%', background:'#f0f0f0'}}>
      </div>
      <ul style={{listStyleType:'none',padding:'0'}}>
      <li>
      <Link to ='/' >Home</Link>
      <Link to ='/Dashboard' >Dashboard</Link>
      </li>
      </ul>
     
      {
        routes.map((route)=>(
          <Route
          key:{route.path}
          path:{route.path}
          exact:{route.exact}
          Component:{route.Dashboard}

          
          />
        ))
      }
      </Router>
      
    )
  }
}