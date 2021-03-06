import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Sprawdź swoje świetne miejsca podróży!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src='images/img-9.jpg' text='Zwiedź ukryty wodospad w głębi Amazońskiej Dzungli!' 
                        label='Przygoda' path='/services'/>
                        <CardItem src='images/img-2.jpg' text='Zwiedź wyspy Bali!' 
                        label='Luksus' path='/services'/>
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src='images/img-3.jpg' text='Wypłyń daleko w ocean!' 
                        label='Zagadka' path='/products'/>
                        <CardItem src='images/img-4.jpg' text='Coś dla kochających piłkę nożną!' 
                        label='Przygoda' path='/products'/>
                        <CardItem src='images/img-8.jpg' text='Nie lubisz zimna?!' 
                        label='Adrenalina' path='/products'/>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Cards;