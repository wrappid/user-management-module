export const Roles = (sequelize: any, DataTypes: any) => {
  const roles = sequelize.define("Roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    priority: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  roles.associate = (models: any) => {
    if ( models.RolePermissions) {
      roles.hasMany(models.RolePermissions, {
        foreignKey: "roleId",
        sourceKey: "id",
      });
    }
    if( models.Users ){
      roles.hasMany(models.Users, {
        foreignKey: "roleId",
        sourceKey: "id",
      });
      roles.belongsTo(models.Users, {
        foreignKey: "createdBy",
        as: "Owner",
        sourceKey: "id",
      });
      roles.belongsTo(models.Users, {
        foreignKey: "updatedBy",
        as: "Updater",
        sourceKey: "id",
      });
      roles.belongsTo(models.Users, {
        foreignKey: "deletedBy",
        as: "Destroyer",
        sourceKey: "id",
      });
    }
  };

  return roles;
};
