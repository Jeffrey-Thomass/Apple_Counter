import React, { useState } from 'react'
import Button from './Button'
import leftArrow from '../Assets/Images/left-arrow.png'
import rightArrow from '../Assets/Images/right-arrow (1).png'
import AppleBasket from './AppleBasket'
import './AppleCounter.css'
// const totalAppleCount = 10 ;    
// let rightAppleCount = 0 ;
// let leftAppleCount = totalAppleCount - rightAppleCount
export default function AppleCounter() {
    const totalAppleCount = 10 ;
    const [rightAppleCount , setRight] = useState(0)
    const [leftAppleCount , setLeft] = useState(totalAppleCount - rightAppleCount)
    const leftClickHandler = () => {
        if(rightAppleCount > 0 ){
            setLeft(leftAppleCount + 1) 
            setRight(rightAppleCount -1)
        }
    }
    const rightClickHandler = () => {
        if(leftAppleCount > 0){
            setLeft(leftAppleCount - 1)
            setRight(rightAppleCount +1 )
        }
    }
  return (
    <section>
        <AppleBasket appleCount={leftAppleCount} basketName="basket1" title="apple-basket-1"/>
        <Button clickHandler ={leftClickHandler} imageUrl={leftArrow} title="left-button">Child</Button>
        <Button children="World" clickHandler ={rightClickHandler} imageUrl={rightArrow} title = "right-button"/>
        <AppleBasket appleCount={rightAppleCount} basketName="basket2" title="apple-basket-2"/>
    </section>
  )
}
