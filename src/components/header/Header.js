import React from 'react'
import './style.scss';

function Header() {
  return (
    <div className='header'>
        <div className='header__top'>
            <div className='container'>
                <div className='header__top__inner'>
                    <div className='staff__login'>
                        <span>Acadamic Staff Login</span>
                    </div>
                    <div className='languages'>
                        <span>Arabic</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='header__inner'>
                <div className='brad__icon'>
                    <a href='#'>
                        <img src='https://ens.sch.ae/img/ens_logo.png' alt='' />
                    </a>
                </div>
                <nav className='navbar'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Acadamic</li>
                        <li>Admission</li>
                        <li>Parent Guide</li>
                        <li>Capus Life</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Header
