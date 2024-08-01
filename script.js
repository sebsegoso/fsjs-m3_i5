console.clear();
const PERSONA_DEFAULT = {
  nombre: "",
  apellidos: "",
  tieneCargas: false,
  cantidadCargas: 0,
  sueldoBase: 0,
  sueldoBasePromedioSemestreAnterior: 0,
};

const getUpperCaseFullName = (nombre = "", apellidos = "") => {
  nombre = nombre.toUpperCase();
  apellidos = apellidos.toUpperCase();
  return `${nombre} ${apellidos}`;
};

const totalAsignacion = (asignacionPorCarga = 0, cantidadCargas = 0) => {
  return asignacionPorCarga * cantidadCargas;
};

const calcularAsignacionFamiliar = (persona = PERSONA_DEFAULT) => {
  const {
    tieneCargas,
    cantidadCargas,
    sueldoBasePromedioSemestreAnterior,
    nombre,
    apellidos,
    sueldoBase,
  } = persona;
  console.log("<---------------- 🤑  ---------------->");

  if (!tieneCargas) {
    console.log(
      `Al Trabajador ${getUpperCaseFullName(
        nombre,
        apellidos
      )} no le corresponde pago de asignación familiar.`,
      persona
    );
    return persona;
  }

  let monto = 0;
  let tramo = "D";

  if (sueldoBasePromedioSemestreAnterior <= 429899) {
    monto = 16828;
    tramo = "A";
  } else if (
    429899 < sueldoBasePromedioSemestreAnterior &&
    sueldoBasePromedioSemestreAnterior <= 627913
  ) {
    monto = 10327;
    tramo = "B";
  } else if (
    627913 < sueldoBasePromedioSemestreAnterior &&
    sueldoBasePromedioSemestreAnterior <= 979330
  ) {
    monto = 3264;
    tramo = "C";
  }

  const total = totalAsignacion(monto, cantidadCargas);

  const personaActualizada = {
    ...persona,
    tramo,
    montoAsignacion: monto,
    totalAsignacion: total,
    sueldoMasAsignacion: sueldoBase + total,
  };

  console.log(
    `Al Trabajador ${getUpperCaseFullName(
      nombre,
      apellidos
    )} le corresponde asignación familiar de $${monto} por su renta del semestre anterior que es: $${sueldoBasePromedioSemestreAnterior} (Tramo ${tramo}). Con las ${cantidadCargas} carga(s) el monto a recibir es de $${total}`,
    personaActualizada
  );
  return personaActualizada;
};

// ejemplos

const persona1 = {
  nombre: "Sebastán",
  apellidos: "Segura Osorio",
  tieneCargas: true,
  cantidadCargas: 2,
  sueldoBase: 624103,
  sueldoBasePromedioSemestreAnterior: 419000,
};
calcularAsignacionFamiliar(persona1);

const persona2 = {
  nombre: "Pepito",
  apellidos: "Pérez",
  tieneCargas: false,
  cantidadCargas: 0,
  sueldoBase: 950000,
  sueldoBasePromedioSemestreAnterior: 960000,
};
calcularAsignacionFamiliar(persona2);

const persona3 = {
  nombre: "María",
  apellidos: "Mojo jojo",
  tieneCargas: true,
  cantidadCargas: 3,
  sueldoBase: 780000,
  sueldoBasePromedioSemestreAnterior: 620000,
};
calcularAsignacionFamiliar(persona3);
