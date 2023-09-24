module.exports = (sequelize, DataTypes) => {

    const Clients = sequelize.define('Clients', {
        name: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        birthdate:{
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING(90),
            allowNull: false,
        }
    });

    Clients.associate = (models) => {
        Clients.hasMany(models.Cases, {
            onDelete: "cascade",
        });
    };

    return Clients;
}