import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/projects';
import { projectassignments } from './seeders/projectassignment';

// const createProjectAssignments = () => {
// 	projectassignments.map((projectassignment) => {
// 		db.ProjectAssignments.create(projectassignment);
// 	});
// };
// createProjectAssignments();
app.get('/', (req, res, next) => {
	db.User.findAll({
		include: {
			model: db.Project,
		},
	}).then((result: object) => {
		console.log(result);
	});
});

db.sequelize.sync().then(() => {
	app.listen(port, () => {
		console.log('Running!');
	});
});
