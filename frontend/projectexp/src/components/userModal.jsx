const UserModal = ({ user, onClose }) => {
    if (!user) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h1>Detalhes do Usuário</h1>
                <p><strong>Nome:</strong> {user.user_name}</p>
                <p><strong>Email:</strong> {user.user_email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <button className="btn" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default UserModal;