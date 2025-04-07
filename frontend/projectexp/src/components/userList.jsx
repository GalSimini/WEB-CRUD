import { useEffect, useState } from 'react';
import { fetchUsers, deleteUser, updateUser } from '../api/usersApi';

const UserList = ({ onUserClick }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
            try {
                await deleteUser(id);
                loadUsers();
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const handleUpdate = async (user) => {
        const user_name = prompt("Novo nome:", user.user_name);
        const user_email = prompt("Novo email:", user.user_email);
        const phone = prompt("Novo telefone:", user.phone);

        if (user_name && user_email && phone) {
            try {
                await updateUser(user.idusers_ID, { user_name, user_email, phone });
                loadUsers();
            } catch (error) {
                alert(error.message);
            }
        }
    };

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="mainContainer">
            <h1 className="title">Listando Usuários</h1>
            <ul className="list">
                {users.map((user) => (
                    <li key={user.idusers_ID} className="li-list">
                        <strong>{user.user_name}</strong> <br />
                        {user.user_email} <br />
                        {user.phone} <br />
                        <button className="btn" onClick={() => onUserClick(user)}>
                            Mais detalhes
                        </button>
                        <button className="btn-editar" onClick={() => handleUpdate(user)}>
                            Editar
                        </button>
                        <button className="btn-excluir" onClick={() => handleDelete(user.idusers_ID)}>
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;