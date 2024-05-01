import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/Images/logo.svg";
import styles from "../../Styles/Navbar.module.css";
import { Avatar, Dropdown, message } from 'antd';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Header({ isLoggedIn }) {
  const [messageApi] = message.useMessage();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Make a request to the logout endpoint to invalidate the JWT token
      await axios.get("http://localhost:3000/api/creator/logout");
      
      // Clear user information from local storage
      localStorage.removeItem('userEmail');
      localStorage.removeItem('isLoggedIn');

      // Show a success message
      messageApi.success('Logged out successfully');

      // Redirect the user to the login page
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      messageApi.error('Logout failed. Please try again.');
    }
  };

  const items = [
    {
      key: '1',
      label: (
        <NavLink to="/profile" className={styles.dropdownItem}>
          Profile
        </NavLink>
      ),
    },
    {
      key: '2',
      label: (
        <NavLink to="/createCoupon" className={styles.dropdownItem}>
          Coupons
        </NavLink>
      ),
    },
    {
      key: '3',
      label: (
        <button className={styles.dropdownItem} onClick={handleLogout}>
          Logout
        </button>
      ),
    },
  ];

  return (
    <header>
      <nav>
        <div className={styles.container}>
          <Link to="/home" className="logo">
            <img className={styles.image} src={logo} alt="Logo" />
          </Link>
          <ul>
            <li>
              <NavLink to="/influencer" className={styles.linktext1}>
                Creators
              </NavLink>
            </li>
            <li>
              <NavLink to="/allcoupon" className={styles.linktext1}>
                All Coupons
              </NavLink>
            </li>
          </ul>
          {!isLoggedIn ? (
            <div className={styles.buttondiv}>
              <button className={styles.button}>
                <NavLink to="/login" className={styles.linktext}>
                  Sign In
                </NavLink>
              </button>
              <button className={styles.button}>
                <NavLink to="/signup" className={styles.linktext}>
                  Sign Up
                </NavLink>
              </button>
            </div>
          ) : (
            <div className={styles.buttondiv}>
              <Dropdown menu={{ items }}>
                <Avatar>U</Avatar>
              </Dropdown>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
