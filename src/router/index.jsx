import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home-page'
import ProgressBar from '../pages/progress-bar'
import Footer from '../components/footer'
import NavBar from '../components/navbar'
import { Container } from 'react-bootstrap'
import ProductPage from '../pages/procuts-page'
import TodoPage from '../pages/todo-page'



const AppRouter = () => {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column h-100'>
        <Container className='py-3 flex-grow-1'>
            <NavBar/>
                    <Routes>
                        <Route path='/' element={<HomePage></HomePage>}></Route>
                        <Route path='/progress-bar' element={<ProgressBar></ProgressBar>}></Route>
                        <Route path='/products-page' element={<ProductPage></ProductPage>}></Route>
                        <Route path='/todo-page' element={<TodoPage></TodoPage>}></Route>
                    </Routes>
            <Footer/>
        </Container>
    </div>
    </BrowserRouter>
  )
}

export default AppRouter