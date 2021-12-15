module.exports = mongoose => {
    const Vacuna = mongoose.model(
      "vacuna",
      mongoose.Schema(
        {
          vacuna: String,
          fecha: String,
          lugar: String,
        },
        { timestamps: true }
      )
    );
  
    return Vacuna;
};