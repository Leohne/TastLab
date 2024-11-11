INSERT INTO param_generics (param_key, code, display) VALUES 
    ('unit', 'GRAM', 'Gramme'),
    ('unit', 'LITRE', 'Litre'),
    ('unit', 'UNIT', 'Unité');
    ('unit', 'MILIGRAM', 'mg');
    ('unit', 'ML', 'mililitre');
    ('unit', 'CL', 'centilitre');
    ('unit', 'KG', 'kilo');
    ('ingredient', 'BEURRE', 'beurre');
    ('ingredient', 'FARINE', 'Farine');
    ('ingredient', 'LAIT', 'lait');
    ('ingredient', 'FROMAGE', 'fromage rapé');
    ('ingredient', 'JAMBON', 'jambon');
    ('ingredient', 'CROISSANT', 'croissant');
    ('ingredient', 'VIANDEHACHEE', 'viande hachée')

INSERT INTO ingredients (ingredient_id, photo_url, default_unit_id) VALUES 
    ((SELECT id FROM param_generics WHERE code = 'BEURRE'), 'https://example.com/beurre.jpg', 
     (SELECT id FROM param_generics WHERE code = 'GRAM')),
    ((SELECT id FROM param_generics WHERE code = 'FARINE'), 'https://example.com/farine.jpg', 
     (SELECT id FROM param_generics WHERE code = 'GRAM')),
    ((SELECT id FROM param_generics WHERE code = 'LAIT'), 'https://example.com/lait.jpg', 
     (SELECT id FROM param_generics WHERE code = 'LITRE')),
    ((SELECT id FROM param_generics WHERE code = 'FROMAGE'), 'https://example.com/fromage.jpg', 
     (SELECT id FROM param_generics WHERE code = 'GRAM')),
    ((SELECT id FROM param_generics WHERE code = 'JAMBON'), 'https://example.com/jambon.jpg', 
     (SELECT id FROM param_generics WHERE code = 'GRAM')),
    ((SELECT id FROM param_generics WHERE code = 'CROISSANT'), 'https://example.com/croissant.jpg', 
     (SELECT id FROM param_generics WHERE code = 'UNIT')),
    ((SELECT id FROM param_generics WHERE code = 'VIANDEHACHEE'), 'https://example.com/croissant.jpg', 
     (SELECT id FROM param_generics WHERE code = 'GRAM'));
     

INSERT INTO users (username, email, password, active) VALUES
 ('Paul', 'paulmcartney@beatles.com', 'hashed_password_1', true),
('Ringo', 'ringostar@beatles.com', 'hashed_password_2', false),
('Slash', 'slashrocks@gunsnroses.com', 'hashedopassword45', false);

INSERT INTO recipes (title, description, duration, redactor_id)
VALUES ('Croissants Béchamel Fromage et Jambon', 
        'Recette de croissants garnis d’une béchamel au fromage et de jambon.', 45, 1),
        ('Tarte Aubergine Feta',
        'Tarte salée rapide au parfum méditéranéen', 15, 2);

INSERT INTO recipe_steps (recipe_id, step_index, description)
VALUES 
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 1, 'Commencer par ouvrir vos croissants en deux à l\'aide d\'un couteau sans les séparer complètement.'),
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 2, 'Préparation de la béchamel :'),
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 3, 'Faire fondre le beurre dans une casserole, y ajouter de la farine et petit à petit en remuant au fouet y ajouter du lait.'),
((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 4, 'Laisser épaissir à feu doux en remuant sans cesse. Ajouter du sel, du poivre et de la noix de muscade.'),
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 5, 'Dès que votre béchamel est prête, faites-y fondre du fromage puis l''étaler à l''intérieur des croissants. Ajouter une tranche de jambon roulée, puis encore de la béchamel et du fromage râpé.'),
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 6, 'Recommencer ceci pour les 3 autres croissants.'),
    ((SELECT id FROM recipes WHERE title = 'Croissants Béchamel Fromage et Jambon'), 7, 'Mettre au four à 180°C (thermostat 6) pendant 20 min tout en surveillant.');

INSERT INTO recipe_steps (recipe_id, step_index, description)
VALUES 
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 1, 'Mettre le four à chauffer à 210°C (thermostat 7) environ 10 min.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 2, 'Étaler la pâte à tarte dans un moule à tarte aux bords assez hauts, dont le fond aura été recouvert de papier sulfurisé'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 3, 'Mettre la pâte à nu au four et laisser cuire 7 min.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 4, 'Laver et couper les légumes en rondelles pas trop fines ni trop épaisses.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 5, 'Couper la feta en petits cubes.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 6, 'Dans une grande poêle, mettre les graines à roussir à revenir avec l''huile d''olive (dosage en fonction des goûts). Bien faire dorer les graines à roussir ou de cumin.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 7, 'Ajouter dans la poêle les aubergines, les laisser s''imbiber d''huile et bien faire cuire chaque face 10 min.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 8, 'Dans un récipient, mettre les œufs, le curcuma, le paprika, sel et poivre, bien mélanger au fouet ou à la fourchette, puis mettre la crème fraîche. Bien fouetter de nouveau.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 9, 'Disposer sur la pâte à tarte pré-cuite les premières rondelles d''aubergines, ne pas trop les serrer mais coller les rondelles les une aux autres'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 10, 'Émietter la feta sur les aubergines.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 11, 'Mettre le reste d''aubergines et les rondelles de tomates sur la fêta émiettée.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 12, 'Recouvrir le tout du mélange oeufs-épices-crème fraiche. Bouger le moule de manière à faire pénétrer l''ensemble de ce mélange dans tous les espaces vides de la préparation.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 13, 'Parsemer l''ensemble de gruyère râpé (dosage selon les goûts)'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 14, 'Mettre au four 30 min (le mélange oeufs-épices-crème doit être bien cuit et le gruyère fondu). Surveiller la cuisson de temps en temps.'),
    ((SELECT id FROM recipes WHERE title = 'Tarte Aubergine Feta'), 15, 'Servir tiède avec une petite salade verte !');

