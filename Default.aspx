<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="felix_website.Default" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Felix Website</title>

    <link href="Styles/normalize.css" rel="stylesheet" type="text/css"/>
     <link href="Styles/nav.css" rel="stylesheet" type="text/css"/>
    <link href="Styles/main.css" rel="stylesheet" type="text/css"/>


</head>
<body>
    <nav class="nav">
        <ul class="nav__menu nav__menu--d-flex">
            <li class="nav__main-item">
                <span class="nav__span nav__span--position-rlt nav__span--d-grid">DEPORTES</span>
                <ul class="nav__sub-menu">
                    <li class="nav__sub-item"><a href="https://www.mlb.com/es/" target="_blank">MLB</a></li>
                    <li class="nav__sub-item"><a href="https://www.nba.com/" target="_blank">NBA</a></li>
                    <li class="nav__sub-item"><a href="https://lidom.com/" target="_blank">LIDOM</a></li>
                    <li class="nav__sub-item"><a href="https://www.nfl.com/" target="_blank">NFL</a></li>
                    <li class="nav__sub-item"><a href="https://www.fifa.com" target="_blank">FIFA</a></li>
                </ul>
            </li>
            <li class="nav__main-item">
                <span class="nav__span nav__span--position-rlt nav__span--d-grid">BLOGS</span>
                <ul class="nav__sub-menu">
                    <li class="nav__sub-item"><a href="https://ensegundos.do/" target="_blank">En Segundos</a></li>
                    <li class="nav__sub-item"><a href="https://remolacha.net" target="_blank">Remolacha</a></li>
                    <li class="nav__sub-item"><a href="https://www.cachicha.com/" target="_blank">Cachicha</a></li>
                    <li class="nav__sub-item"><a href="https://www.idominicanas.com/" target="_blank">Imágenes Dominicanas</a></li>
                </ul>
            </li>
            <li class="nav__main-item">
                <span class="nav__span nav__span--position-rlt nav__span--d-grid">NOTICIAS</span>
                <ul class="nav__sub-menu">
                    <li class="nav__sub-item"><a href="https://almomento.net/" target="_blank">Al Momento</a></li>
                    <li class="nav__sub-item"><a href="https://listindiario.com/" target="_blank">Listín Diario</a></li>
                    <li class="nav__sub-item"><a href="https://www.diariolibre.com/" target="_blank">Diario Libre</a></li>
                    <li class="nav__sub-item"><a href="https://hoy.com.do/" target="_blank">Hoy Digital</a></li>
                    <li class="nav__sub-item"><a href="https://elnuevodiario.com.do/" target="_blank">El Nuevo Diario</a></li>
                    <li class="nav__sub-item"><a href="https://elnacional.com.do/" target="_blank">El Nacional</a></li>
                </ul>
            </li>
            <li class="nav__main-item">
                <span class="nav__span nav__span--position-rlt nav__span--d-grid">LOTERIAS</span>
                <ul class="nav__sub-menu">
                    <li class=nav__sub-item"><a href="https://loteriasdominicanas.com" target="_blank">LoteDom</a></li>
                    <li class=nav__sub-item"><a href="https://loterianacional.gob.do/" target="_blank">Nacional</a></li>
                    <li class=nav__sub-item"><a href="https://ganamas.com.do/" target="_blank">Ganamas</a></li>
                    <li class=nav__sub-item"><a href="https://www.conectate.com.do/loterias/anguilla" target="_blank">Anguila</a></li>
                    <li class=nav__sub-item"><a href="https://laprimera.do/" target="_blank">La Primera</a></li>
                    <li class=nav__sub-item"><a href="https://www.conectate.com.do/loterias/la-suerte-dominicana" target="_blank">La Suerte</a></li>
                    <li class=nav__sub-item"><a href="https://www.leidsa.com/" target="_blank">Leidsa</a></li>
                    <li class=nav__sub-item"><a href="https://loteka.com.do/" target="_blank">Loteka</a></li>
                    <li class=nav__sub-item"><a href="https://flalottery.com/espanol" target="_blank">Florida</a></li>
                    <li class=nav__sub-item"><a href="https://www.nylottery.org/es/" target="_blank">New York</a></li>
                </ul>
            </li>
            <li class="nav__main-item">
                 <span class="nav__span nav__span--position-rlt nav__span--d-grid">BANCOS</span>
                 <ul class="nav__sub-menu">
                    <li class="nav__sub-item"><a href="https://www.banreservas.com/" target="_blank">Reservas</a></li>
                    <li class="nav__sub-item"><a href="https://bhd.com.do" target="_blank">BHD</a></li>
                    <li class="nav__sub-item"><a href="https://popularenlinea.com" target="_blank">Popular</a></li>
                    <li class="nav__sub-item"><a href="https://do.scotiabank.com/" target="_blank">ScotiaBank</a></li>
                    <li class="nav__sub-item"><a href="https://bsc.com.do/home" target="_blank">Santa Cruz</a></li>
                    <li class="nav__sub-item"><a href="https://www.apap.com.do/" target="_blank">A.P.A.P</a></li>
                </ul>
            </li>
        </ul>
    </nav>
   <h1>Menú Informativo</h1>
    <a class="link" href="Otros.aspx" target="_self">Otros</a>
</body>
</html>
