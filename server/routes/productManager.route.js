const NewProjectController = require('../controllers/newProject.controller');



module.exports = (app) => {

    app.get("/api/NewProject", NewProjectController.findAllNewProjects);

    app.get("/api/NewProject/:id", NewProjectController.findOneNewProject);

    app.put("/api/NewProject/:id", NewProjectController.updateOneNewProject);

    app.post("/api/NewProject", NewProjectController.createNewProject);

    app.delete("/api/NewProject/:id", NewProjectController.deleteOneNewProject);

}