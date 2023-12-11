const getStudents ="SELECT * FROM students"; //26:00
const getStudentById ="SELECT * FROM students WHERE id = $1"; //26:40, where $1 is a varible name
const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1"; //40:00
const addStudent =
"INSERT INTO students (name, email, age, dob) VALUES ($1,$2,$3,$4)"; //45:28
const removeStudent ="DELETE FROM students WHERE id = $1"; //55:15
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2"; //1:04:55

module.exports = {
 getStudents, //26:10
 getStudentById, //26:50
 checkEmailExists, //40:10
 addStudent, //44:45
 removeStudent,
 updateStudent, //1:04:15
} 