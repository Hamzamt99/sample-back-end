const Todo = (sequelize, DataTypes) => {
  const model = sequelize.define('Todo', {
    text: { type: DataTypes.STRING, allowNull: false },
    assignee: { type: DataTypes.STRING, allowNull: false },
    difficulty: {
      type: DataTypes.INTEGER, allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  return model;
};

module.exports = Todo;