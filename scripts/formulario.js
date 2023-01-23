let formulario = document.getElementById('form')
let nombre = document.getElementById('name')
let mail = document.getElementById('email')
let mensaje = document.getElementById('message')

let obtenerDatos = document.getElementById('obtener-datos')
let datosMensaje = document.getElementById('datos-mensaje')
let mensajes = document.getElementsByClassName('mensaje-form')

datosMensaje.style.visibility = 'hidden'

if (!localStorage.getItem('nombre') || !localStorage.getItem('mail') || !localStorage.getItem('mensaje')) {
        obtenerDatos.style.visibility = 'hidden'
}

formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        localStorage.setItem('nombre', nombre.value)
        localStorage.setItem('mail', mail.value)
        localStorage.setItem('mensaje', mensaje.value)

        nombre.value = ''
        mail.value = ''
        mensaje.value = ''

        obtenerDatos.style.visibility = 'visible'
})

obtenerDatos.addEventListener('click', (e) => {
        mensajes[0].innerHTML = "Nombre: " + localStorage.getItem('nombre')
        mensajes[1].innerHTML = "Mail: " + localStorage.getItem('mail')
        mensajes[2].innerHTML = "Mensaje: " + localStorage.getItem('mensaje')

        datosMensaje.style.visibility = 'visible'
})      