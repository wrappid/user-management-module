export const Users = (sequelize: any, DataTypes: any) => {
  const users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      defaultValue: "",
      // unique: true
    },
    phone: {
      type: DataTypes.STRING,
      defaultValue: "",
      // unique: true
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    availableTokens: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    firstLogin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  users.associate = (models: any) => {
    if (models.Persons){
      users.hasOne(models.Persons, {
        foreignKey: "userId",
        sourceKey: "id",
        as: "Person",
      });
    }
    if(models.Roles){
      users.belongsTo(models.Roles, {
        as: "Role",
        foreignKey: "roleId",
        sourceKey: "id",
      });
    }
    if(models.UserPermissions){
      users.hasMany(models.UserPermissions, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.MailComms){
      users.hasMany(models.MailComms, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.SessionManagers){
      users.hasMany(models.SessionManagers, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.ApiLogs){
      users.hasMany(models.ApiLogs, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.LoginLogs){
      users.hasMany(models.LoginLogs, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.Payments){
      users.hasMany(models.Payments, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.Otps){
      users.hasMany(models.Otps, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.SmsComms){
      users.hasMany(models.SmsComms, {
        foreignKey: "userId",
        sourceKey: "id",
      });
    }
    if(models.UserTokens){
      users.hasMany(models.UserTokens, {
        foreignKey: "userId",
        sourceKey: "id",
      }); 
    }
    if(models.Applications){
      users.hasOne(models.Applications, {
        foreignKey: "employeeId",
        sourceKey: "id",
      }); 
    }
    if(models.Users){
      users.belongsTo(models.Users, {
        foreignKey: "deletedBy",
        as: "Destroyer",
        sourceKey: "id",
      });
      users.belongsTo(models.Users, {
        foreignKey: "createdBy",
        as: "Owner",
        sourceKey: "id",
      });
      users.belongsTo(models.Users, {
        foreignKey: "updatedBy",
        as: "Updater",
        sourceKey: "id",
      });
    }
  };

  return users;
};
