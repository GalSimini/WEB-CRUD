import { useNavigate } from 'react-router-dom';
import UserForm from '../components/users/UserForm';
import Navbar from '../components/Navbar';

function CadastroPage() {
    const navigate = useNavigate();

    const handleUserAdded = () => {
        navigate('/'); // acho q só isso pra voltar pra home funcione mas tvz n seja a melhor opção
    };

    return (
        <div className="body1">
            <Navbar />
            <h1 style={{ margin: '20px' }}>Cadastrar Novo Usuário</h1>
            <UserForm onUserAdded={handleUserAdded} />
        </div>
    );
}

export default CadastroPage;