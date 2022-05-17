const express = require("express");
const router = express.Router();

const {createEmployer, getAllEmployers, getEmployerByID, updateEmployerDetails, deleteEmployerDetails } = require("../controllers/employerController");


//employer routes
router.route('/').post(createEmployer)
                 .get(getAllEmployers)

router.route('/:id').get(getEmployerByID)
                    .put(updateEmployerDetails)
                    .delete(deleteEmployerDetails)


module.exports = router;