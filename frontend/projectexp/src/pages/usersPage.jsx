import { useState } from 'react';
import UserForm from '../components/userForm';
import UserList from '../components/userList';
import UserModal from '../components/userModal';

const UsersPage = () => {
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
            <UserForm onUserAdded={() => window.location.reload()} />
            <UserList onUserClick={handleUserClick} />
            {modalIsOpen && <UserModal user={selectedUser} onClose={closeModal} />}
        </div>
    );
};

export default UsersPage;