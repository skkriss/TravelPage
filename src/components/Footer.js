import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription-heading'>
                <p className='footer-subscription-heading'>
                    Dołącz do przygody za pomocą newslettera!
                </p>
                <p className='footer-subscription-text'>
                    Możesz odsubskrybować kiedy zechcesz!
                </p>
                <div classname='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Twój Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subskrybuj!</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                        <h2>O nas!</h2>
                        <Link to='/sign-up'>Jak to działa?</Link>
                        <Link to='/sign-up'>Zaloguj sie!</Link>
                        <Link to='/sign-up'>Zarejestruj!</Link>
                        <Link to='/sign-up'>Coś o nas.</Link>
                        <Link to='/sign-up'>FAQ</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>O nas!</h2>
                        <Link to='/products'>Jak to działa?</Link>
                        <Link to='/products'>Zaloguj sie!</Link>
                        <Link to='/products'>Zarejestruj!</Link>
                        <Link to='/products'>Coś o nas.</Link>
                        <Link to='/products'>FAQ</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                        <h2>O nas!</h2>
                        <Link to='/services'>Jak to działa?</Link>
                        <Link to='/services'>Zaloguj sie!</Link>
                        <Link to='/services'>Zarejestruj!</Link>
                        <Link to='/services'>Coś o nas.</Link>
                        <Link to='/services'>FAQ</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>O nas!</h2>
                        <Link to='/sign-up'>Jak to działa?</Link>
                        <Link to='/sign-up'>Zaloguj sie!</Link>
                        <Link to='/sign-up'>Zarejestruj!</Link>
                        <Link to='/sign-up'>Coś o nas.</Link>
                        <Link to='/sign-up'>FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;