import { DataTypes, DATE } from "sequelize";
import db from '../db/connection';

const Usuario = db.define('Usuario', {
    IdEmpleado: {
        type: DataTypes.STRING,
        primaryKey: true, 
        autoIncrement: false
    },
    Nombre: { type: DataTypes.STRING },
    ApellidoP: { type: DataTypes.STRING },
    ApellidoM: { type: DataTypes.STRING },
    IdTarjeta: { type: DataTypes.STRING },
    Usuario: { type: DataTypes.STRING },
    CorreoNorson: { type: DataTypes.STRING },
    RFC: { type: DataTypes.STRING },
    CURP: { type: DataTypes.STRING },
    TipoPago: { type: DataTypes.STRING },
    GrupoProfesional: { type: DataTypes.STRING },
    SubGrupoProfesional: { type: DataTypes.STRING },
    Sociedad: { type: DataTypes.STRING },
    Division: { type: DataTypes.STRING },
    GrupoPersonal: { type: DataTypes.STRING },
    AreaPersonal: { type: DataTypes.STRING },
    ClaveOrganizacion: { type: DataTypes.STRING },
    SubDivision: { type: DataTypes.STRING },
    AreaNomina: { type: DataTypes.STRING },
    RelacionLaboral: { type: DataTypes.STRING },
    TipoPeriodo: { type: DataTypes.STRING },
    CentroCosto: { type: DataTypes.STRING },
    UO: { type: DataTypes.STRING },
    Puesto: { type: DataTypes.STRING },
    ClaveUO: { type: DataTypes.STRING },
    Posicion: { type: DataTypes.STRING },
    Funcion: { type: DataTypes.STRING },
    SociedadCO: { type: DataTypes.STRING },
    Lider: { type: DataTypes.STRING },
    IdMicroEmpresa: { type: DataTypes.STRING },
    MicroEmpresa: { type: DataTypes.STRING },
    IdUnidadNegocio: { type: DataTypes.STRING },
    UnidadNegocio: { type: DataTypes.STRING },
    IdMicroNegocio: { type: DataTypes.STRING },
    MicroNegocio: { type: DataTypes.STRING },
    Edificio: { type: DataTypes.STRING },
    NombreEdificio: { type: DataTypes.STRING },
    Titulo: { type: DataTypes.STRING },
    Genero: { type: DataTypes.STRING },
    FechaNacimiento: { type: DataTypes.STRING },
    Edad: { type: DataTypes.STRING },
    Pais: { type: DataTypes.STRING },
    ClavePais: { type: DataTypes.STRING },
    Estado: { type: DataTypes.STRING },
    ClaveEstado: { type: DataTypes.STRING },
    Nacionalidad: { type: DataTypes.STRING },
    IMSS: { type: DataTypes.STRING },
    RazonSocialIMSS: { type: DataTypes.STRING },
    ClaveEstadoCivil: { type: DataTypes.STRING },
    EstadoCivil: { type: DataTypes.STRING },
    ClaveDireccion: { type: DataTypes.STRING },
    Colonia: { type: DataTypes.STRING },
    Calle: { type: DataTypes.STRING },
    CiudadDireccion: { type: DataTypes.STRING },
    CiudadDireccion2: { type: DataTypes.STRING },
    PaisDireccion: { type: DataTypes.STRING },
    EstadoDireccion: { type: DataTypes.STRING },
    CodigoEdificio: { type: DataTypes.STRING },
    CodigoCiudad: { type: DataTypes.STRING },
    ReglaHorario: { type: DataTypes.STRING },
    Horario: { type: DataTypes.STRING },
    ConvenioColectivo: { type: DataTypes.STRING },
    AreaConvenio: { type: DataTypes.STRING },
    ClaveBanco: { type: DataTypes.STRING },
    CuentaBanco: { type: DataTypes.STRING },
    ClavePago: { type: DataTypes.STRING },
    InfonavitFonacot: { type: DataTypes.STRING },
    DistribucionInfonavit: { type: DataTypes.STRING },
    TipoDescuentoInfonavit: { type: DataTypes.STRING },
    FechaInicioInfonavit: { type: DataTypes.STRING },
    ImporteInfonavitFonacot: { type: DataTypes.STRING },
    PorcentajeDescuentoInfonavit: { type: DataTypes.STRING },
    DescuentoCuotaFijaInfonavit: { type: DataTypes.STRING },
    CantidadDescuentoInfonavit: { type: DataTypes.STRING },
    FechaFinInfonavit: { type: DataTypes.STRING },
    SalarioDiario: { type: DataTypes.STRING },
    SalarioFijoSeguridadSocial: { type: DataTypes.STRING },
    SalarioVariableSeguridadSocial: { type: DataTypes.STRING },
    SalarioBaseSeguridadSocial: { type: DataTypes.STRING },
    IndicadorSalarioIMSS: { type: DataTypes.STRING },
    FechaNotificacionModificacionSalarioIMSS: { type: DataTypes.STRING },
    FechaOriginalModificacionSalarioIMSS: { type: DataTypes.STRING },
    ClaveMedidaOrganizativa: { type: DataTypes.STRING },
    ClaveMotivoOrganizativa: { type: DataTypes.STRING },
    TextoMedidaOrganizativa: { type: DataTypes.STRING },
    TextoMotivoOrganizativa: { type: DataTypes.STRING },
    FechaMedidaOrganizativa: { type: DataTypes.STRING },
    GrupoSanguineo: { type: DataTypes.STRING },
    FactorRH: { type: DataTypes.STRING },
    Alergias: { type: DataTypes.STRING },
    FechaIngreso: { type: DataTypes.STRING },
    FechaBaja: { type: DataTypes.STRING },
    Activo: { type: DataTypes.STRING },
    IdControlAcceso: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    EmailVerificado: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    Registro    : { type: DataTypes.STRING },
},
{
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    tableName: 'SYS_Usuarios',
    timestamps: false
});

export default Usuario;