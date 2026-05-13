import { DataTypes } from 'sequelize';

async function up({context: QueryInterface}) {
  await QueryInterface.createTable('properties', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    address: { type: DataTypes.STRING,  allowNull: false  },
    price: { type: DataTypes.INTEGER,  allowNull: false  },
    area_sqm: { type: DataTypes.INTEGER,  allowNull: false  },
    property_type: { type: DataTypes.STRING,  allowNull: false  },
    is_available: { type: DataTypes.BOOLEAN,  allowNull: false  },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }    
  });
}

async function down({context: QueryInterface}) {
  await QueryInterface.dropTable('properties');
}

export { up, down }
