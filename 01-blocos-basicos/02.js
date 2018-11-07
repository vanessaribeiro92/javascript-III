// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(v) {
  v=v.replace(/\D/g,""); //Substituí o que não é dígito por "", /g é [Global][1]
  v=v.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4"); 
  // \d{1,2} = Separa 1 grupo de 1 ou 2 carac. (\d{3}) = Separa 1 grupo de 3 carac. (\d{1}) = Separa o grupo de 1 carac.
  // "$1.$2.$3-$4" = recupera os grupos e adiciona "." após cada.
  
  return v
}
