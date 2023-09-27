module.exports = (sequelize, DataTypes) => {

    const Cases = sequelize.define('Cases', {
        status: {
            type: DataTypes.ENUM('In Progress', 'Completed'),
            allowNull: false,
            defaultValue: "In Progress",
            validate: {isIn : [['In Progress', 'Completed']]}

        },
        message:{
            type: DataTypes.STRING(250),
            allowNull: false,
            validate: {notEmpty: true}
        },
    });

    return Cases;
}