const paisesAmericanos = [
    { nombre: "Antigua y Barbuda", acronimo: "AG" },
    { nombre: "Argentina", acronimo: "AR" },
    { nombre: "Bahamas", acronimo: "BS" },
    { nombre: "Barbados", acronimo: "BB" },
    { nombre: "Belice", acronimo: "BZ" },
    { nombre: "Bolivia", acronimo: "BO" },
    { nombre: "Brasil", acronimo: "BR" },
    { nombre: "Canadá", acronimo: "CA" },
    { nombre: "Chile", acronimo: "CL" },
    { nombre: "Colombia", acronimo: "CO" },
    { nombre: "Costa Rica", acronimo: "CR" },
    { nombre: "Cuba", acronimo: "CU" },
    { nombre: "Dominica", acronimo: "DM" },
    { nombre: "Ecuador", acronimo: "EC" },
    { nombre: "El Salvador", acronimo: "SV" },
    { nombre: "Estados Unidos", acronimo: "US" },
    { nombre: "Granada", acronimo: "GD" },
    { nombre: "Guatemala", acronimo: "GT" },
    { nombre: "Guyana", acronimo: "GY" },
    { nombre: "Haití", acronimo: "HT" },
    { nombre: "Honduras", acronimo: "HN" },
    { nombre: "Jamaica", acronimo: "JM" },
    { nombre: "México", acronimo: "MX" },
    { nombre: "Nicaragua", acronimo: "NI" },
    { nombre: "Panamá", acronimo: "PA" },
    { nombre: "Paraguay", acronimo: "PY" },
    { nombre: "Perú", acronimo: "PE" },
    { nombre: "República Dominicana", acronimo: "DO" },
    { nombre: "San Cristóbal y Nieves", acronimo: "KN" },
    { nombre: "San Vicente y las Granadinas", acronimo: "VC" },
    { nombre: "Santa Lucía", acronimo: "LC" },
    { nombre: "Surinam", acronimo: "SR" },
    { nombre: "Trinidad y Tobago", acronimo: "TT" },
    { nombre: "Uruguay", acronimo: "UY" },
    { nombre: "Venezuela", acronimo: "VE" }
];

const $dropdownList = document.getElementById("dropdown-list");

paisesAmericanos.forEach(pais => {
    $dropdownList.innerHTML += `<option value="${pais.acronimo}">${pais.nombre}</option>`;
});

$dropdownList.addEventListener("change", e => {
    const $title = document.querySelector("figcaption"),
        $img = document.querySelector("img");

    if (e.target.value === "N/A") {
        $title.textContent = "No Image";
        $img.src = `../img/banderas/no-image.jpg`;
        return;
    }

    $title.textContent = e.target.options[e.target.selectedIndex].textContent;
    $img.src = `../img/banderas/${e.target.value}.png`;
});
