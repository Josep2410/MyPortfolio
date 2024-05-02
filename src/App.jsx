import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider , createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './routes/HomePage'
import Portfolio from './routes/Portfolio';
import FoodMobileApp from './routes/FoodMobileApp'
import WeAreTheChampions from './routes/WeAreTheChampions'
import JSDoc from './routes/JSDoc'
import YahooHomePage from './routes/YahooHomePage';
import ChromeExtension from './routes/ChromeExtension'
import './App.css'

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="/projects/portfolio" element={<Portfolio/>}/>
        <Route path="/projects/foodMobileApp" element={<FoodMobileApp/>}/>
        <Route path="/projects/weAreTheChampions" element={<WeAreTheChampions/>}/>
        <Route path="/projects/chromeExtension" element={<ChromeExtension/>}/>
        <Route path="/projects/javascriptDocumentation" element={<JSDoc />}/>
        <Route path="/projects/yahooHomepage" element={<YahooHomePage />}/>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
