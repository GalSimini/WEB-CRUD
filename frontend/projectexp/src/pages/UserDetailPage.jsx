import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/usersApi';
import Navbar from '../components/Navbar';

const UserDetailPage = () => {
    const { cpf } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const users = await fetchUsers();
                const selectedUser = users.find(u => u.cpf === cpf);
                if (!selectedUser) {
                    throw new Error('Usuário não encontrado');
                }
                setUser(selectedUser);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadUser();
    }, [cpf]);

    if (loading) return <div>Carregando...</div>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <div className="body1">
            <Navbar />
            <div className="modal-content" >
                <h1>Detalhes do Usuário</h1>
                <p><strong>CPF:</strong> {user.cpf}</p>
                <p><strong>Nome:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <p><strong>Gênero:</strong> {user.gender}</p>
            </div>
        </div>
    );
};

export default UserDetailPage;
