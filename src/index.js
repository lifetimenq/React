import ReactDom from 'react-dom';
import React from 'react';

import App from "./App";

import style from './main.module.css';


import AuthContext from './AuthContext';

const userInfo = { 
  email: 'example1@em.com', 
  firstName: 'Анатолий', 
  lastName: 'Вассерман', 
  avatarUrl: 'https://lh3.googleusercontent.com/H_CqI3z6ZuDp7U_SJ4hOoxEKWW409_cHg_Drp6_IaRuu4EpWkbxcV3pt7bgQMYR_cHZnQvoW26hEohETYLglJjdsEkU2qrDMGr5gso_mjY4mdo7UvYzaV0g0Ib3KBJa9h52UWx7tACJvD8zEA3DE-cc5blnElwT3L0UbumUOoOJ56HE3tVhCj4NlDhYfw_fEEFzVEyTr02QyS0cjLVKiJum3Dktdgng5qQugVYoweqKDDrmAAMyv2DSi1icdTtWwYYb6j_UsH6VHoTmeFsCd5pcHkgDk2rhv8G5NUyMc9V5hrBU62ye8FFkr5ZeMduiwA8Ntb2k3tbm_RDOy4mYC4QVEuW86yvdya_EE9UbqWsR8qhIEK6rQKFqAW__qymEOe_4LQPp_0z7X0yMfXX7_QUpPY5r_j9FdMdzItfp6S4EQXpd7AtP4juMNSIRhehy_LQdf0m-i_5YAXlKvzcFYrbRmVOkTPJGD2It33MW15JqI0Q1-AR6rU7YAkR1xOF6ZqC4nD0XpdXnwTMKGlJeL5WV1jYFBZcYuzitHtSRPDJwShBKpAaYG16-94FvcEwYNRj_VC7OiM4_aaSKyptFOYu4RkwspZrFkhSOOPm4oX-9DPag1UTY04sBiECh6XKWhRnWKK7t1yJk_jUwNH5om-RL_eAMJASb_5hCrkYFaVcFTAxdpHaf_HOGlzwfIsQ=w300-h392-no?authuser=0'
};

ReactDom.render(
  <AuthContext.Provider value={userInfo}>
    <App />
  </AuthContext.Provider>,
  document.getElementById('root')
);