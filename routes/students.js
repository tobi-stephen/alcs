var express = require('express');
var router = express.Router();
var list = require('../list');
var Resource = require('../resource');
var controller = require('../controller');


router.get('/', controller.getStudents);

router.get('/students', controller.getStudents);

router.get('/create', controller.getCreateStudent);

router.post('/create', controller.postCreateStudent);

router.get('/student/:id', controller.getStudentResource);

router.get('/student/:id/edit', controller.getEditStudent);

router.post('/student/:id/edit', controller.postEditStudent);

router.post('/student/:id/delete', controller.deleteStudent);

//to be used with postman
router.put('/student/:id', controller.postEditStudent);
router.delete('/student/:id', controller.deleteStudent);

module.exports = router;