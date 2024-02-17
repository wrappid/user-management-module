export const Persons = (sequelize: any, DataTypes: any) => {
  const person = sequelize.define("Persons", {
    _status: { type: DataTypes.STRING },
    deletedAt: {
      allowNull: true,
      type: "TIMESTAMP",
    },
    dob: {
      defaultValue: new Date(),
      type: "TIMESTAMP",
    },
    emailVerified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    extraInfo: {
      defaultValue: null,
      type: DataTypes.JSONB,
    },
    firstName: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    gender: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    height: {
      defaultValue: null,
      type: DataTypes.FLOAT,
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
    isVerified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    lastName: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    medicalId: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    middleName: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    phoneVerified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
    photoUrl: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    profileId: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    rating: {
      defaultValue: null,
      type: DataTypes.FLOAT,
    },
    userInvitationToken: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    website: {
      defaultValue: "",
      type: DataTypes.STRING,
    },
    weight: {
      defaultValue: null,
      type: DataTypes.FLOAT,
    },
  });

  person.associate = (models: any) => {
    if (models.Users) {
      person.belongsTo(models.Users, {
        as: "User",
        foreignKey: "userId",
        sourceKey: "id",
      });
      person.belongsTo(models.Users, {
        as: "Owner",
        foreignKey: "createdBy",
        sourceKey: "id",
      });
    
      person.belongsTo(models.Users, {
        as: "Updater",
        foreignKey: "updatedBy",
        sourceKey: "id",
      });
      person.belongsTo(models.Users, {
        as: "Destroyer",
        foreignKey: "deletedBy",
        sourceKey: "id",
      });
    }
      /*
    person.belongsTo(models.Departments, {
      foreignKey: "departmentId",
      sourceKey: "id",
    });
    */
    if(models.PersonRelations){
    person.hasMany(models.PersonRelations, {
        as: "Person",
        foreignKey: "personId",
        sourceKey: "id",
      });
      person.hasMany(models.PersonRelations, {
        as: "RelatedPersons",
        foreignKey: "relatedPersonId",
        sourceKey: "id",
      });
    }
    if(models.PersonContacts){
      person.hasMany(models.PersonContacts, {
        foreignKey: "personId",
        sourceKey: "id",
      });
    }
      /*
    person.hasOne(models.DoctorDetails, {
      foreignKey: "doctorId",
      sourceKey: "id",
    });
    */
    if(models.PersonAddresses)  {

      person.hasMany(models.PersonAddresses, {
          foreignKey: "personId",
          sourceKey: "id",
        });
    }
    if(models.PersonEducations)  {
      person.hasMany(models.PersonEducations, {
        foreignKey: "personId",
        sourceKey: "id",
      });
    }
    if(models.PersonExperiences)  {

      person.hasMany(models.PersonExperiences, {
        foreignKey: "personId",
        sourceKey: "id",
      });
    }
    if(models.PersonDocs)  {
      person.hasMany(models.PersonDocs, {
        foreignKey: "personId",
        sourceKey: "id",
      });
    }

      
      
      /*
    person.hasMany(models.Appointments, {
      as: "DoctorAppointments",
      foreignKey: "doctorId",
      sourceKey: "id",
    });
    person.hasMany(models.Appointments, {
      as: "PatientAppointments",
      foreignKey: "patientId",
      sourceKey: "id",
    });
    */
     
    
  };

  return person;
};
