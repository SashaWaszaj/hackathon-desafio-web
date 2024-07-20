const axios = require('axios');
require('dotenv').config();
const CategoryModel = require('../models/CategoryModel.js');

class CategoryService {
    static async createCategory(category) {

        if (!category.nombre) {
            return {success: false, message: 'El nombre de la categoria es requerida'};
        }
        if (!category.imagen) {
            return {success: false, message: 'La imagen de la categoria es requerida'};
        }

        const nombre = category.nombre
        const categoryDB = await CategoryModel.findOne({nombre})

        if (categoryDB) {
            return {success: false, message: 'La categoria ya existe'};
        }

        await CategoryModel.create(category);

        return {success: true, message: 'Categoria registrado exitosamente'};
       } 
       
       
    static async getCategory() {
        return CategoryModel.find({})
    }
}

module.exports = CategoryService;