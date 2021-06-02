import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0); 
  const {name, job, image, text} = people[index] //accessing the people array of index

  const checkNumber = (number) => { //checking the number of object
    if(number > people.length -1){ // if number is less than the last item of the index then return the 1st item of the index
      return 0;
    }
    if(number > 0){
      return people.length -1;
    }
    return number;
  }
  const nextPerson = () => { //creating a method for nextPerson
    setIndex((index) => { 
      let newIndex = index + 1; // passing to the next index 
    
      return checkNumber(newIndex); // return newIndex object
      console.log(setIndex);
    });
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1; 
      return checkNumber(newIndex);
      console.log(setIndex);
    });
  }

  return <article className= "review">
    <div className="img-container">
      <img src={image} alt={name} className = 'person-img'/>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>

    <div className="button-container">
      <button className='prev-btn' onClick = {prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick = {nextPerson}>
        <FaChevronRight />
      </button>
    </div>
      <button className='random-btn'>surprise me</button>
  </article>
};
 export default Review;
