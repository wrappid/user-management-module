export const PersonRelations = (sequelize: any, DataTypes: any) => {
  const personRelations = sequelize.define("PersonRelations", {
    _status: { type: DataTypes.STRING },
    deletedAt: {
      allowNull: true,
      type: "TIMESTAMP",
    },
    extraInfo: {
      defaultValue: null,
      type: DataTypes.JSONB,
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
  });

  personRelations.associate = (models: any) => {
    if(models.Persons && models.Relations && models.Users ){
    personRelations.belongsTo(models.Persons, {
      as: "Person",
      foreignKey: "personId",
      sourceKey: "id",
    });
    personRelations.belongsTo(models.Persons, {
      as: "RelatedPerson",
      foreignKey: "relatedPersonId",
      sourceKey: "id",
    });
    personRelations.belongsTo(models.Relations, {
      foreignKey: "relationId",
      sourceKey: "id",
    });
    personRelations.belongsTo(models.Users, {
      as: "Owner",
      foreignKey: "createdBy",
      sourceKey: "id",
    });
    personRelations.belongsTo(models.Users, {
      as: "Updater",
      foreignKey: "updatedBy",
      sourceKey: "id",
    });
    personRelations.belongsTo(models.Users, {
      as: "Destroyer",
      foreignKey: "deletedBy",
      sourceKey: "id",
    });
  }
  };

  return personRelations;
};
