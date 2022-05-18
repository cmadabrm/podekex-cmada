
# Login Norson API

Desarrollo de Api login Norson.

## Url Base

Utilizar esta url base para la utilización de esta API `http://norson17:8081/`

## Registro Usuario POST - /api/auth/register

Referencia: `/api/auth/register`, Metodo `POST` , para la `creación de un nuevo usuario` se debe utilizar la siguiente estructura.
```json
{
    "idempleado": "542058",
    "email": "test@norson.net",
    "password": "pass",
    "password_confirmation": "pass",
    "rfc": "MARC931208H55",
    "curp": "MARC931208HSRDYR09"
}
```

### Response `Success` - /api/auth/register
```json
{
    "message": "Usuario registrado exitosamente",
    "user": {
        "IdEmpleado": 542058,
        "Nombre": "CARLOS NAHUM",
        "ApellidoP": "MADA",
        "ApellidoM": "REYES",
        "IdTarjeta": "010685",
        "Usuario": "",
        "CorreoNorson": "CARLOSMADA53@GMAIL.COM",
        "RFC": "MARC931208H55",
        "CURP": "MARC931208HSRDYR09",
        "TipoPago": "quincenal",
        "GrupoProfesional": "GENERAL",
        "SubGrupoProfesional": "",
        "Sociedad": 3000,
        "Division": "HE30",
        "GrupoPersonal": "A",
        "AreaPersonal": "AA",
        "ClaveOrganizacion": "AF01",
        "SubDivision": "AFO1",
        "AreaNomina": "1Q",
        "RelacionLaboral": "DE",
        "TipoPeriodo": "02",
        "CentroCosto": "3020305001",
        "UO": "SOPORTE TECNICO",
        "Puesto": "SOPORTE TECNICO",
        "ClaveUO": 10050655,
        "Posicion": 20013842,
        "Funcion": "30000002",
        "SociedadCO": "GNOR",
        "Lider": 541555,
        "IdMicroEmpresa": "",
        "MicroEmpresa": "",
        "IdUnidadNegocio": "",
        "UnidadNegocio": "",
        "IdMicroNegocio": "",
        "MicroNegocio": "",
        "Edificio": "TI",
        "NombreEdificio": "TECNOLOGIAS DE LA INFORMACION",
        "Titulo": "Ing Ind Sis",
        "Genero": "masculino",
        "FechaNacimiento": "1993-12-07",
        "Edad": 28,
        "Pais": "HERMOSILLO",
        "ClavePais": "MX",
        "Estado": "Sonora",
        "ClaveEstado": "SON",
        "Nacionalidad": "mexicana",
        "IMSS": "57129302121",
        "RazonSocialIMSS": "E6452375109",
        "ClaveEstadoCivil": "0",
        "EstadoCivil": "sol.",
        "ClaveDireccion": 1,
        "Colonia": "VILLAS DEL SUR",
        "Calle": "CDA. VILLA AZUETA",
        "CiudadDireccion": "HERMOSILLO",
        "CiudadDireccion2": "HERMOSILLO",
        "PaisDireccion": "MX",
        "EstadoDireccion": "SON",
        "CodigoEdificio": "000100",
        "CodigoCiudad": "0030",
        "ReglaHorario": "PL81",
        "Horario": "L-V 08:00-18:00 S D",
        "ConvenioColectivo": "01",
        "AreaConvenio": "AA",
        "ClaveBanco": "021",
        "CuentaBanco": "6508952012",
        "ClavePago": "T",
        "InfonavitFonacot": "",
        "DistribucionInfonavit": "",
        "TipoDescuentoInfonavit": "",
        "FechaInicioInfonavit": null,
        "ImporteInfonavitFonacot": 0,
        "PorcentajeDescuentoInfonavit": 0,
        "DescuentoCuotaFijaInfonavit": 0,
        "CantidadDescuentoInfonavit": 0,
        "FechaFinInfonavit": null,
        "SalarioDiario": 0,
        "SalarioFijoSeguridadSocial": 0,
        "SalarioVariableSeguridadSocial": 0,
        "SalarioBaseSeguridadSocial": 0,
        "IndicadorSalarioIMSS": "",
        "FechaNotificacionModificacionSalarioIMSS": null,
        "FechaOriginalModificacionSalarioIMSS": null,
        "ClaveMedidaOrganizativa": "01",
        "ClaveMotivoOrganizativa": "Z1",
        "TextoMedidaOrganizativa": "Contratación",
        "TextoMotivoOrganizativa": "Alta",
        "FechaMedidaOrganizativa": null,
        "GrupoSanguineo": "",
        "FactorRH": "",
        "Alergias": "",
        "FechaIngreso": "2020-03-02",
        "FechaBaja": null,
        "Activo": "0",
        "IdControlAcceso": 0,
        "email": "cmada@norson.net",
        "EmailVerificado": null,
        "password": "",
        "Registro": "1"
    }
}
```

### Response `Error`
```json
{
    "errors": [
        {
            "msg": "Numero de empleado obligatorio",
            "param": "idempleado",
            "location": "body"
        },
        {
            "msg": "email es obligatorio",
            "param": "email",
            "location": "body"
        }
    ]
}
```

## Inicio de Sesión `POST` - /api/auth/login

Referencia: `/api/auth/login`, Metodo `POST` , utilizar la siguiente estructura, se puede usar email o idempleado para el inicio de sesión:
```json
{
    "email": "cmada@norson.net",
    "idempleado": "542058",
    "password": "password123"
}
```

### Response `Success`
```json
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVtcGxlYWRvIjo1NDIwNTgsImlhdCI6WTY0MzMyNjU2MCwiZXhwIjoxNjQzMzQwOTYwfQ.LYyaqfaFFqYUgty0DSL_Lwi4yC9ssPH3dpFXMfAqX3X",
    "token_type": "bearer",
    "user": {
        "IdEmpleado": 542058,
        "Nombre": "CARLOS NAHUM",
        "ApellidoP": "MADA",
        "ApellidoM": "REYES",
        "IdTarjeta": "010685",
        "Usuario": "",
        "CorreoNorson": "CARLOSMADA53@GMAIL.COM",
        "RFC": "MARC931208H55",
        "CURP": "MARC931208HSRDYR09",
        "TipoPago": "quincenal",
        "GrupoProfesional": "GENERAL",
        "SubGrupoProfesional": "",
        "Sociedad": 3000,
        "Division": "HE30",
        "GrupoPersonal": "A",
        "AreaPersonal": "AA",
        "ClaveOrganizacion": "AF01",
        "SubDivision": "AFO1",
        "AreaNomina": "1Q",
        "RelacionLaboral": "DE",
        "TipoPeriodo": "02",
        "CentroCosto": "3020305001",
        "UO": "SOPORTE TECNICO",
        "Puesto": "SOPORTE TECNICO",
        "ClaveUO": 10050655,
        "Posicion": 20013842,
        "Funcion": "30000002",
        "SociedadCO": "GNOR",
        "Lider": 541555,
        "IdMicroEmpresa": "",
        "MicroEmpresa": "",
        "IdUnidadNegocio": "",
        "UnidadNegocio": "",
        "IdMicroNegocio": "",
        "MicroNegocio": "",
        "Edificio": "TI",
        "NombreEdificio": "TECNOLOGIAS DE LA INFORMACION",
        "Titulo": "Ing Ind Sis",
        "Genero": "masculino",
        "FechaNacimiento": "1993-12-07",
        "Edad": 28,
        "Pais": "HERMOSILLO",
        "ClavePais": "MX",
        "Estado": "Sonora",
        "ClaveEstado": "SON",
        "Nacionalidad": "mexicana",
        "IMSS": "57129302121",
        "RazonSocialIMSS": "E6452375109",
        "ClaveEstadoCivil": "0",
        "EstadoCivil": "sol.",
        "ClaveDireccion": 1,
        "Colonia": "VILLAS DEL SUR",
        "Calle": "CDA. VILLA AZUETA",
        "CiudadDireccion": "HERMOSILLO",
        "CiudadDireccion2": "HERMOSILLO",
        "PaisDireccion": "MX",
        "EstadoDireccion": "SON",
        "CodigoEdificio": "000100",
        "CodigoCiudad": "0030",
        "ReglaHorario": "PL81",
        "Horario": "L-V 08:00-18:00 S D",
        "ConvenioColectivo": "01",
        "AreaConvenio": "AA",
        "ClaveBanco": "021",
        "CuentaBanco": "6508952012",
        "ClavePago": "T",
        "InfonavitFonacot": "",
        "DistribucionInfonavit": "",
        "TipoDescuentoInfonavit": "",
        "FechaInicioInfonavit": null,
        "ImporteInfonavitFonacot": 0,
        "PorcentajeDescuentoInfonavit": 0,
        "DescuentoCuotaFijaInfonavit": 0,
        "CantidadDescuentoInfonavit": 0,
        "FechaFinInfonavit": null,
        "SalarioDiario": 0,
        "SalarioFijoSeguridadSocial": 0,
        "SalarioVariableSeguridadSocial": 0,
        "SalarioBaseSeguridadSocial": 0,
        "IndicadorSalarioIMSS": "",
        "FechaNotificacionModificacionSalarioIMSS": null,
        "FechaOriginalModificacionSalarioIMSS": null,
        "ClaveMedidaOrganizativa": "01",
        "ClaveMotivoOrganizativa": "Z1",
        "TextoMedidaOrganizativa": "Contratación",
        "TextoMotivoOrganizativa": "Alta",
        "FechaMedidaOrganizativa": null,
        "GrupoSanguineo": "",
        "FactorRH": "",
        "Alergias": "",
        "FechaIngreso": "2020-03-02",
        "FechaBaja": null,
        "Activo": "0",
        "IdControlAcceso": 0,
        "email": "cmada@norson.net",
        "EmailVerificado": null,
        "password": "",
        "Registro": "1"
    }
}
```

### Response `Error`
```json
{
    "error": 400,
    "message": "Usuario / Password no son correcto -- password"
}
```


## Obtener datos de usuario autenticado `GET` - /api/auth/user-profile

Referencia: `/api/auth/user-profile`, Metodo `GET` , utilizar la siguiente estructura:

Enviar en el encabezado `Authorization` el valor del token de sesión

`Autorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNDQ2MjYxMywiZXhwIjoxNjE0NDY2MjEzLCJuYmYiOjE2MTQ0NjI2MTMsImp0aSI6IlB4MzBYQVE2eVRUWDlFc3kiLCJzdWIiOjM3MCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.8EiTwGrfd4_OEKyAolMdEKq_iI45bcuYtQPvJjn6I8E`

### Response `Success`
```json
{
    "IdEmpleado": 542058,
    "Nombre": "CARLOS NAHUM",
    "ApellidoP": "MADA",
    "ApellidoM": "REYES",
    "IdTarjeta": "010685",
    "Usuario": "",
    "CorreoNorson": "CARLOSMADA53@GMAIL.COM",
    "RFC": "MARC931208H55",
    "CURP": "MARC931208HSRDYR09",
    "TipoPago": "quincenal",
    "GrupoProfesional": "GENERAL",
    "SubGrupoProfesional": "",
    "Sociedad": 3000,
    "Division": "HE30",
    "GrupoPersonal": "A",
    "AreaPersonal": "AA",
    "ClaveOrganizacion": "AF01",
    "SubDivision": "AFO1",
    "AreaNomina": "1Q",
    "RelacionLaboral": "DE",
    "TipoPeriodo": "02",
    "CentroCosto": "3020305001",
    "UO": "SOPORTE TECNICO",
    "Puesto": "SOPORTE TECNICO",
    "ClaveUO": 10050655,
    "Posicion": 20013842,
    "Funcion": "30000002",
    "SociedadCO": "GNOR",
    "Lider": 541555,
    "IdMicroEmpresa": "",
    "MicroEmpresa": "",
    "IdUnidadNegocio": "",
    "UnidadNegocio": "",
    "IdMicroNegocio": "",
    "MicroNegocio": "",
    "Edificio": "TI",
    "NombreEdificio": "TECNOLOGIAS DE LA INFORMACION",
    "Titulo": "Ing Ind Sis",
    "Genero": "masculino",
    "FechaNacimiento": "1993-12-07",
    "Edad": 28,
    "Pais": "HERMOSILLO",
    "ClavePais": "MX",
    "Estado": "Sonora",
    "ClaveEstado": "SON",
    "Nacionalidad": "mexicana",
    "IMSS": "57129302121",
    "RazonSocialIMSS": "E6452375109",
    "ClaveEstadoCivil": "0",
    "EstadoCivil": "sol.",
    "ClaveDireccion": 1,
    "Colonia": "VILLAS DEL SUR",
    "Calle": "CDA. VILLA AZUETA",
    "CiudadDireccion": "HERMOSILLO",
    "CiudadDireccion2": "HERMOSILLO",
    "PaisDireccion": "MX",
    "EstadoDireccion": "SON",
    "CodigoEdificio": "000100",
    "CodigoCiudad": "0030",
    "ReglaHorario": "PL81",
    "Horario": "L-V 08:00-18:00 S D",
    "ConvenioColectivo": "01",
    "AreaConvenio": "AA",
    "ClaveBanco": "021",
    "CuentaBanco": "6508952012",
    "ClavePago": "T",
    "InfonavitFonacot": "",
    "DistribucionInfonavit": "",
    "TipoDescuentoInfonavit": "",
    "FechaInicioInfonavit": null,
    "ImporteInfonavitFonacot": 0,
    "PorcentajeDescuentoInfonavit": 0,
    "DescuentoCuotaFijaInfonavit": 0,
    "CantidadDescuentoInfonavit": 0,
    "FechaFinInfonavit": null,
    "SalarioDiario": 0,
    "SalarioFijoSeguridadSocial": 0,
    "SalarioVariableSeguridadSocial": 0,
    "SalarioBaseSeguridadSocial": 0,
    "IndicadorSalarioIMSS": "",
    "FechaNotificacionModificacionSalarioIMSS": null,
    "FechaOriginalModificacionSalarioIMSS": null,
    "ClaveMedidaOrganizativa": "01",
    "ClaveMotivoOrganizativa": "Z1",
    "TextoMedidaOrganizativa": "Contratación",
    "TextoMotivoOrganizativa": "Alta",
    "FechaMedidaOrganizativa": null,
    "GrupoSanguineo": "",
    "FactorRH": "",
    "Alergias": "",
    "FechaIngreso": "2020-03-02",
    "FechaBaja": null,
    "Activo": "0",
    "IdControlAcceso": 0,
    "email": "cmada@norson.net",
    "EmailVerificado": null,
    "password": "",
    "Registro": "1"
}
```

### Response `Error - 401`
```json
{
    "message": "Token no valido"
}
```


## Cierre de Sesión `POST` - /api/auth/logout

Referencia: `/api/auth/logout`, Metodo `POST` , utilizar la siguiente estructura:

Enviar en el encabezado `Authorization` el valor del token de sesión

`Autorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODA4MVwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYxNDQ2MjYxMywiZXhwIjoxNjE0NDY2MjEzLCJuYmYiOjE2MTQ0NjI2MTMsImp0aSI6IlB4MzBYQVE2eVRUWDlFc3kiLCJzdWIiOjM3MCwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.8EiTwGrfd4_OEKyAolMdEKq_iI45bcuYtQPvJjn6I8E`

### Response `Success`
```json
{
    "message": "El usuario ha cerrado sesión correctamente"
}
```

### Response `Error - 401`
```json
{
    "message": "Token no valido"
}
```


## Solicitud de cambio de contraseña `POST` - /api/auth/reset-password-request

Referencia: `/api/auth/reset-password-request`, Metodo `POST` , utilizar la siguiente estructura:

```json
{
    "email": "cmada@norson.net",
    "url": "http://norson16:8000/password/reset/"
}
```

`Donde si el email esta registrado, mandará un correo con el link de restauración y la url es a donde se dirigira al cambiar su contraseña`

### Response `Success`
```json
{
    "message": "Favor de revisar su bandeja, le hemos enviado un link de restauración de contraseña a su correo: cmada@norson.net"
}
```

### Response `Error`
```json
{
    "message": "La direccion email cmada@norson.nett no se ha registrado."
}
```


## Cambio de Contraseña `POST` - /api/auth/change-password

Referencia: `/api/auth/reset-password-request`, Metodo `POST` , utilizar la siguiente estructura:

```json
{
    "token": "wZx91UWqDBBKmWyeMDb5qDHNPgY5JJGe5ZRgcaoySgQIqSE8uysqJn31ZmfmN9f7cLqPjLK9OE2AeJrL",
    "email": "cmada@norson.net",
    "password": "passwordnuevo123",
    "password_confirmation": "passwordnuevo123"
}
```

`Donde si el email esta registrado, mandará un correo con el link de restauración y la url es a donde se dirigira al cambiar su contraseña`

### Response `Success`
```json
{
    "message": "Contraseña actualizada exitosamente",
    "usuario": {
        "IdEmpleado": 542058,
        "Nombre": "CARLOS NAHUM",
        "ApellidoP": "MADA",
        "ApellidoM": "REYES",
        "IdTarjeta": "010685",
        "Usuario": "",
        "CorreoNorson": "CARLOSMADA53@GMAIL.COM",
        "RFC": "MARC931208H55",
        "CURP": "MARC931208HSRDYR09",
        "TipoPago": "quincenal",
        "GrupoProfesional": "GENERAL",
        "SubGrupoProfesional": "",
        "Sociedad": 3000,
        "Division": "HE30",
        "GrupoPersonal": "A",
        "AreaPersonal": "AA",
        "ClaveOrganizacion": "AF01",
        "SubDivision": "AFO1",
        "AreaNomina": "1Q",
        "RelacionLaboral": "DE",
        "TipoPeriodo": "02",
        "CentroCosto": "3020305001",
        "UO": "SOPORTE TECNICO",
        "Puesto": "SOPORTE TECNICO",
        "ClaveUO": 10050655,
        "Posicion": 20013842,
        "Funcion": "30000002",
        "SociedadCO": "GNOR",
        "Lider": 541555,
        "IdMicroEmpresa": "",
        "MicroEmpresa": "",
        "IdUnidadNegocio": "",
        "UnidadNegocio": "",
        "IdMicroNegocio": "",
        "MicroNegocio": "",
        "Edificio": "TI",
        "NombreEdificio": "TECNOLOGIAS DE LA INFORMACION",
        "Titulo": "Ing Ind Sis",
        "Genero": "masculino",
        "FechaNacimiento": "1993-12-07",
        "Edad": 28,
        "Pais": "HERMOSILLO",
        "ClavePais": "MX",
        "Estado": "Sonora",
        "ClaveEstado": "SON",
        "Nacionalidad": "mexicana",
        "IMSS": "57129302121",
        "RazonSocialIMSS": "E6452375109",
        "ClaveEstadoCivil": "0",
        "EstadoCivil": "sol.",
        "ClaveDireccion": 1,
        "Colonia": "VILLAS DEL SUR",
        "Calle": "CDA. VILLA AZUETA",
        "CiudadDireccion": "HERMOSILLO",
        "CiudadDireccion2": "HERMOSILLO",
        "PaisDireccion": "MX",
        "EstadoDireccion": "SON",
        "CodigoEdificio": "000100",
        "CodigoCiudad": "0030",
        "ReglaHorario": "PL81",
        "Horario": "L-V 08:00-18:00 S D",
        "ConvenioColectivo": "01",
        "AreaConvenio": "AA",
        "ClaveBanco": "021",
        "CuentaBanco": "6508952012",
        "ClavePago": "T",
        "InfonavitFonacot": "",
        "DistribucionInfonavit": "",
        "TipoDescuentoInfonavit": "",
        "FechaInicioInfonavit": null,
        "ImporteInfonavitFonacot": 0,
        "PorcentajeDescuentoInfonavit": 0,
        "DescuentoCuotaFijaInfonavit": 0,
        "CantidadDescuentoInfonavit": 0,
        "FechaFinInfonavit": null,
        "SalarioDiario": 0,
        "SalarioFijoSeguridadSocial": 0,
        "SalarioVariableSeguridadSocial": 0,
        "SalarioBaseSeguridadSocial": 0,
        "IndicadorSalarioIMSS": "",
        "FechaNotificacionModificacionSalarioIMSS": null,
        "FechaOriginalModificacionSalarioIMSS": null,
        "ClaveMedidaOrganizativa": "01",
        "ClaveMotivoOrganizativa": "Z1",
        "TextoMedidaOrganizativa": "Contratación",
        "TextoMotivoOrganizativa": "Alta",
        "FechaMedidaOrganizativa": null,
        "GrupoSanguineo": "",
        "FactorRH": "",
        "Alergias": "",
        "FechaIngreso": "2020-03-02",
        "FechaBaja": null,
        "Activo": "0",
        "IdControlAcceso": 0,
        "email": "cmada@norson.net",
        "EmailVerificado": null,
        "password": "",
        "Registro": "1"
    }
}
```

### Response `Error`
```json
{
    "errors": [
        {
            "msg": "La contraseña es obligatoria",
            "param": "password",
            "location": "body"
        },
        {
            "msg": "Campo password_confirmation es obligatorio",
            "param": "password_confirmation",
            "location": "body"
        }
    ]
}

{
    "error": "Tu correo o token es incorrecto"
}
```

## Obtener Listado de todos los usuarios GET - /api/auth/allUsers

Referencia: `/api/auth/allUsers`, Metodo `GET` , para obtener un `Listado de Usuarios`

### Response `Success`
```json
{
    "message": "get Usuarios",
    "usuarios": []
```


## Actualizar Datos de Usuario `PUT` - /api/auth/user-update

Referencia: `/api/auth/user-update`, Metodo `PUT` , Para modificar se mandan los campos que se quieren actualizar, puede ser solo 1 campo o todos los necesarios.

Es necesario enviar en el encabezado `Authorization` el valor del token de sesión

```json
{
    "email": "correo_nuevo@norson.net",
    "password": "cmada123",
    "rfc": "MARC931208H55",
    "curp": "MARC931208HSRDYR09"
}
```

### Response `Success`

```json
{
    "IdEmpleado": 542058,
    "Nombre": "CARLOS NAHUM",
    "ApellidoP": "MADA",
    "ApellidoM": "REYES",
    "IdTarjeta": "010685",
    "Usuario": "",
    "CorreoNorson": "CARLOSMADA53@GMAIL.COM",
    "RFC": "MARC931208H55",
    "CURP": "MARC931208HSRDYR09",
    "TipoPago": "quincenal",
    "GrupoProfesional": "GENERAL",
    "SubGrupoProfesional": "",
    "Sociedad": 3000,
    "Division": "HE30",
    "GrupoPersonal": "A",
    "AreaPersonal": "AA",
    "ClaveOrganizacion": "AF01",
    "SubDivision": "AFO1",
    "AreaNomina": "1Q",
    "RelacionLaboral": "DE",
    "TipoPeriodo": "02",
    "CentroCosto": "3020305001",
    "UO": "SOPORTE TECNICO",
    "Puesto": "SOPORTE TECNICO",
    "ClaveUO": 10050655,
    "Posicion": 20013842,
    "Funcion": "30000002",
    "SociedadCO": "GNOR",
    "Lider": 541555,
    "IdMicroEmpresa": "",
    "MicroEmpresa": "",
    "IdUnidadNegocio": "",
    "UnidadNegocio": "",
    "IdMicroNegocio": "",
    "MicroNegocio": "",
    "Edificio": "TI",
    "NombreEdificio": "TECNOLOGIAS DE LA INFORMACION",
    "Titulo": "Ing Ind Sis",
    "Genero": "masculino",
    "FechaNacimiento": "1993-12-07",
    "Edad": 28,
    "Pais": "HERMOSILLO",
    "ClavePais": "MX",
    "Estado": "Sonora",
    "ClaveEstado": "SON",
    "Nacionalidad": "mexicana",
    "IMSS": "57129302121",
    "RazonSocialIMSS": "E6452375109",
    "ClaveEstadoCivil": "0",
    "EstadoCivil": "sol.",
    "ClaveDireccion": 1,
    "Colonia": "VILLAS DEL SUR",
    "Calle": "CDA. VILLA AZUETA",
    "CiudadDireccion": "HERMOSILLO",
    "CiudadDireccion2": "HERMOSILLO",
    "PaisDireccion": "MX",
    "EstadoDireccion": "SON",
    "CodigoEdificio": "000100",
    "CodigoCiudad": "0030",
    "ReglaHorario": "PL81",
    "Horario": "L-V 08:00-18:00 S D",
    "ConvenioColectivo": "01",
    "AreaConvenio": "AA",
    "ClaveBanco": "021",
    "CuentaBanco": "6508952012",
    "ClavePago": "T",
    "InfonavitFonacot": "",
    "DistribucionInfonavit": "",
    "TipoDescuentoInfonavit": "",
    "FechaInicioInfonavit": null,
    "ImporteInfonavitFonacot": 0,
    "PorcentajeDescuentoInfonavit": 0,
    "DescuentoCuotaFijaInfonavit": 0,
    "CantidadDescuentoInfonavit": 0,
    "FechaFinInfonavit": null,
    "SalarioDiario": 0,
    "SalarioFijoSeguridadSocial": 0,
    "SalarioVariableSeguridadSocial": 0,
    "SalarioBaseSeguridadSocial": 0,
    "IndicadorSalarioIMSS": "",
    "FechaNotificacionModificacionSalarioIMSS": null,
    "FechaOriginalModificacionSalarioIMSS": null,
    "ClaveMedidaOrganizativa": "01",
    "ClaveMotivoOrganizativa": "Z1",
    "TextoMedidaOrganizativa": "Contratación",
    "TextoMotivoOrganizativa": "Alta",
    "FechaMedidaOrganizativa": null,
    "GrupoSanguineo": "",
    "FactorRH": "",
    "Alergias": "",
    "FechaIngreso": "2020-03-02",
    "FechaBaja": null,
    "Activo": "0",
    "IdControlAcceso": 0,
    "email": "cmada@norson.net",
    "EmailVerificado": null,
    "password": "",
    "Registro": "1"
}
```