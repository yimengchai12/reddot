module.exports = (sequelize, DataTypes) => {

    const Clients = sequelize.define('Clients', {
        name: {
            type: DataTypes.STRING(90),
            allowNull: false,
        },
        birthdate:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {isDate: true}
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {isInt: true}
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
            onDelete: "CASCADE"
        });
    };

    return Clients;
}