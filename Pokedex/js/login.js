window.onload = init;

function init(){
    if(!sessionStorage.getItem("token")){
        document.querySelector('.btn-secondary').addEventListener('click',()=>{
            window.location.href = "signin.html";
        });
        document.querySelector('.btn-primary').addEventListener('click',login);
    }else{
        window.location.href("pokedex.html");
    }
    }
    
function login(){
    var mail = document.getElementById('input-mail').value;
    var password = document.getElementById('input-password').value;

    axios({
        method:'post',
        url:url+'user/login',
        data:{
            user_mail: mail,
            user_password:password
        }
    }).then((res)=>{
        if (res.data.code === 200) {
            alert("Inicio exitoso");
            sessionStorage.setItem("token",res.data.message);
            window.location.href("pokedex.html");
        }else{
            alert("Datos incorrectos");
        }
    }).catch((error)=>{
        console.log(error);
    });
}