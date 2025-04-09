const db = require('../db');

exports.getAllUsers = (req, res) => {
    db.query('SELECT cpf, name, email, phone, gender FROM users', (err, results) => {
        if (err) return res.status(500).send({ error: err.message });
        res.json(results);
    });
};

exports.createUser = (req, res) => {
    const { cpf, name, email, phone, gender } = req.body;
    db.query(
        'INSERT INTO users (cpf, name, email, phone, gender) VALUES (?, ?, ?, ?, ?)',
        [cpf, name, email, phone, gender],
        (err) => {
            if (err) return res.status(500).send({ error: err.message });
            res.json({ message: 'Usuário adicionado com sucesso!' });
        }
    );
};

exports.updateUser = (req, res) => {
    const { name, email, phone, gender } = req.body;
    const { cpf } = req.params;
    db.query(
        'UPDATE users SET name = ?, email = ?, phone = ?, gender = ? WHERE cpf = ?',
        [name, email, phone, gender, cpf],
        (err) => {
            if (err) return res.status(500).send({ error: err.message });
            res.json({ message: 'Usuário atualizado com sucesso!' });
        }
    );
};

exports.deleteUser = (req, res) => {
    const { cpf } = req.params;
    db.query('DELETE FROM users WHERE cpf = ?', [cpf], (err) => {
        if (err) return res.status(500).send({ error: err.message });
        res.json({ message: 'Usuário deletado com sucesso!' });
    });
};
