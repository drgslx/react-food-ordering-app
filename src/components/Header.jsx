import React from 'react'
import Button from '../components/UI/Button'
import logoImg from '../assets/logo.jpg'
export default function Header() {
  return (
    <header id='main-header'>
        <div id="title">
            <img src={logoImg} alt="A restauran" />
            <h1>ReactMeals</h1>
        </div>
            <nav>
                <Button textOnly={true}>Cart</Button>
            </nav>
            
        
    </header>
  )
}
