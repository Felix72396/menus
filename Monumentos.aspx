<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Monumentos.aspx.cs" Inherits="felix_website.Monumentos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Monumentos De Municipios De Provincias Dominicanas</title>
     <link href="Styles/normalize.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/nav.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/main.css" rel="stylesheet" type="text/css"/>
     <link href="Styles/banderas_monumentos.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/monumentos.css" rel="stylesheet" type="text/css"/>
</head>
<body>
  <h1>Monumentos De Municipios De Provincias En República Dominicana</h1>
  <section class="container container--d-flex">
      <label class="container__label container__label--d-flex">
          <span>ELIGE UNA PROVINCIA</span> 
          <select id="dropdown-list" class="container__dropdown-list">
              <option value="N/A" selected>------------------</option>
          </select>
      </label>

     <%--  <label class="container__label container__label--d-flex">
          <span>ELIGE UN MUNICIPIO</span> 
          <select class="container__dropdown-list municipio">
              <option value="N/A" selected>------------------</option>
          </select>
      </label>--%>

      <figure class="container__figure container__figure--d-flex">
          <figcaption class="container__img-caption">No Image</figcaption>
          <img src="img/monumentos/no-image.jpg" class="container__img" />
      </figure>
  </section>
  
  <a class="link" href="Otros.aspx" target="_self">Regresar</a>

  <script src="js/provincias_y_monumentos.js"></script>
</body>
</html>
