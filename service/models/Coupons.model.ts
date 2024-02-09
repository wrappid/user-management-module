export const Coupons = (sequelize: any, DataTypes: any) => {
  const coupons = sequelize.define("Coupons", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    couponId: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    label: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
    rule: {
      type: DataTypes.JSONB,
      defaultValue: {
        discountType: "flat",
        upto: "150",
        minAmount: "100",
        discountPercentage: "0%",
      },
    },
    validFrom: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
    },
    validUpto: {
      type: "TIMESTAMP",
      defaultValue: new Date(),
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

  coupons.associate = (models: any) => {
    if (models.Users) {
      coupons.belongsTo(models.Users, {
        foreignKey: "userId",
        as: "User",
        sourceKey: "id",
      });
      coupons.belongsTo(models.Users, {
        foreignKey: "createdBy",
        as: "Owner",
        sourceKey: "id",
      });
      coupons.belongsTo(models.Users, {
        foreignKey: "updatedBy",
        as: "Updater",
        sourceKey: "id",
      });
      coupons.belongsTo(models.Users, {
        foreignKey: "deletedBy",
        as: "Destroyer",
        sourceKey: "id",
      });
    }
  };

  return coupons;
};
