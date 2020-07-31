const { json } = require("express")
const { render } = require("ejs")

//// data base type or schema imported in order to perform modifications in the mongo db queries

const toDoApp = require("../model/todoapp");



//// used to render the page on the first glance

module.exports.mainPage = (req, res) => {

    toDoApp.find({}, (err, data) => {
        if (err) {
            console.log("some thing not right");
            return;
        }
        return res.render("home", { data: data })
    });
}

//// use to add a new data to the block of data thats alreadythere
module.exports.addPost = (req, res) => {
    console.log(req.body);
    toDoApp.create({
        "description": req.body.description,
        "category": req.body.category,
        "dueDate": req.body.dueDate,

    }, (err, data) => {
        if (err) {
            console.log("something went wrong");
            return;
        }
        console.log("created successfully")
    })

    return res.redirect("/")
}


//// used in order to delete the post that is adding no value and is completed

module.exports.deletePost = (req, res) => {
    console.log(req.params)
    toDoApp.findOneAndDelete(req.params._id, (err, out) => {
        if (err) {
            console.log("couldnt delete")
        }
        console.log(out)
    });
    return res.redirect("/")
}
