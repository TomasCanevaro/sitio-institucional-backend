module.exports = mongoose => {
    const User = mongoose.model(
      "user",
      mongoose.Schema(
        {
          nombre: String,
          dni: String,
          mail: String,
          telefono: String,
          contraseña: String,
        },
        { timestamps: true }
      )
    );
  
    return User;
};