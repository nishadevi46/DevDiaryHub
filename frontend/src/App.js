import Bimage from './images/181.jpg'
import './App.css';
import Login from './components/account/Login'
import DataProvider from '../src/context/DataProvider'
import Home from './components/home/Home'
import Header from './components/header/Header'
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Createpost from './components/create/Createpost';
import DetailView from './components/details/DetailView'
import Update from './components/create/Update';
import About from './components/about/about';
import Contact from './components/contact/Contact';
const styles = {
  body: {
    margin: 0,
    padding: 0,
    backgroundImage: `url(${Bimage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
  },
  loginContainer: {
    marginTop: 40,
  },
};
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated
    ?
    <>
      <Header />
      <Outlet />
    </>
    :
    <Navigate replace to='/login' />
}
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (

    <DataProvider>
      <BrowserRouter>

        <div >
          <Routes>
            <Route path='/login' element={<div style={styles.body}> <Login isUserAuthenticated={isUserAuthenticated} /></div>} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/' element={<div style={{ marginTop: 64 }}><Home /></div>} /></Route>


            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/create' element={<div style={{ marginTop: 64 }}><Createpost /></div>} /></Route>


            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/details/:id' element={<div style={{ marginTop: 64 }}><DetailView /></div>} /></Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/update/:id' element={<div style={{ marginTop: 64 }}><Update /></div>} /></Route>

            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/about' element={<div style={{ marginTop: 64 }}><About /></div>} /></Route>

              <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/contact' element={<div style={{ marginTop: 64 }} ><Contact /></div>} /></Route>

          </Routes>


        </div>
      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
