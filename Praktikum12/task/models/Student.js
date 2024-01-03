// import database
const db = require("../config/database");

// make Student model
class Student {
    static all() {
        return new Promise((resolve, reject) => {
            // lakukan query ke db untuk ambil data
            const query = "SELECT * FROM students";
            db.query(query, (err, results) => {
                resolve(results);
            });
        });
    }

    /**
  * TODO 1: Buat fungsi untuk insert data.
  * Method menerima parameter data yang akan diinsert.
  * Method mengembalikan data student yang baru diinsert.
  */
    static create(Student) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO students SET ?";
            db.query(query, Student, (err, results) => {
                resolve(this.find(results.insertId));
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ?`;
            db.query(sql, id, (err, results) => {
                // destructing array
                const [student] = results;
                resolve(student);
            });
        });
    }

   // mengupdate data student
   static async update(id, data) {
    await new Promise((resolve, reject) => {
        const sql = "UPDATE students SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, results)=> {
            resolve(results);
        });
    });
    // mencari data yang baru diupdate
    const student = await this.find(id);
    return student;
   }

   // menghapus data dari database
   static delete(id) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM students WHERE ID = ?";
        db.query(sql, id, (err, results) => {
            resolve(results);
        });
    });
   }

   // mencari data berdasarkan id
   static find(id){
    return new Promise((resolve, reject)=> {
        const sql = "SELECT * FROM students WHERE id = ?";
        db.query(sql, id, (err, results)=> {
            // destructing array
            const [student] = results;
            resolve(student);
        });
    });
   }


}


// export model
module.exports = Student;