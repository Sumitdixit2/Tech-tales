import React from 'react';
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "../../App.css";
import Search from '../Search';

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // to check the authentication status.

  const navigate = useNavigate();

  const navItems = [ // creating an array of objects containing the details of different pages.

    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Write', slug: '/add-post', active: authStatus },
  ];

  return (
    <nav className=" dark:border-gray-700" style={{backgroundColor: "#0a0a0a"}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <Link to="/">
          <Logo fill="white" className="text-white"/>
        </Link>

      {authStatus && (
        <Search/>
      )}

        <div className="w-full md:block md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium mt-4 md:mt-0 text-sm text-gray-700 dark:text-gray-200 ">

            {navItems.map((item) => // looping the array and accessing items.
              item.active ? (
                <li key={item.name} >
                  <button
                  type='button'
                    onClick={() => navigate(item.slug)}
                    className="block px-3 py-2 rounded-3xl hover:bg-blue-100  dark:hover:bg-gray-900 md:hover:bg-transparent md:border-0 "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
