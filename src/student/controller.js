const pool = require('../../db'); //22:22
const queries = require('./queries'); //26:50

//name, email, year, house, isRegistered, studentNumber

const getStudents = (req, res) => { //20:25
   pool.query(queries.getStudents, (error, results) => { //27:15
    if (error) throw error; 
    res.status(200).json(results.rows); //24:00
});
};

const getStudentByStudentNumber = (req, res) => { 
    const id = parseInt(req.params.id); //31:15
    pool.query(queries.getStudentByStudentNumber, [studentNumber], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows); 
     }); //33:00
};

const addStudent = (req, res) => { //44:20
    const {name, email, year, house, isRegistered, studentNumber } = req.body; //36:30, destructuring 
    
    //check for duplicate email
   pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) { //check if email exists
        res.send("email already exists");
    } 
    //add student to db
    pool.query(queries.addStudent, [name, email, year, house, isRegistered, studentNumber], (error, results) => {
        if (error) throw error;
        res.status(201).send("student added");
        console.log('student added');
    });

});
};

const removeStudent = (req, res) => { //
    const id = parseInt(req.params.id); //51:45
    // check if student exists
    pool.query(queries.getStudentByStudentNumber, [studentNumber], (error, results) => {
        const noStudentFound = !results.rows.length; //53:40, if there are no results then there is no student found
        if (noStudentFound) {
        res.send('student does not exist in db, could not remove');
        } //54:15

        // remove student from db
        pool.query(queries.removeStudent, [studentNumber], (error, results) => {
            if (error) throw error;
            res.status(200).send('student removed');
            console.log('student removed');
        }); //58:15
    });
};

const updateStudent = (req, res) => { 
    const id = parseInt(req.params.id);
    const {name} = req.body;

    // check if student exists
    pool.query(queries.getStudentByStudentNumber, [studentNumber], (error, results) => {
        const noStudentFound =!results.rows.length; // if there are no results then there is no student found
        if (noStudentFound) {
        res.send('student does not exist in db, could not update');
        } //1:02:25

        pool.query(queries.updateStudent, [name, studentNumber], (error, results) => {
            if (error) throw error;
            res.status(200).send('student updated');
        }); //1:05:20
});
};

module.exports = {
    getStudents, //20:30
    getStudentByStudentNumber,
    addStudent,
    removeStudent,
    updateStudent,
};