const { Router } = require('express'); //15:25
const controller = require('./controller')//21:00

const router = Router(); //15:30


router.get('/', controller.getStudents); //21:45
router.post('/', controller.addStudent); //34:50,giving info to db
router.get('/:id', controller.getStudentByStudentNumber); //29:27
router.delete('/:id', controller.removeStudent); //50:08
router.put('/:id', controller.updateStudent); //59:40

module.exports = router; //16:25