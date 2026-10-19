const nome = document.getElementById("nome");

const senha = document.getElementById("senha");

const botaoentrar = document.getElementById("entrar");

botaoentrar.addEventListener ("click", function () {

       const nomenome = nome.value;
       const senhaDigitada = senha.value;

 if(nomenome === "aluno" && senhaDigitada === "1234"){
   alert("Bem-vindo ao sistema!");   
} else if ( nomenome === "" || senhaDigitada === ""){
   alert("Preencha todos os campos!"); 
} else{
   alert("ACesso negado!");
}
});



