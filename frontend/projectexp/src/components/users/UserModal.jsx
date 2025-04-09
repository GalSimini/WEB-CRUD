const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Detalhes do Usuário</h1>
                <p><strong>CPF:</strong> {user.cpf}</p>
                <p><strong>Nome:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <p><strong>Gênero:</strong> {user.gender}</p>
                <button className="btn" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default UserModal;
