var usuario="admin123"
var contraseña="admin456"
function validar(){
    var usu=document.getElementById("cuenta").value
    var contra=document.getElementById("contraseña").value

    if (usu===usuario && contra===contraseña){
        window.location.href='Cuestionario.html'
    }else{
        alert("usuario o contraseña incorrecto")
    }
    
}