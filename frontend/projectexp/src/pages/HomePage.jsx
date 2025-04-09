import { useState } from 'react';
import UserList from '../components/users/UserList';
import UserModal from '../components/users/UserModal';
import Navbar from '../components/Navbar';

function HomePage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedUser(null);
    };

    return (
        <div className="body1">
            <Navbar />
            <UserList onUserClick={handleUserClick} />
            {modalIsOpen && <UserModal user={selectedUser} onClose={closeModal} />}
        </div>
    );
}

export default HomePage;