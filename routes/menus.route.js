var express = require('express');
var router = express.Router();

const Menus = require('../models/menus');

// afficher la liste des categories.
router.get('/', async (req, res,) => {
    try {
        const menus = await Menus.find();

        res.status(200).json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouvelle catégorie
router.post('/', async (req, res) => {
    const { titre, prix, image } = req.body;



    const newMenus = new Menus({
        titre:titre,
        prix:prix,
        image:image
    });

    try {
        await newMenus.save();
        res.status(200).json(newMenus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


});

// chercher une catégorie 
router.get('/:menusId', async (req, res) => {
    try {
        const menus = await Menus.findById(req.params.menusId);

        res.status(200).json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});


// modifier une catégorie
router.put('/:menusId', async (req, res) => {
    const { titre, prix, image } = req.body;
    const id = req.params.menusId;

    try {
        const menus = {
            titre:titre,
            prix:prix,
            image:image,
             _id: id
        };
        
        await Menus.findByIdAndUpdate(id, menus);

        res.json(menus);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Supprimer une catégorie
router.delete('/:menusId', async (req, res) => {
    const id = req.params.menusId;
    await Menus.findByIdAndDelete(id);
    res.json({ message: "movie deleted successfully." });
});

module.exports = router;