/*
FULL VALIDATION FORM
*/

// input masck (telefone)

$(document).ready(function(){
    $(".telefone").inputmask("(99) 99999-9999", {"onincomplete": function(){
        $(".telefone").val("");
        swal("Opsss!", "Telefone incompleto. Por favor revise! ", "info");
        return false;
    }});
});



// FRONT END VALIDATION FORM
function validateEmail(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);

}


function validateForm(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const experiencia = document.getElementById("experiencia").value;
    const skills = document.getElementById("skills").value;
    const file = document.getElementById("file").value;
   
    if (nome == ""){
        swal('Opsss !', "Nome não pode ser vázio...", "error")
        return false;
    }

    else if (idade == ""){
        swal('Opsss !', "Idade não pode ser vázio...", "error")
        return false;
    }

    else if (email == ""){
        swal('Opsss !', "Email não pode ser vázio...", "error")
        return false;
    }

    else if (telefone == ""){
        swal('Opsss !', "Telefone não pode ser vázio...", "error")
        return false;
    }


    else if (endereco == ""){
        swal('Opsss !', "Endereco não pode ser vázio...", "error")
        return false;
    }


    else if (experiencia == ""){
        swal('Opsss !', "Experiencia não pode ser vázio...", "error")
        return false;
    }

    else if (skills == ""){
        swal('Opsss !', "Skills não pode ser vázio...", "error")
        return false;
    }

    else if (file == ""){
        swal('Opsss !', "File não pode ser vázio...", "error")
        return false;
    }

    else{
        return true
    }
}