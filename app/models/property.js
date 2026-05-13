import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Property = sequelize.define('properties', {
    address: { type: DataTypes.STRING,  allowNull: false  },
    price: { type: DataTypes.INTEGER,  allowNull: false  },
    area_sqm: { type: DataTypes.INTEGER,  allowNull: false  },
    property_type: { type: DataTypes.STRING,  allowNull: false  },
    is_available: { type: DataTypes.BOOLEAN,  allowNull: false  },
}, {
    timestamps: true,
    freezeTableName: true
})

export default Property
