module.exports = (sequelize, DataTypes) => {

    const Cases = sequelize.define('Cases', {
        status: {
            type: DataTypes.STRING(90),
            allowNull: false,
            defaultValue: "Pending"
        },
        message:{
            type: DataTypes.STRING(255),
            allowNull: false,
        },
    });

    return Cases;
}