'use strict'

const response = require('./../response')
const db = require('./../settings/db')
exports.products = (req,res) => {
    db.query('SELECT * FROM `commerce_product`', (error, rows, fields) =>{
        if(error) {
            console.log('error')
        }else response.status(rows, res)
    })
}
//TODO: сделать добавление продуктов, но это после того как с Ильёй разберемся с полями дб, а вообще - метод работает
exports.add = (req, res) =>{
    const sql = "INSERT INTO `commerce_product`(`sku`,`title`) VALUES('"+req.query.sku+"', '"+req.query.title+"')";
    db.query(sql, (error,results) =>{
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
}

exports.delete = (req, res) =>{
    const sql = "DELETE FROM `commerce_product`WHERE id='86')";
    db.query(sql, (error,results) =>{
        if(error){
            console.log(error);
        }else{
            response.status(results,res)
        }
    })
}