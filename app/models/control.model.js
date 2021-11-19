module.exports = mongoose => {
    const Control = mongoose.model(
      "control",
      mongoose.Schema(
        {
          niño: String,
          fecha: String,
          peso: String,
          altura: String,
          diametroCabeza: String,
          observaciones: String,
          medicamentos: String,
          estudios: String,
          resultados: String,
        },
        { timestamps: true }
      )
    );
  
    return Control;
};