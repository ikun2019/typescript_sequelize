'use strict';
import { Model } from 'sequelize';

interface ProjectAssignment {
	ProjectId: number;
	UserId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
	class ProjectAssignments extends Model<ProjectAssignment> implements ProjectAssignment {
		ProjectId!: number;
		UserId!: string;
		static associate(models: any) {
			// define association here
		}
	}
	ProjectAssignments.init(
		{
			ProjectId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'Project',
					key: 'id',
				},
			},
			UserId: {
				type: DataTypes.STRING,
				allowNull: false,
				primaryKey: true,
				references: {
					model: 'User',
					key: 'id',
				},
			},
		},
		{
			sequelize,
			modelName: 'ProjectAssignments',
		}
	);
	return ProjectAssignments;
};
