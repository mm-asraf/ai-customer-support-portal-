import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Feedback from './components/Feedback';
import QueriesFeed from './components/QueriesFeed';
import AIResponseAnalytics from './components/AIResponseAnalytics';
import AdminSettings from './components/AdminSettings';
import DashBoardUI from './components/DashBoardUI';



function App() {
  return (
    <div className="App">
   
    <Sidebar />
    <Navbar />
    <div className="outlet">

     <Outlet />
    </div>

     
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:'/',
    children:[
      {
        
          path:'/',
          element:<DashBoardUI />
         
      },
      {
        path:'/feedback',
        element:<Feedback />
      },
      {
        path:'/query-feed',
        element:<QueriesFeed />
      },
      {
        path:'/ai-response',
        element:<AIResponseAnalytics />
      },
      {
        path:'/admin-settings',
        element:<AdminSettings />
      }

    ],
    element:<App />

  },
  
 
])

export default App;
