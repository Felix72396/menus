<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Banderas.aspx.cs" Inherits="felix_website.Banderas" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Banderas De Países Americanos</title>
     <link href="Styles/normalize.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/nav.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/main.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/banderas_monumentos.css" rel="stylesheet" type="text/css"/>
</head>
<body>
  <h1>Banderas De Países Americanos</h1>
  <section class="container container--d-flex">
      <label class="container__label container__label--d-flex">
          <span>ELIGE UN PAÍS</span> 
          <select id="dropdown-list" class="container__dropdown-list">
              <option value="N/A" selected>------------------</option>
          </select>
      </label>

      <figure class="container__figure container__figure--d-flex">
          <figcaption class="container__img-caption">No Image</figcaption>
          <img src="img/banderas/no-image.jpg" class="container__img" />
      </figure>
  </section>
  
  <a class="link" href="Otros.aspx" target="_self">Regresar</a>

  <script src="js/paises_y_banderas.js"></script>
</body>
</html>
