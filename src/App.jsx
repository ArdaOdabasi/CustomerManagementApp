import React, { useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';

function App() {
  const [customers, setCustomers] = useState([]); // Başlangıçta boş bir dizi olarak ayarlanacak

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]); // Yeni müşteriyi listenin sonuna eklemek için spread operator kullanıyoruz
  };

  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length > 0 ? <CustomerList customers={customers} /> : <p>No customers added yet.</p>}
      {/* customers dizisi boş değilse CustomerList'i göster, boş ise "No customers added yet." yazısı göster */}
    </div>
  );
}

export default App;


