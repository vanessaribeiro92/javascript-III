let input_cep = document.getElementById("cep")
let input_logradouro = document.getElementById("logradouro")
let input_complemento = document.getElementById("complemento")
let input_bairro = document.getElementById("bairro")
let input_localidade = document.getElementById("localidade")
let input_uf = document.getElementById("uf")

input_cep.addEventListener("blur", function () {
    if(this.value = "__.___-___"){
        this.value = ""
        input_cep.classList.remove("error")
    }else {
        getDataJSON()
    }
})

function getDataJSON() {
    document.getElementById("cep-error").style.display = "none"

    if (input_cep.value.lenght > 0) {
        input_logradouro.value = "..."
        input_complemento.value = "..."
        input_bairro.value = "..."
        input_localidade.value = "..."
        input_uf.value = "..."
    }
    get_data(`http://viacep.com.br/ws/${input_cep.value}/json/`)

        //se der certo
        .then(function (data) {        

           input_cep.classList.remove("error")
           let dataObj = JSON.parse(data) //convertendo string em objeto JSON
          
           if (dataObj.erro) {
               document.getElementById("cep-error").style.display = "block"               
               input_cep.className = "error"
               input_logradouro.value = ""
               input_complemento.value = ""
               input_bairro.value = ""
               input_localidade.value = ""
               input_uf.value = ""
           }else {
            
            input_logradouro.value= dataObj.logradouro
            input_complemento.value = dataObj.complemento
            input_bairro.value = dataObj.bairro
            input_localidade.value = dataObj.localidade
            input_uf.value = dataObj.uf
           }        

        })
        //se der errado
        .catch(function (error) {
            
            document.getElementById("cep-error").style.display = "block"               
                input_cep.className = "error"
                input_logradouro.value = ""
                input_complemento.value = ""
                input_bairro.value = ""
                input_localidade.value = ""
                input_uf.value = ""
        })

})

input_cep.addEventListener("focus", function () {
    // document.getElementById("cep-error").style.display = "none" 
    input_cep.value = "__.___-___"
    setTimeout(function() {
        input_cep.setSelectionRange(0, 0)
    }, 1)
})


input_cpf.addEventListener("keydown", function(event) {
    event.preventDefault()
    if("0123456789".indexOf(event.key) !== -1
        && this.value.indexOf("_") !== -1) {
            this.value = this.value.replace(/_/, event.key)
            const next_index = this.value.indexOf("_")
            this.setSelectionRange(next_index, next_index)
    } else if (event.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }
})

