const express = require('express');
const router = express.Router();
const CategoryService = require('../services/CategoryService');

router.get('/categorylist', async (request, response) => {

    try {
        const category = await CategoryService.getCategory();
        response.status(200).json({category})
    } catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar recuperar la lista de categorias'});
    }
});

router.post('/create', async (request, response) => {

    try {
        const category = await CategoryService.createCategory(request.body);
        response.status(200).json({category})
    }catch (error) {
        console.log(error.message);
        response.status(500).json({message: 'Error al intentar crear la lista de categorias'});
    }
});

module.exports = router;