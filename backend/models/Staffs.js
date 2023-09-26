module.exports = (sequelize, DataTypes) => {

    const Staffs = sequelize.define('Staffs', {
        name: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    });

    Staffs.associate = (models) => {
        Staffs.hasMany(models.Cases, {
            onDelete: "SET NULL",
        });
    };

    return Staffs;
}