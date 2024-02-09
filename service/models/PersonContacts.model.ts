export const PersonContacts = (sequelize: any, DataTypes: any) => {
  const personContacts = sequelize.define("PersonContacts", {
    _status: { type: DataTypes.STRING },
    data: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    deletedAt: {
      allowNull: true,
      type: "TIMESTAMP",
    },
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    isActive: {
      defaultValue: true,
      type: DataTypes.BOOLEAN,
    },
    notificationFlag: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    primaryFlag: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    type: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    verified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
  });

  personContacts.associate = (models: any) => {
    if (models.Persons && models.Users) {
      personContacts.belongsTo(models.Persons, {
        foreignKey: "personId",
        sourceKey: "id",
      });
      personContacts.belongsTo(models.Users, {
        as: "Owner",
        foreignKey: "createdBy",
        sourceKey: "id",
      });
      personContacts.belongsTo(models.Users, {
        as: "Updater",
        foreignKey: "updatedBy",
        sourceKey: "id",
      });
      personContacts.belongsTo(models.Users, {
        as: "Destroyer",
        foreignKey: "deletedBy",
        sourceKey: "id",
      });
    }
  };

  return personContacts;
};
