function login(){
    var m = document.getElementById('caixa_email_login').value;
        var p = document.getElementById('caixa_password_login').value;

            if (m=="email" && p=="123"){

                //login.style.display = "none";
                document.getElementsByClassName("login")[0].style.display = "none";
                window.alert("Bem vindo!");
            }
          else{
               window.alert("O utilizador ou a password encontram-se incorretos.");

          }

}