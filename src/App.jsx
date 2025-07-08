import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authservice from './appwrite/auth';
import { login, logout } from './features/auth/authSlice';
import { Header, Footer } from './components';
import { Outlet } from 'react-router-dom';
import Loading from './loading/Loading';

function App() {
  const [loading, setLoading] = useState(true); // to check the laoding status of the website

  const dispatch = useDispatch(); 

  useEffect(() => {
    authservice.currentUser() // 
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
        dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  return !loading ? (
    <div className="min-h-screen flex flex-col bg-gray-400">
      <Header />
      <main className="flex-grow" style={{backgroundColor: "#0a0a0a"}}>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  ) : (
    <Loading/>
  );
}

export default App;
