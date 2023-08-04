import './App.css';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';

function App() {
  return (
    <div className="App">
      <CustomerForm />
      <CustomerList />
    </div>
  );
}

export default App;
