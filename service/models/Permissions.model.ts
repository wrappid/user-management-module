export const Permissions = (sequelize: any, DataTypes: any) => {
  const permissions = sequelize.define("Permissions", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    label: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "menuitem",
    },
    link: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    icon: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    appComponent: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  permissions.associate = (models: any) => {
    if ( models.RolePermissions ) {
      permissions.hasMany(models.RolePermissions, {
        foreignKey: "permissionId",
        sourceKey: "id",
      });
    }
    if( models.UserPermissions){
      permissions.hasMany(models.UserPermissions, {
        foreignKey: "permissionId",
        sourceKey: "id",
      });
    }
    if( models.Users){
      permissions.belongsTo(models.Users, {
        foreignKey: "deletedBy",
        as: "Destroyer",
        sourceKey: "id",
      });
      permissions.belongsTo(models.Users, {
        foreignKey: "createdBy",
        as: "Owner",
        sourceKey: "id",
      });
      permissions.belongsTo(models.Users, {
        foreignKey: "updatedBy",
        as: "Updater",
        sourceKey: "id",
      });
    }
    if(models.Permissions){
      permissions.belongsTo(models.Permissions, {
        foreignKey: "parentId",
        sourceKey: "id",
      });
    }
  };

  return permissions;
};
