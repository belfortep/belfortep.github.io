const INFORMACIONF = "Soy una desarrolladora frontend en busca de desarrollar nuevas experiencias en el ambito de la programación"
const INFORMACIONM = "Soy un desarrollador frontend, siempre intentando mejorar y superarme a mi mismo cada dia"

const EXPERIENCIAMAYOR = ["Senior FrontEnd Developer,Google,2018-Presente,Trabajo como desarrollador Frontend en Google; enfrentando varios desafios", "Data Science Specialist,Amazon,2014-2018,Mejorando la competitividad de la empresa utilizando todos los conocimientos adquiridos", "Semi Senior Backend Developer,Twitter,2009-2014,Primer puesto Semi Senior en el cual aprendí las bases para mi futuro profesional"]
const EXPERIENCIAMENOR = ["QA Engineer,Facebook,2022-Presente,Empezando hace poco tiempo; mi posición de mayor responsabilidad hasta el momento", "Junior Game Developer,Ubisoft,2019-2022,Creando videojuegos con el motor gráfico Unity Engine y Unreal Engine 5", "Trainee FullStack Developer,Facebook,2016-2019,Primer experiencia en el rubro de la programacion; aprendiendo todos los pilares para el desarrollo"]

const EDUCACIONMAYOR = ["Doctorado en Ciencias de la Computacion,MIT,2000-2004,Estudios realizados en Estados Unidos con una beca; estudiando importantes conceptos de Computación", "Doctorado en Matematicas,UBA,1996-2000,Al profundizar mis conocimientos en matematicas pude adquirir mejores habilidades a la hora de programar", "Licenciatura en Inteligencia Artificial,UADE,1994-1996,Primer estudiante recibido de esta carrera de grado"]
const EDUCACIONMENOR = ["Ingeniería en Informática,UTN,2010-2016,Siguiendo al completo el plan de estudios logre recibirme con mucho esfuerzo", "Licenciatura en Ciencias de la Computacion,UBA,2007-2010,Aunque no logre terminar la carrera; aprendí conceptos claves para mi desarrollo profesional", "Secundario Completo,Colegio Nacional Buenos Aires,2000-2007,Secundario completo con un promedio de 9.12"]

let avatar = document.getElementById('avatar-image')
let username = document.getElementById('username')
let aboutMe = document.getElementById('about-me')
let personalInfo = document.getElementsByClassName('pb-1 text-secondary')

let experiencias = document.getElementsByClassName('experiencia')
let fechasExperiencia = document.getElementsByClassName('fecha-experiencia')
let empresas = document.getElementsByClassName('empresa')
let descripcionLaboral = document.getElementsByClassName('descripcion-laboral')

let educacion = document.getElementsByClassName('educacion')
let fechasEducacion = document.getElementsByClassName('fecha-educacion')
let instituciones = document.getElementsByClassName('instituto')
let descripcionEstudio = document.getElementsByClassName('descripcion-estudio')

let botonCambiar = document.getElementById('cambiar')


botonCambiar.addEventListener('click', () => {
        cambiarDatos()
})




async function obtenerUsuario() 
{
        try {
                const respuesta = await fetch('https://randomuser.me/api/')
                const usuarios = await respuesta.json()
                const usuario = usuarios.results[0]
                return usuario;

        } catch (err) {
                alert('Error, actualice la pagina porfavor')
                return null
        }
}


function cambiarImagen({ picture }) 
{
        avatar.src = picture.large;
}

function cambiarNombre({ name }) 
{
        username.innerHTML = name.title + ' ' + name.first + ' ' + name.last
}

function cambiarSobreMi({ dob, email, phone, location, gender }) 
{
        if (gender == 'female') {
                aboutMe.innerHTML = INFORMACIONF
        }

        if (gender == 'male') {
                aboutMe.innerHTML = INFORMACIONM
        }

        personalInfo[0].innerHTML = location.city + ", " + location.country
        personalInfo[1].innerHTML = email
        personalInfo[2].innerHTML = phone
        personalInfo[3].innerHTML = dob.age
        personalInfo[4].innerHTML = location.city + ", " + location.country
        personalInfo[5].innerHTML = phone
        personalInfo[6].innerHTML = email
}

function obtenerExperiencia(edad) 
{
        let informacionTrabajo = []

        if (edad > 50) {
                for (let i = 0; i < 3; i++) {
                        informacionTrabajo.push(EXPERIENCIAMAYOR[i].split(','));
                }
        } else {
                for (let i = 0; i < 3; i++) {
                        informacionTrabajo.push(EXPERIENCIAMENOR[i].split(','));
                }
        }

        return informacionTrabajo;
}

function obtenerEstudios(edad) 
{
        let informacionEstudios = []

        if (edad > 50) {
                for (let i = 0; i < 3; i++) {
                        informacionEstudios.push(EDUCACIONMAYOR[i].split(','));
                }
        } else {
                for (let i = 0; i < 3; i++) {
                        informacionEstudios.push(EDUCACIONMENOR[i].split(','));
                }
        }
        
        return informacionEstudios
}

function cambiarExperiencia({ dob }) 
{
        let informacionTrabajo = obtenerExperiencia(dob.age)

        for (let i = 0; i < 3; i++) {
                experiencias[i].innerHTML = informacionTrabajo[i][0]
                empresas[i].innerHTML = informacionTrabajo[i][1]
                fechasExperiencia[i].innerHTML = informacionTrabajo[i][2]
                descripcionLaboral[i].innerHTML = informacionTrabajo[i][3];
        }
}

function cambiarEstudios({ dob }) 
{
        let informacionEstudios = obtenerEstudios(dob.age)

        for (let i = 0; i < 3; i++) {
                educacion[i].innerHTML = informacionEstudios[i][0]
                instituciones[i].innerHTML = informacionEstudios[i][1]
                fechasEducacion[i].innerHTML = informacionEstudios[i][2]
                descripcionEstudio[i].innerHTML = informacionEstudios[i][3]
        }
}


async function cambiarDatos() 
{
        let miUsuario = await obtenerUsuario();

        if (miUsuario) {
                cambiarImagen(miUsuario)
                cambiarNombre(miUsuario)
                cambiarSobreMi(miUsuario)
                cambiarExperiencia(miUsuario)
                cambiarEstudios(miUsuario)
        }
}

cambiarDatos()