var Student = require('../model/student_model');
exports.create_student =function (req, res) {
    var student = new Student({
        rollnumber: req.body.rollnumber,
        fullname: req.body.fullname,
        email: req.body.email,
        avatarUrl: req.body.avatarUrl,
    });
    //student.save();
    console.log(student);
    res.send(req.body);
};
exports.formRegister = function (req, res) {
    res.render('student-form.ejs')
};


