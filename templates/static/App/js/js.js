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

// FRONT END VALIDATION FORM
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
    else if (nome.split(' ').length < 2){
        swal("Opsss !", "Informe o nome completo...", "info");
        return false;
    }
    else if (idade == ""){
        swal('Opsss !', "Idade não pode ser vázio...", "error")
        return false;
    }
    else if ( idade < 18 ){
        swal('Opsss !', "Idade não pode ser menor que 18...", "info")
        return false;
    }
    else if (email == ""){
        swal('Opsss !', "Email não pode ser vázio...", "error")
        return false;
    }
    else if (!(validateEmail(email))){
        document.getElementById('email').value='';
        swal("Opsss !", "Email inválido!", "error");
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


// BACKEND VALIDATION FORM
function validateForm2(){
    const nome2 = document.getElementById("nome2").value;
    const idade2 = document.getElementById("idade2").value;
    const email2 = document.getElementById("email2").value;
    const telefone2 = document.getElementById("telefone2").value;
    const endereco2 = document.getElementById("endereco2").value;
    const experiencia2 = document.getElementById("experiencia2").value;
    const skills2 = document.getElementById("skills2").value;
    const file2 = document.getElementById("file2").value;
   
    if (nome2 == ""){
        swal('Opsss !', "Nome não pode ser vázio...", "error")
        return false;
    }
    else if (nome2.split(' ').length < 2){
        swal("Opsss !", "Informe o nome completo...", "info");
        return false;
    }
    else if (idade2 == ""){
        swal('Opsss !', "Idade não pode ser vázio...", "error")
        return false;
    }
    else if (idade2 < 18 ){
        swal('Opsss !', "Idade não pode ser menor que 18...", "info")
        return false;
    }
    else if (email2 == ""){
        swal('Opsss !', "Email não pode ser vázio...", "error")
        return false;
    }
    else if (!(validateEmail(email2))){
        document.getElementById('email').value='';
        swal("Opsss !", "Email inválido!", "error");
        return false;
    }
    else if (telefone2 == ""){
        swal('Opsss !', "Telefone não pode ser vázio...", "error")
        return false;
    }
    else if (endereco2 == ""){
        swal('Opsss !', "Endereco não pode ser vázio...", "error")
        return false;
    }
    else if (experiencia2 == ""){
        swal('Opsss !', "Experiencia não pode ser vázio...", "error")
        return false;
    }
    else if (skills2 == ""){
        swal('Opsss !', "Skills não pode ser vázio...", "error")
        return false;
    }
    else if (file2 == ""){
        swal('Opsss !', "File não pode ser vázio...", "error")
        return false;
    }
    else{
        return true
    }
}



// FULLSTACK VALIDATION FORM
function validateForm3(){
    const nome3 = document.getElementById("nome3").value;
    const idade3 = document.getElementById("idade3").value;
    const email3 = document.getElementById("email3").value;
    const telefone3 = document.getElementById("telefone3").value;
    const endereco3 = document.getElementById("endereco3").value;
    const experiencia3 = document.getElementById("experiencia3").value;
    const skills3 = document.getElementById("skills3").value;
    const file3 = document.getElementById("file3").value;
   
    if (nome3 == ""){
        swal('Opsss !', "Nome não pode ser vázio...", "error")
        return false;
    }
    else if (nome3.split(' ').length < 2){
        swal("Opsss !", "Informe o nome completo...", "info");
        return false;
    }
    else if (idade3 == ""){
        swal('Opsss !', "Idade não pode ser vázio...", "error")
        return false;
    }
    else if (idade3 < 18 ){
        swal('Opsss !', "Idade não pode ser menor que 18...", "info")
        return false;
    }
    else if (email3 == ""){
        swal('Opsss !', "Email não pode ser vázio...", "error")
        return false;
    }
    else if (!(validateEmail(email3))){
        document.getElementById('email').value='';
        swal("Opsss !", "Email inválido!", "error");
        return false;
    }
    else if (telefone3 == ""){
        swal('Opsss !', "Telefone não pode ser vázio...", "error")
        return false;
    }
    else if (endereco3 == ""){
        swal('Opsss !', "Endereco não pode ser vázio...", "error")
        return false;
    }
    else if (experiencia3 == ""){
        swal('Opsss !', "Experiencia não pode ser vázio...", "error")
        return false;
    }
    else if (skills3 == ""){
        swal('Opsss !', "Skills não pode ser vázio...", "error")
        return false;
    }
    else if (file3 == ""){
        swal('Opsss !', "File não pode ser vázio...", "error")
        return false;
    }
    else{
        return true
    }
}

// DATA SCIENCE VALIDATION FORM
function validateForm4(){
    const nome4 = document.getElementById("nome4").value;
    const idade4 = document.getElementById("idade4").value;
    const email4 = document.getElementById("email4").value;
    const telefone4 = document.getElementById("telefone4").value;
    const endereco4 = document.getElementById("endereco4").value;
    const experiencia4 = document.getElementById("experiencia4").value;
    const skills4 = document.getElementById("skills4").value;
    const file4 = document.getElementById("file4").value;
   
    if (nome4 == ""){
        swal('Opsss !', "Nome não pode ser vázio...", "error")
        return false;
    }
    else if (nome4.split(' ').length < 2){
        swal("Opsss !", "Informe o nome completo...", "info");
        return false;
    }
    else if (idade4 == ""){
        swal('Opsss !', "Idade não pode ser vázio...", "error")
        return false;
    }
    else if (idade4 < 18 ){
        swal('Opsss !', "Idade não pode ser menor que 18...", "info")
        return false;
    }
    else if (email4 == ""){
        swal('Opsss !', "Email não pode ser vázio...", "error")
        return false;
    }
    else if (!(validateEmail(email4))){
        document.getElementById('email').value='';
        swal("Opsss !", "Email inválido!", "error");
        return false;
    }
    else if (telefone4 == ""){
        swal('Opsss !', "Telefone não pode ser vázio...", "error")
        return false;
    }
    else if (endereco4 == ""){
        swal('Opsss !', "Endereco não pode ser vázio...", "error")
        return false;
    }
    else if (experiencia4 == ""){
        swal('Opsss !', "Experiencia não pode ser vázio...", "error")
        return false;
    }
    else if (skills4 == ""){
        swal('Opsss !', "Skills não pode ser vázio...", "error")
        return false;
    }
    else if (file4 == ""){
        swal('Opsss !', "File não pode ser vázio...", "error")
        return false;
    }
    else{
        return true
    }
}

// VALIDANDO O TAMANHO DO CURRÍCULO
$(document).ready(function(){
    $("#file, #file2, #file3, #file4").bind('change', function(){
        var a = (this.files[0].size);

        if (a > 2 * 1048576){
            swal("Atenção !", "O tamanho máximo do arquivo não pode ultrapassar 2MB.", "info");      
            this.value = '';  
        };
    });

});