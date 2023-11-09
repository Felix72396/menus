const provinciasRD = [
    { nombre: "Distrito Nacional", acronimo: "DN" },
    { nombre: "Azua", acronimo: "AZ" },
    { nombre: "Bahoruco", acronimo: "BH" },
    { nombre: "Barahona", acronimo: "BR" },
    { nombre: "Dajabón", acronimo: "DA" },
    { nombre: "Duarte", acronimo: "DU" },
    { nombre: "Elías Piña", acronimo: "EP" },
    { nombre: "El Seibo", acronimo: "ES" },
    { nombre: "Espaillat", acronimo: "ET" },
    { nombre: "Hato Mayor", acronimo: "HM" },
    { nombre: "Hermanas Mirabal", acronimo: "HMI" },
    { nombre: "Independencia", acronimo: "IN" },
    { nombre: "La Altagracia", acronimo: "AL" },
    { nombre: "La Romana", acronimo: "RO" },
    { nombre: "La Vega", acronimo: "VE" },
    { nombre: "María Trinidad Sánchez", acronimo: "MT" },
    { nombre: "Monseñor Nouel", acronimo: "MN" },
    { nombre: "Monte Cristi", acronimo: "MC" },
    { nombre: "Monte Plata", acronimo: "MP" },
    { nombre: "Pedernales", acronimo: "PE" },
    { nombre: "Peravia", acronimo: "PR" },
    { nombre: "Puerto Plata", acronimo: "PP" },
    { nombre: "Samaná", acronimo: "SM" },
    { nombre: "Sánchez Ramírez", acronimo: "SR" },
    { nombre: "San Cristóbal", acronimo: "SC" },
    { nombre: "San José de Ocoa", acronimo: "JO" },
    { nombre: "San Juan", acronimo: "SJ" },
    { nombre: "San Pedro de Macorís", acronimo: "SPM" },
    { nombre: "Santiago", acronimo: "STI" },
    { nombre: "Santiago Rodríguez", acronimo: "SG" },
    { nombre: "Valverde", acronimo: "VA" }
]

const $dropdownListProvincia = document.querySelector(".form__dropdown-list.provincia")


provinciasRD.forEach(provincia => {
    $dropdownListProvincia.innerHTML += `<option value="${provincia.nombre}">${provincia.nombre}</option>`
})

const $form = document.forms[0],
    $btnOpenAddForm = document.querySelector(".table__btn-open-add-form"),
    $btnClose = document.querySelector(".form__btn.close"),
    $formCaption = document.querySelector(".form__caption"),
    $tHead = document.querySelector("thead")


$btnOpenAddForm.onclick = () => {
    $form.classList.add("d-flex-center");
    $form["btn-add-edit"].textContent = "AGREGAR"
    $formCaption.textContent = "AGREGAR ESTUDIANTE"
    $form["btn-add-edit"].dataset.action = "add"
}

$btnClose.onclick = () => {
    $form.classList.remove("d-flex-center")
    $form.reset()
}

$form["btn-add-edit"].onmouseover = () => {
    $form.style.background = "linear-gradient(to right, #fff, #7be650, #fff)"
}

$btnClose.onmouseover = () => {
    $form.style.background = "linear-gradient(to right, #fff, #d93d3d, #fff)"
}

window.onmouseout = (e) => {
    if (e.target.matches(".form__btn"))
        $form.style.background = "linear-gradient(to right, #fff, #0094ff, #fff)"
}



$form.onsubmit = (e) => {
    e.preventDefault()

    let nombre = $form["nombre"].value,
        apellido = $form["apellido"].value,
        grado = $form["grado"].value,
        curso = $form["curso"].value,
        modulo = $form["modulo"].value,
        provincia = $form["provincia"].value,
        sexo = $form["sexo"].value,
        fecha_nacimiento = $form["fecha/nacimiento"].value,
        direccion = $form["direccion"].value,
        tanda = $form["tanda"].value,
        taller = $form["taller"].value;

    if ($form["btn-add-edit"].dataset.action === "add") {
        estudiantes.push({
            codigo: estudiantes.length > 0 ? estudiantes[estudiantes.length - 1].codigo + 1 : 1,
            nombre,
            apellido,
            grado,
            curso,
            modulo,
            provincia,
            sexo,
            fecha_nacimiento,
            direccion,
            tanda,
            taller
        })
    }
    else {
        let codigo = parseInt($form["btn-add-edit"].dataset.codigo),
            estudiante = estudiantes.find(est => est.codigo === codigo),
            index = estudiantes.indexOf(estudiante)

  
        estudiantes[index].nombre = nombre
        estudiantes[index].apellido = apellido
        estudiantes[index].grado = grado
        estudiantes[index].curso = curso
        estudiantes[index].modulo = modulo
        estudiantes[index].provincia = provincia
        estudiantes[index].sexo = sexo
        estudiantes[index].fecha_nacimiento = fecha_nacimiento
        estudiantes[index].direccion = direccion
        estudiantes[index].tanda = tanda
        estudiantes[index].taller = taller
      

    }
    

    $form.classList.remove("d-flex-center")
    $form.reset()

    renderizar()

}

const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || []

function renderizar()
{
    const $tBody = document.querySelector(".table tbody"),
        $fragment = document.createDocumentFragment()

  
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes))

    if (estudiantes.length === 0) {
        $tBody.innerHTML = ""
        $tHead.style.visibility = "hidden"
        return
    }

    $tHead.style.visibility = "visible"
   

    estudiantes.forEach(estudiante => {
        $fragment.innerHTML += `<tr>
                 <td>${estudiante.codigo}</td>
                 <td>${estudiante.nombre}</td>
                 <td>${estudiante.apellido}</td>
                 <td>${estudiante.grado}</td>
                 <td>${estudiante.curso}</td>
                 <td>${estudiante.modulo}</td>
                 <td>${estudiante.provincia}</td>
                 <td>${estudiante.sexo}</td>
                 <td>${estudiante.fecha_nacimiento}</td>
                 <td>${estudiante.direccion}</td>
                 <td>${estudiante.tanda}</td>
                 <td>${estudiante.taller}</td>
                 <td><i class="fa-solid fa-pen-to-square table__btn edit" data-codigo="${estudiante.codigo}" title="Editar Estudiante"></i></td>
                 <td><i class="fa-solid fa-trash table__btn delete" data-codigo="${estudiante.codigo}" title="Eliminar Estudiante"></i></td>
            </tr>`
    })

    $tBody.innerHTML = $fragment.innerHTML
}

renderizar()

function obtenerInformacionEstudiante(codigo) {
    let estudiante = estudiantes.find(est => est.codigo === codigo)

    if (estudiante) {
        $form["nombre"].value = estudiante.nombre
        $form["apellido"].value = estudiante.apellido
        $form["grado"].value = estudiante.grado
        $form["curso"].value = estudiante.curso
        $form["modulo"].value = estudiante.modulo
        $form["provincia"].value = estudiante.provincia
        $form["sexo"].value = estudiante.sexo
        $form["fecha/nacimiento"].value = estudiante.fecha_nacimiento
        $form["direccion"].value = estudiante.direccion
        $form["tanda"].value = estudiante.tanda
        $form["taller"].value = estudiante.taller
    }
}


window.onclick = (e) => {
    if (e.target.matches(".table__btn.edit")) {
        $form["btn-add-edit"].textContent = "ACTUALIZAR"
        $formCaption.textContent = "ACTUALIZAR ESTUDIANTE"
  
        let codigo = parseInt(e.target.dataset.codigo)
        obtenerInformacionEstudiante(codigo)
        $form.classList.add("d-flex-center")
        $form["btn-add-edit"].dataset.action = "edit"
        $form["btn-add-edit"].dataset.codigo = codigo

    }

    if (e.target.matches(".table__btn.delete")) {
        let codigo = parseInt(e.target.dataset.codigo),
            ok = confirm("Deseas eliminar este estudiante?")
 

        if (ok) {
            //estudiantes.forEach((est, index) => {
            //    if (est.codigo === codigo) {
            //        estudiantes.splice(index, 1)
            //        break;
            //    }
            //})
   
            for (let i = 0; i <= estudiantes.length; i++) {
                //console.log(typeof estudiantes[i].codigo)
                if (estudiantes[i].codigo === codigo) {
                    //console.log(estudiantes, "before")
                    estudiantes.splice(i, 1)
                    break;
                }
            }
            //console.log(estudiantes, "after")
            renderizar();
        }
    }
}


