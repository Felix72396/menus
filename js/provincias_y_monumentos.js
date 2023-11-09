//const provinciasRD = [
//    { nombre: "Distrito Nacional", acronimo: "DN", municipios: ["Santo Domingo Este", "Santo Domingo Oeste", "Santo Domingo Norte"] },
//    { nombre: "Azua", acronimo: "AZ", municipios: ["Azua de Compostela", "Estebanía", "Guayabal", "Las Charcas", "Las Yayas de Viajama", "Padre Las Casas", "Peralta", "Pueblo Viejo"] },
//    { nombre: "Bahoruco", acronimo: "BH", municipios: ["Neyba", "Galván", "Los Ríos", "Tamayo", "Villa Jaragua"] },
//    { nombre: "Barahona", acronimo: "BR", municipios: ["Santa Cruz de Barahona", "Cabral", "El Peñón", "Enriquillo", "Fundación", "Jaquimeyes", "La Ciénaga", "Las Salinas", "Paraíso", "Polo"] },
//    { nombre: "Dajabón", acronimo: "DA", municipios: ["Dajabón", "El Pino", "Loma de Cabrera", "Partido", "Restauración"] },
//    { nombre: "Duarte", acronimo: "DU", municipios: ["San Francisco de Macorís", "Arenoso", "Castillo", "Eugenio María de Hostos", "Las Guáranas", "Pimentel", "Villa Riva"] },
//    { nombre: "Elías Piña", acronimo: "EP", municipios: ["Comendador", "Bánica", "El Llano", "Hondo Valle", "Juan Santiago", "Pedro Santana"] },
//    { nombre: "El Seibo", acronimo: "ES", municipios: ["Santa Cruz del Seibo", "El Cedro", "Miches"] },
//    { nombre: "Espaillat", acronimo: "ET", municipios: ["Moca", "Cayetano Germosén", "Gaspar Hernández", "Jamao al Norte", "José Contreras"] },
//    { nombre: "Hato Mayor", acronimo: "HM", municipios: ["Hato Mayor del Rey", "El Valle", "Sabana de la Mar"] },
//    { nombre: "Hermanas Mirabal", acronimo: "HMI", municipios: ["Salcedo", "Tenares", "Villa Tapia"] },
//    { nombre: "Independencia", acronimo: "IN", municipios: ["Jimaní", "Cristóbal", "La Descubierta", "Mella"] },
//    { nombre: "La Altagracia", acronimo: "AL", municipios: ["Higüey", "San Rafael del Yuma", "La Romana", "Guaymate"] },
//    { nombre: "La Romana", acronimo: "RO", municipios: ["La Romana", "Villa Hermosa"] },
//    { nombre: "La Vega", acronimo: "VE", municipios: ["La Vega", "Constanza", "Jarabacoa", "Jima Abajo"] },
//    { nombre: "María Trinidad Sánchez", acronimo: "MT", municipios: ["Nagua", "Cabrera", "El Factor"] },
//    { nombre: "Monseñor Nouel", acronimo: "MN", municipios: ["Bonao", "Maimón", "Piedra Blanca"] },
//    { nombre: "Monte Cristi", acronimo: "MC", municipios: ["Monte Cristi", "Castañuela", "Guayubín", "Las Matas de Santa Cruz", "Pepillo Salcedo", "Villa Vásquez"] },
//    { nombre: "Monte Plata", acronimo: "MP", municipios: ["Monte Plata", "Bayaguana", "Don Juan", "Peralvillo", "Sabana Grande de Boyá", "Yamasá"] },
//    { nombre: "Pedernales", acronimo: "PE", municipios: ["Pedernales", "Oviedo"] },
//    { nombre: "Peravia", acronimo: "PR", municipios: ["Baní", "Nizao", "Sabana Buey"] },
//    { nombre: "Puerto Plata", acronimo: "PP", municipios: ["Puerto Plata", "Altamira", "Guananico", "Imbert", "Los Hidalgos", "Luperón", "Sosúa"] },
//    { nombre: "Samaná", acronimo: "SM", municipios: ["Santa Bárbara de Samaná", "Las Terrenas", "El Limón", "Las Galeras"] },
//    { nombre: "Sánchez Ramírez", acronimo: "SR", municipios: ["Cotuí", "Cevicos", "Fantino", "La Mata"] },
//    { nombre: "San Cristóbal", acronimo: "SC", municipios: ["San Cristóbal", "Bajos de Haina", "Cambita Garabitos", "Los Cacaos", "Sabana Grande de Palenque", "San Gregorio de Nigua", "Villa Altagracia"] },
//    { nombre: "San José de Ocoa", acronimo: "JO", municipios: ["San José de Ocoa", "Rancho Arriba", "Sabana Larga"] },
//    { nombre: "San Juan", acronimo: "SJ", municipios: ["San Juan de la Maguana", "Bohechío", "El Cercado", "Las Matas de Farfán", "Vallejuelo"] },
//    { nombre: "San Pedro de Macorís", acronimo: "SPM", municipios: ["San Pedro de Macorís", "Consuelo", "Guayacanes", "Quisqueya", "Ramón Santana", "San José de los Llanos"] },
//    { nombre: "Santiago", acronimo: "STI", municipios: ["Santiago de los Caballeros", "Bisonó", "Jánico", "Licey al Medio", "Puñal", "Sabana Iglesia", "San José de las Matas", "Tamboril", "Villa González"] },
//    { nombre: "Santiago Rodríguez", acronimo: "SG", municipios: ["San Ignacio de Sabaneta", "Los Almácigos", "Monción", "Puerto Plata"] },
//    { nombre: "Valverde", acronimo: "VA", municipios: ["Mao", "Municipio cabecera", "Esperanza", "Laguna Salada"] }
//];

const provinciasRD = [
    { nombre: "Distrito Nacional", acronimo: "DN"},
    { nombre: "Azua", acronimo: "AZ" },
    { nombre: "Bahoruco", acronimo: "BH"},
    { nombre: "Barahona", acronimo: "BR"},
    { nombre: "Dajabón", acronimo: "DA"},
    { nombre: "Duarte", acronimo: "DU"},
    { nombre: "Elías Piña", acronimo: "EP" },
    { nombre: "El Seibo", acronimo: "ES"},
    { nombre: "Espaillat", acronimo: "ET" },
    { nombre: "Hato Mayor", acronimo: "HM" },
    { nombre: "Hermanas Mirabal", acronimo: "HMI"},
    { nombre: "Independencia", acronimo: "IN"},
    { nombre: "La Altagracia", acronimo: "AL" },
    { nombre: "La Romana", acronimo: "RO" },
    { nombre: "La Vega", acronimo: "VE" },
    { nombre: "María Trinidad Sánchez", acronimo: "MT"},
    { nombre: "Monseñor Nouel", acronimo: "MN"},
    { nombre: "Monte Cristi", acronimo: "MC"},
    { nombre: "Monte Plata", acronimo: "MP" },
    { nombre: "Pedernales", acronimo: "PE"},
    { nombre: "Peravia", acronimo: "PR"},
    { nombre: "Puerto Plata", acronimo: "PP"},
    { nombre: "Samaná", acronimo: "SM" },
    { nombre: "Sánchez Ramírez", acronimo: "SR"},
    { nombre: "San Cristóbal", acronimo: "SC"},
    { nombre: "San José de Ocoa", acronimo: "JO" },
    { nombre: "San Juan", acronimo: "SJ" },
    { nombre: "San Pedro de Macorís", acronimo: "SPM" },
    { nombre: "Santiago", acronimo: "STI" },
    { nombre: "Santiago Rodríguez", acronimo: "SG" },
    { nombre: "Valverde", acronimo: "VA" }
];

const $dropdownList = document.getElementById("dropdown-list");
//const $dropdownListMunicipio = document.querySelector(".container__dropdown-list.municipio");
const $title = document.querySelector("figcaption"),
    $img = document.querySelector("img");

provinciasRD.forEach(provincia => {
    $dropdownList.innerHTML += `<option value="${provincia.acronimo}">${provincia.nombre}</option>`;
});

$dropdownList.addEventListener("change", e => {
  

    //$dropdownListMunicipio.innerHTML = "<option value='N/A' selected>------------------</option>";

    if (e.target.value === "N/A")
    {
        $img.src = `../img/monumentos/no-image.jpg`;
        $title.textContent = "No Image";
        return;
    }

    //let provincia = provinciasRD.find(provincia => provincia.acronimo === e.target.value);
    
    $img.src = `../img/monumentos/${e.target.value}0.jpg`;
    $title.textContent = e.target.options[e.target.selectedIndex].textContent;
    //let municipios = provincia.municipios;
   

    //municipios.forEach((municipio, index) => {
    //    $dropdownListMunicipio.innerHTML += `<option value="${provincia.acronimo}${index}">${municipio}</option>`;
    //});


    //$dropdownListMunicipio.onchange = (e) => {
       

    //    if (e.target.value === "N/A") {
    //        $title.textContent = "No Image";
    //        $img.src = `../img/monumentos/no-image.jpg`;
    //        return;
    //    }

    //    $title.textContent = e.target.options[e.target.selectedIndex].textContent;
    //    $img.src = `../img/monumentos/${e.target.value}.jpg`;
    //}
    


});


/*
 1-distrito nacional
 faro colon
 plaza de la bandera
 Monumento a indigenas guaricano

2-azua
PARQUE 19 DE MARZO
estebania parque
--
--
Parque san joaquin
El parque Duarte de Padre Las Casas
Ruinas de la iglesia destruida en 1751 por un terremoto y maremoto.

3-Bahoruco
Estatua de Enriquillo
Parque Central del Municipio de Galván

4-Barahona 
arco del triunfo

5-dajabon
Grito De Capotillo

6-Duarte
MONUMENTO AL CACAO

7-Elias Pina
Obelisco Comendador

8-El Seibo
Homenaje a los toreros

9-Espaillat
Plaza del Agricultor

10-Hato Mayor
Parque Mercedes de la Rocha

11-Hermanas Mirabal
Monumento a Las Hermanas Mirabal

12-Independencia
Cacique Enriquillo

13-La Altagracia
La Basílica de Nuestra Señora de la Altagracia

14-La Romana
Iglesia de San Estanislao en Altos de Chavón

15-La Vega
La Catedral Inmaculada Concepción

16-María Trinidad Sánchez
Monumento A Maria Trinidad sanchez

17-Monseñor Nouel
El Museo Cándido Bidó

18-Monte Cristi
Monumento a los Marcianos

19-Monte Plata
Santuario Nuestra Señora del Agua Santa

20-Pedernales
Casa Consistorial:

21-Peravia
Catedral de Baní

22-Puerto Plata
Cristo Redentor

23-Samaná
monumento a Las Ballenas Jorobada

24-Sánchez Ramírez
Busto Juan Sánchez Ramírez

25-San Cristóbal
Monumento a los Constituyentes

26-San José de Ocoa
Las Pirámides de Ocoa

27-San Juan
Parque Duarte

28-San Pedro de Macorís
Monumento Historico a la Cultura

29-Santiago
Monumento a los Héroes de la Restauración

30-Santiago Rodríguez
Monumento a los Héroes de la Sublevación de Sabaneta

31-Valverde
MONUMENTO A LOS HÉROES Y MÁRTIRES DE LA BARRANQUITA

32-


 */