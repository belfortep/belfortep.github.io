let formulario = document.getElementById('form')
let nombre = document.getElementById('name')
let mail = document.getElementById('email')
let mensaje = document.getElementById('message')

let datosMensaje = document.getElementById('datos-mensaje')
let mensajes = document.getElementsByClassName('mensaje-form')
let borrarDatos = document.getElementById('borrar-datos')

datosMensaje.style.visibility = 'hidden'
borrarDatos.style.visibility = 'hidden'

function actualizarDatosMensaje() 
{
        mensajes[0].innerHTML = "Nombre: " + localStorage.getItem('nombre')
        mensajes[1].innerHTML = "Mail: " + localStorage.getItem('mail')
        mensajes[2].innerHTML = "Mensaje: " + localStorage.getItem('mensaje')
}

if (localStorage.getItem('nombre') && localStorage.getItem('mail') && localStorage.getItem('mensaje')) {
        actualizarDatosMensaje()
        datosMensaje.style.visibility = 'visible'
        borrarDatos.style.visibility = 'visible'
}

formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        localStorage.setItem('nombre', nombre.value)
        localStorage.setItem('mail', mail.value)
        localStorage.setItem('mensaje', mensaje.value)

        nombre.value = ''
        mail.value = ''
        mensaje.value = ''

        actualizarDatosMensaje()

        datosMensaje.style.visibility = 'visible'
        borrarDatos.style.visibility = 'visible'
})   

borrarDatos.addEventListener('click', (e) => {
        localStorage.removeItem('nombre')
        localStorage.removeItem('mail')
        localStorage.removeItem('mensaje')
        datosMensaje.style.visibility = 'hidden'
        borrarDatos.style.visibility = 'hidden'

})