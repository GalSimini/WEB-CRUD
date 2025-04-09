import { useState } from 'react';
import { createUser } from '../../api/usersApi';

const UserForm = ({ onUserAdded }) => {
    const [formData, setFormData] = useState({
        cpf: '',
        name: '',
        email: '',
        phone: '',
        gender: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            onUserAdded();
            setFormData({ cpf: '', name: '', email: '', phone: '', gender: '' });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-list">
            <input className='input-add' name="cpf" placeholder="CPF" required onChange={handleChange} value={formData.cpf} />
            <input className='input-add' name="name" placeholder="Nome" required onChange={handleChange} value={formData.name} />
            <input name="email" className='input-add' type="email" placeholder="Email" required onChange={handleChange} value={formData.email} />
            <input name="phone" className='input-add' placeholder="Telefone" onChange={handleChange} value={formData.phone} />
            <select name="gender" className='input-add' required onChange={handleChange} value={formData.gender}>
                <option value="">Selecione o Gênero</option>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="Outro">Outro</option>
            </select>
            <button type="submit" className="btn">Cadastrar</button>
        </form>
    );
};

export default UserForm;