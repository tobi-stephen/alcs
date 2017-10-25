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

router.put('/student/:id', controller.editStudentResource);

router.post('/student/:id/delete', controller.deleteStudentReso);
router.delete('/student/:id', controller.deleteStudentResource);

module.exports = router;