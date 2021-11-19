module.exports = mongoose => {
    const Niño = mongoose.model(
      "niño",
      mongoose.Schema(
        {
          nombre: String,
          fechaNac: String,
          grupoSang: String,
          alergias: String,
          enfCron: String,
        },
        { timestamps: true }
      )
    );
  
    return Niño;
};