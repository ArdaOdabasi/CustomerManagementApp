import "./CustomerItem.css";

const CustomerItem = () => {
    return (
        <li className="customer-item">
            <div className="customer-info">
                <img src="https://i.pravatar.cc/300" alt="" className="customer-avatar"></img>
                <span className="customer-name">Arda Odabaşı</span>
            </div>
            <button className="delete-button">
                <i className="bi bi-trash3"></i>
            </button>
        </li>
    );
}

export default CustomerItem; // Dışarıdan erişim sağlamamız için