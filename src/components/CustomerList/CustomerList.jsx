import CustomerItem from "../CustomerItem/CustomerItem";
import "./CustomerList.css";

function CustomerList() {
    return (
        <ul className="customer-list">
            <CustomerItem/>
        </ul>
    );
}

export default CustomerList