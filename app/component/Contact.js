import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';


class Contact extends React.Component {
  render(){
    return(
      <form className='contact-container' >
        <h1>Contact me</h1>
        <input className="a"
          placeholder='your name'
          type='text'
        />
        <input className="a"
          placeholder='your lastname'
          type='text'
        />
        <input className="a"
          placeholder='your e-mail'
          type='text'
        />
        <button
          className='button'
          type='submit'
          >
            Submit
        </button>
      </form>
    );
  }
}


export default Contact;
