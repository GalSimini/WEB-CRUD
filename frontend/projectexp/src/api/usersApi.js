const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/usuarios`);
    if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
    }
    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Erro ao criar usuário');
    }
    return response.json();
};

export const updateUser = async (id, userData) => {
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    if (!response.ok) {
        throw new Error('Erro ao atualizar usuário');
    }
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_URL}/usuarios/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Erro ao deletar usuário');
    }
    return response.json();
};