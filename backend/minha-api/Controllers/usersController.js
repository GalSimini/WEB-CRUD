const db = require('../db');

exports.getAllUsers = (req, res) => {
    db.query('SELECT idusers_ID, user_name, user_email, phone FROM users', (err, results) => {
        if (err) return res.status(500).send({ error: err.message });
        res.json(results);
    });
};

exports.createUser = (req, res) => {
    const { user_name, user_email, phone } = req.body;
    db.query(
        'INSERT INTO users (user_name, user_email, phone) VALUES (?, ?, ?)',
        [user_name, user_email, phone],
        (err, results) => {
            if (err) return res.status(500).send({ error: err.message });
            res.json({ message: 'Usuário adicionado com sucesso!', id: results.insertId });
        }
    );
};

exports.updateUser = (req, res) => {
    const { user_name, user_email, phone } = req.body;
    const { id } = req.params;
    db.query(
        'UPDATE users SET user_name = ?, user_email = ?, phone = ? WHERE idusers_ID = ?',
        [user_name, user_email, phone, id],
        (err, results) => {
            if (err) return res.status(500).send({ error: err.message });
            res.json({ message: 'Usuário atualizado com sucesso!' });
        }
    );
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM users WHERE idusers_ID = ?', [id], (err, results) => {
        if (err) return res.status(500).send({ error: err.message });
        res.json({ message: 'Usuário deletado com sucesso!' });
    });
};