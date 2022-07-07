const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const bcrypt = require("bcrypt");

class User extends Model {
  // create method to check password of each user
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


User.init(
    {
        id: {
        type:
        primaryKey:
        autoIncrement:
    },
    username: {
        type:
        allowNull:
    },
    password: {
        type:
        allowNull:
        validate: {
            len: [4]
        }
    }
},
{
    hooks: {
        async beoreCreate(newUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User'
  }
);

