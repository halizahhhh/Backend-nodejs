// import model student
const Student = require("../models/Student")

class StudentController {
    async index(req, res) {
        // TODO 4: Tampilkan data students
        const students = await Student.all();
    if (students.length > 0){
        const data = {
            message: "Menampilkan data student",
            data: students
        };
        return res.status(200).json(data);
    }
        // else
        const  data = {
            message : "Students is empty"
        };
        return res.status(200).json(data);
    }

    async store(req, res) {
        /**
         * TODO 2: memanggil method create.
         * Method create mengembalikan data yang baru diinsert.
         * Mengembalikan response dalam bentuk json.
         */

        /**
         * Vlidasi sederhana
         * - Handle jika salah satu data tidak dikirim
         */

        // destrructing object req.body
        const { nama, nim, email, jurusan } = req.body;
        // jika data undefined maka kirim respon error 
        if (!nama || !nim || !email || !jurusan){
            const data = {
                message : "Semua data harus dikirim"
            };
            return res.status(422).json(data);
        }
        // else 
        const student = await Student.create(req.body);
        const data = {
            message: "Menambahkan data student",
            data: student
        };

        res.status(201).json(data);
    }


    async update(req, res) {
        const { id } = req.params;
        // cari id student yang ingin di update
        const student = await Student.find(id);

        // TODO 6: Update data students
        // code here
        if (student) {
            // melakukan update data
            const student = await Student.update(id, req.body);
            const data = {
                message: `Mengedit data students`,
                data: student,
        };
        res.status (200).json(data);
    }
    else {
        const data = {
            message: 'Student not found',
        };
        res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);

        // TODO 7: Hapus data students
        // code here
        if (student){
            await Student.delete (id);
            const data = {
                message: `Menghapus data students`,
        };
        res.status(200).json(data);
        }else {
            const data = {
                message : 'Student not found',
            };
            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const {id} = req.params;
        // cari student berdasarkan id
        const student = await Student.find(id);

        if(student){
            const data = {
                message : 'Menampilkan detail students',
                data: student
            };
            res.status(200).json(data);
        }
        else {
            const data = {
                message: 'Student not found',};
                res.status(404).json(data);
        }
    }
}

// make an object Student Controller
const object = new StudentController();

// export object
module.exports = object;