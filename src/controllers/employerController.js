const Employer = require("../models/employerModel")

// @desc  Create Employer
// @route POST /api/Employers/
// @access Admin 

exports.createEmployer = async(req, res) => {

    if(req.body){
        const employer = new Employer(req.body)
        
        await employer.save()
        .then( data => {
            res.status(201).send({ success: true, 'message': "Employer Created Successfully!"})
        })
        .catch( (error) => {
            res.status(500).send({ success: false, 'message': error })
        } )

    }else{
        res.status(200).send({ success: false, 'message': "No Data Found" })
    }
};

// @desc  Get All Employers
// @route GET /api/Employers/
// @access Admin

exports.getAllEmployers = async (req, res) => {
  await Employer.find({})
    .then((data) => {
      res.status(200).send({ success: true, Employers: data });
    })
    .catch((error) => {
      res.status(500).send({ success: false, message: error });
    });
};

// @desc  Get Employer by Employer ID
// @route GET /api/Employers/:id
// @access Admin

exports.getEmployerByID = async (req, res) => {
  if (req.params && req.params.id) {
    await Employer.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ success: true, Employer: data });
      })
      .catch((error) => {
        res.status(400).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "Id Not Found" });
  }
};

// @desc  Update Employer
// @route PUT /api/Employers/:id
// @access Admin

exports.updateEmployerDetails = async (req, res) => {
  if (req.body && req.params) {
    const query = { _id: req.params.id };
    const update = {
      emp_name: req.body.emp_name,
      emp_bio: req.body.emp_bio,
      age: req.body.age,
      salary: req.body.salary,
      department: req.body.department,
    };

    await Employer.updateOne(query, update)
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: "Employer Updated Successfully!" });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "No Data Found" });
  }
};

// @desc  Delete Employer
// @route Delete /api/Employers/:id
// @access Admin

exports.deleteEmployerDetails = async (req, res) => {
  if (req.params && req.params.id) {
    await Employer.deleteOne({ _id: req.params.id })
      .then((result) => {
        res
          .status(200)
          .send({ success: true, message: "Employer Deleted Successfully!" });
      })
      .catch((error) => {
        res.status(500).send({ success: false, message: error });
      });
  } else {
    res.status(200).send({ success: false, message: "No Id Found" });
  }
};

