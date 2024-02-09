export const UserSettings = (sequelize: any, DataTypes: any) => {
  const userSettings = sequelize.define("UserSettings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      // unique: true,
    },
    label: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    value: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    _status: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
    },
  });

  userSettings.associate = (models: any) => {
    if (models.Users) {
      userSettings.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "User",
        sourceKey: "id",
      });
      userSettings.belongsTo(models.Users, {
        foreignKey: "createdBy",
        as: "Owner",
        sourceKey: "id",
      });
      userSettings.belongsTo(models.Users, {
        foreignKey: "updatedBy",
        as: "Updater",
        sourceKey: "id",
      });
      userSettings.belongsTo(models.Users, {
        foreignKey: "deletedBy",
        as: "Destroyer",
        sourceKey: "id",
      });
    }
  };

  return userSettings;
};
