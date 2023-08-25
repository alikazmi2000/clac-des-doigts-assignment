const utils = require("../middleware/utils");
const chicken = require("../models/chicken");
const Chicken = require("../models/chicken")

/**
 * Create Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createMethod = async (req, res) => {
    try {
        const { name, birthday, weight, steps, running } = req.body;
        const resultObject = await Chicken.create({
            name,
            birthday,
            weight,
            steps,
            running
        })
        let successMsg = 'CHICKEN.CREATE_SUCCESS';
        return utils.handleSuccess(res, successMsg, resultObject);
    } catch (error) {

        return utils.handleError(req, res, error, 'CHICKEN.CREATE_ERROR');
    }
}

/**
 * Update Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateMethod = async (req, res) => {
    try {
        const { _id, name, birthday, weight, steps, running } = req.body;
        const resultObject = await Chicken.findByIdAndUpdate({ _id }, {
            $set: {
                name,
                birthday,
                weight,
                steps,
                running
            }
        })
        if (!resultObject)
            return utils.handleError(req, res, {}, 'CHICKEN.UPDATE_ERROR');

        let successMsg = 'CHICKEN.UPDATE_SUCCESS';
        return utils.handleSuccess(res, successMsg, { _id });
    } catch (error) {

        return utils.handleError(req, res, error, 'CHICKEN.UPDATE_ERROR');
    }
}

/**
 * Get Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getMethod = async (req, res) => {
    try {
        const { id } = req.params
        const resultObject = await Chicken.findById(id);
        if (!resultObject)
            return utils.handleError(req, res, {}, 'CHICKEN.GET_ERROR');

        let successMsg = 'CHICKEN.GET_SUCCESS';
        return utils.handleSuccess(res, successMsg, resultObject);
    } catch (error) {

        return utils.handleError(req, res, error, 'CHICKEN.GET_ERROR');
    }
}

/**
 * Get All Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAllMethod = async (req, res) => {
    try {
        const resultObject = await Chicken.find();
        if (!resultObject)
            return utils.handleError(req, res, {}, 'CHICKEN.GET_ERROR');

        let successMsg = 'CHICKEN.GET_SUCCESS';
        return utils.handleSuccess(res, successMsg, resultObject);
    } catch (error) {

        return utils.handleError(req, res, error, 'CHICKEN.GET_ERROR');
    }
}

/**
 * Delete Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteMethod = async (req, res) => {
    try {
        const { id } = req.params;

        //This is for shallow delete
        // const resultObject = await Chicken.updateOne({ _id: id },{$set:{deleted:false}})

        const resultObject = await Chicken.findOneAndDelete({ _id: id })
        if (!resultObject)
            return utils.handleError(req, res, {}, 'CHICKEN.DELETE_ERROR');

        let successMsg = 'CHICKEN.DELETE_SUCCESS';
        return utils.handleSuccess(res, successMsg, { _id: id });
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.DELETE_ERROR');
    }
}

/**
 * Run Chicken Api Method
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const runMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const resultObject = await Chicken.updateOne({ _id: id }, { $inc: { quantity: 1, "steps": 1 } });
        if (!resultObject)
            return utils.handleError(req, res, {}, 'CHICKEN.RUN_ERROR');

        let successMsg = 'CHICKEN.RUN_SUCCESS';
        return utils.handleSuccess(res, successMsg, { _id: id });
    } catch (error) {

        utils.handleError(req, res, error, 'CHICKEN.RUN_ERROR');
    }
}


module.exports = {
    createMethod,
    getMethod,
    getAllMethod,
    updateMethod,
    deleteMethod,
    runMethod

}