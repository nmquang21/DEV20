var myController = require("../controller/MyController")
exports.routing = function(app){
    app.route("/admin/student")
        .get(myController.formRegister)
        .post(myController.create_student)

}
