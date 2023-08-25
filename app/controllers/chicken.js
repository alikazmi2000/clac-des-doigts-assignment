const utils = require("../middleware/utils")
const Chicken = require("../models/chicken")
const createMethod = async (req, res) => {
    try {
        const { name, birthday, weight, steps, running } = req.body;
        const chickenObject = await Chicken.create({
            name,
            birthday,
            weight,
            steps,
            running
        })
        let successMsg = 'CHICKEN.CREATE_SUCCESS';
        utils.handleSuccess(res, successMsg, chickenObject);
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.CREATE_ERROR');
    }
}
const updateMethod = async (req, res) => {
    try {


        let successMsg = 'CHICKEN.UPDATE_SUCCESS';
        utils.handleSuccess(res, successMsg, info, token);
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.UPDATE_ERROR');
    }
}
const deleteMethod = async (req, res) => {
    try {


        let successMsg = 'CHICKEN.DELETE_SUCCESS';
        utils.handleSuccess(res, successMsg, info, token);
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.DELETE_ERROR');
    }
}
const getMethod = async (req, res) => {
    try {


        let successMsg = 'CHICKEN.GET_SUCCESS';
        utils.handleSuccess(res, successMsg, info, token);
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.GET_ERROR');
    }
}

module.exports = {
    createMethod
}