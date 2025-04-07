import { useState } from 'react';
import { createUser } from '../api/usersApi';

const UserForm = ({ onUserAdded }) => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        phone: ''
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUser(formData);
            onUserAdded();
            setFormData({ user_name: '', user_email: '', phone: '' });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="add-list">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-add"
                    name="user_name"
                    type="text"
                    placeholder="Nome"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-add"
                    name="user_email"
                    type="email"
                    placeholder="Email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-add"
                    name="phone"
                    type="text"
                    placeholder="Telefone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <button className="btn" type="submit">Adicionar</button>
            </form>
        </div>
    );
};

export default UserForm;