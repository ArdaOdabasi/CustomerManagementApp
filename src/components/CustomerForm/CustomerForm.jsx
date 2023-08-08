import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./CustomerForm.css"

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!customerName.trim()) {
      // Eğer input boş ise ekleme yapma
      return;
    }

    const newCustomer = {
      id: uuidv4(),
      customerName,
    };

    addNewCustomer(newCustomer);
    setCustomerName(''); // İşlem tamamlandıktan sonra inputu sıfırla
  };

  return (
    <form className='customer-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='customer-input'
        placeholder='Add a new customer'
        value={customerName} // input değerini state'e bağla
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button className='button'>
        <i className='bi bi-plus-lg'></i>
      </button>
    </form>
  );
}

export default CustomerForm;

