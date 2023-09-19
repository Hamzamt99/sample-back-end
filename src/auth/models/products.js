const products = (sequelize, DataTypes) => {
    const model = sequelize.define('products', {
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        price: {
            type: DataTypes.INTEGER, allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER
        },
        category: { type: DataTypes.STRING, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
    });

    return model;
};

module.exports = products;