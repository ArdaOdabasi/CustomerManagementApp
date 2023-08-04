import './App.css';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';

function App() {
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default App;
