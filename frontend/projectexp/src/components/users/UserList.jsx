import { useEffect, useState } from 'react';
import { fetchUsers, deleteUser, updateUser } from '../../api/usersApi';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

    const handleDelete = async (cpf) => {
        if (window.confirm("Tem certeza que deseja deletar este usuário?")) {
            try {
                await deleteUser(cpf);
                loadUsers();
            } catch (error) {
                alert(error.message);
            }
        }
    };

    const handleUpdate = async (user) => {
        const name = prompt("Novo nome:", user.name);
        const email = prompt("Novo email:", user.email);
        const phone = prompt("Novo telefone:", user.phone);
        const gender = prompt("Novo gênero (M, F, Outro):", user.gender);

        if (name && email && phone && gender) {
            try {
                await updateUser(user.cpf, { name, email, phone, gender });
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
                    <li key={user.cpf} className="li-list">
                        <strong>{user.name}</strong> <br />
                        {user.email} <br />
                        <button className="btn" onClick={() => navigate(`/usuarios/${user.cpf}`)}>
                            Mais detalhes
                        </button>
                        <button className="btn-editar" onClick={() => handleUpdate(user)}>
                            Editar
                        </button>
                        <button className="btn-excluir" onClick={() => handleDelete(user.cpf)}>
                            Excluir
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;