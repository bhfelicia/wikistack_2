const { Sequelize, DataTypes, Model } = require("sequelize");

const db = new Sequelize("postgres://localhost/wikistack_2", {
  logging: false,
});

class Page extends Model {}

Page.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    content: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.ENUM("open", "closed"),
    },
  },
  { sequelize: db, modelName: "pages" }
);

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = db;
