const PERSONA_DEFAULT = {
  nombre: "",
  apellidos: "",
  tieneCargas: false,
  cantidadCargas: 0,
  sueldoBase: 0,
  sueldoBasePromedioSemestreAnterior: 0,
};

const getUpperCaseFullName = (NOMBRE = "", APELLIDOS = "") => {
  NOMBRE = NOMBRE.toUpperCase();
  APELLIDOS = APELLIDOS.toUpperCase();
  return `${NOMBRE} ${APELLIDOS}`;
};

const calcularAsignacion = (
  sueldoBase = 0,
  sueldoBasePromedioSemestreAnterior = 0,
  tieneCargas = false
) => {
  if (!tieneCargas) return 0;

  if (sueldoBasePromedioSemestreAnterior <= 429899) {
    return 16828;
  } else if (
    429899 < sueldoBasePromedioSemestreAnterior &&
    sueldoBasePromedioSemestreAnterior <= 627913
  ) {
    return 10327;
  } else if (
    627913 < sueldoBasePromedioSemestreAnterior &&
    sueldoBasePromedioSemestreAnterior <= 979330
  ) {
    return 3264;
  } else return 0;
};

const totalAsignacion = (asignacionPorCarga = 0, cantidadCargas = 0) => {
  return asignacionPorCarga * cargas;
};

const program = (persona = PERSONA_DEFAULT) => {
  const {
    nombre,
    apellidos,
    tieneCargas,
    cantidadCargas,
    sueldoBase,
    sueldoBasePromedioSemestreAnterior,
  } = persona;

  const nombreCompleto = getUpperCaseFullName(nombre, apellidos);
  console.log(`nombreCompleto:`, nombreCompleto);

  const asignacionPorCarga = calcularAsignacion(
    sueldoBase,
    sueldoBasePromedioSemestreAnterior,
    tieneCargas
  );
  console.log(`asignacionPorCarga:`, asignacionPorCarga);

  const asignacionTotal = totalAsignacion(asignacionPorCarga, cantidadCargas);
  console.log(`asignacionTotal:`, asignacionTotal);

  
};

const persona1 = {
  nombre: "Sebastán",
  apellidos: "Segura Osorio",
  tieneCargas: true,
  cantidadCargas: 0,
  sueldoBase: 500000,
  sueldoBasePromedioSemestreAnterior: 449650,
};
program(persona1);
