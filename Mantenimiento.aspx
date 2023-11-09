<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Mantenimiento.aspx.cs" Inherits="felix_website.Mantenimiento" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Mantenimiento</title>
     <link href="Styles/normalize.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/nav.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/main.css" rel="stylesheet" type="text/css"/>
     <link href="Styles/mantenimiento.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
   <h1>Mantenimiento Datos Estudiantes</h1>

    <table class="table">
       <thead>
          <tr>
            <th>CÓDIGO</th>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>GRADO</th>
            <th>CURSO</th>
            <th>MÓDULO</th>
            <th>PROVINCIA</th>
            <th>SEXO</th>
            <th>FECHA/NACIMIENTO</th>
            <th>DIRECCIÓN</th>
            <th>TANDA</th>
            <th>TALLER</th>
            <th colspan="2">ACCIONES</th>
           </tr>
       </thead>

        <tbody></tbody>
        <tfoot>
            <tr>
                <td colspan="14">
                    <button class="table__btn-open-add-form">
                        AGREGAR NUEVO ESTUDIANTE
                    </button>
                </td>
            </tr>
        </tfoot>
    </table>

    <form class="form">
        <fieldset class="form__input-container d-flex-center d-flex-column">
            <legend class="form__caption">
                AGREGAR ESTUDIANTE
            </legend>
            <label class="form__input-caption d-flex-center d-flex-column">
                NOMBRE
                <input type="text" placeholder="Nombre..." name="nombre" maxlength="25" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                APELLIDO
                <input type="text" placeholder="Apellido..." name="apellido"  maxlength="25" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                GRADO
                <input type="text" placeholder="Grado..." name="grado"  maxlength="25" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                CURSO
                <input type="text" placeholder="Curso..." name="curso" maxlength="35" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                MÓDULO
                <input type="text" placeholder="Módulo..." name="modulo"  maxlength="35" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                PROVINCIA
                 <select class="form__dropdown-list provincia" name="provincia" required>
                      <option value="N/A" selected>------------------</option>
                  </select>
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                SEXO
                <select class="form__dropdown-list sexo" name="sexo" required>
                      <option value="N/A" selected>------------------</option>
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                </select>
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                FECHA/NACIMIENTO
                <input type="text" placeholder="Fecha/Nacimiento..." name="fecha/nacimiento"  maxlength="10" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                DIRECCIÓN
                <input type="text" placeholder="Dirección..." name="direccion"  maxlength="45" required />
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                TANDA
                <select class="form__dropdown-list tanda" name="tanda" required>
                      <option value="N/A" selected>------------------</option>
                      <option value="Matutino">Matutino</option>
                      <option value="Vespertino">Vespertino</option>
                      <option value="Nocturno">Nocturno</option>
                </select>
            </label>

            <label class="form__input-caption d-flex-center d-flex-column">
                TALLER
                <input type="text" placeholder="Taller..." name="taller"  maxlength="35" required />
            </label>

            <button type="submit" class="form__btn" name="btn-add-edit" data-action="add" data-codigo="0">
                AGREGAR
            </button>

            <button class="form__btn close">
                CANCELAR
            </button>
        </fieldset>
    </form>

    <a class="link" href="Otros.aspx" target="_self">Regresar</a>

    <script src="js/crud.js"></script>

</body>
</html>
