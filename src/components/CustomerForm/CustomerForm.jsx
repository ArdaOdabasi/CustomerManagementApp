import React from 'react'
import "./CustomerForm.css"

const CustomerForm = () => {
  return (
    <form className='customer-form'>
      <input type='text' className='customer-input' placeholder='Add a new customer'></input>
      <button>
        <i className='bi bi-plus-lg'></i>
      </button>
    </form>
  );
}

export default CustomerForm