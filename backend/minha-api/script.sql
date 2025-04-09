use expcriativadb;

drop table users;

CREATE TABLE users (
    cpf VARCHAR(14) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20),
    gender ENUM('M', 'F', 'Outro') NOT NULL
);

INSERT INTO users (cpf, name, email, phone, gender) VALUES
('123.456.789-00', 'Ana Souza', 'ana.souza@email.com', '(11) 91234-5678', 'F'),
('234.567.890-11', 'Bruno Lima', 'bruno.lima@email.com', '(21) 92345-6789', 'M'),
('345.678.901-22', 'Carla Dias', 'carla.dias@email.com', '(31) 93456-7890', 'F'),
('456.789.012-33', 'Daniel Rocha', 'daniel.rocha@email.com', '(41) 94567-8901', 'M'),
('567.890.123-44', 'Eduarda Melo', 'eduarda.melo@email.com', '(51) 95678-9012', 'F'),
('678.901.234-55', 'Felipe Alves', 'felipe.alves@email.com', '(61) 96789-0123', 'M'),
('789.012.345-66', 'Gabriela Costa', 'gabriela.costa@email.com', '(71) 97890-1234', 'F'),
('890.123.456-77', 'Henrique Silva', 'henrique.silva@email.com', '(81) 98901-2345', 'M'),
('901.234.567-88', 'Isabela Martins', 'isabela.martins@email.com', '(91) 99012-3456', 'F'),
('012.345.678-99', 'João Pedro', 'joao.pedro@email.com', '(31) 90123-4567', 'M'),
('111.222.333-44', 'Karla Nogueira', 'karla.nogueira@email.com', '(41) 91234-1111', 'F'),
('222.333.444-55', 'Lucas Ribeiro', 'lucas.ribeiro@email.com', '(51) 92345-2222', 'M'),
('333.444.555-66', 'Marina Freitas', 'marina.freitas@email.com', '(61) 93456-3333', 'F'),
('444.555.666-77', 'Nicolas Pires', 'nicolas.pires@email.com', '(71) 94567-4444', 'M'),
('555.666.777-88', 'Olívia Barros', 'olivia.barros@email.com', '(81) 95678-5555', 'F'),
('666.777.888-99', 'Pedro Henrique', 'pedro.henrique@email.com', '(91) 96789-6666', 'M'),
('777.888.999-00', 'Quésia Luz', 'quesia.luz@email.com', '(11) 97890-7777', 'F'),
('888.999.000-11', 'Rafael Moreira', 'rafael.moreira@email.com', '(21) 98901-8888', 'M'),
('999.000.111-22', 'Sofia Castro', 'sofia.castro@email.com', '(31) 99012-9999', 'F'),
('000.111.222-33', 'Tiago Neves', 'tiago.neves@email.com', '(41) 90123-0000', 'M');
