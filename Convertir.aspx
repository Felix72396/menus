<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Convertir.aspx.cs" Inherits="felix_website.Convertir" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Conversion</title>
    <link href="Styles/normalize.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/nav.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/main.css" rel="stylesheet" type="text/css"/>
</head>
<body>
    <h1>Conversión De Número Romano A Decimal</h1>
    <section class="container converter container--d-flex container--b-dashed">
       <form class="form-converter">
            <label for="numero-natural">
                <span>Número Natural</span>
                <input id="numero-natural" type="text" placeholder="Número natural..." name="numero-natural" maxlength="4" required/>

            </label>
            <label>
                <span>Número Romano</span> 
                <span id="numero-romano" class="resultado"></span>

            </label>
            <label>
                <span>Número En Letras</span> 
                <span id="numero-letras" class="resultado"></span>
            </label>

           <button type="submit" id="btn-convertir">CONVERTIR</button>
       </form>
    </section>
    <a class="link" href="Otros.aspx" target="_self">Regresar</a>

    <script src="js/convertir.js"></script>
</body>
</html>
