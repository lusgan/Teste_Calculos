//carga termica = (eletronicos+lampadas) * 650 + ocupantes*600 + area_do_ambiente*650

var botao = document.getElementById("botao_calcular_carga");

botao.onclick = function(event){
    event.preventDefault();
    
    let area_do_ambiente = document.getElementById("area").value;
    let altura_do_ambiente = document.getElementById("altura").value;
    let quantidade_ocupantes = document.getElementById("num_ocupantes").value;
    let quantidade_eletronicos = document.getElementById("quantidade_eletronicos").value;
    let quantidade_lampadas = document.getElementById("quantidade_lampadas").value;
    
    let carga_termica = area_do_ambiente*altura_do_ambiente*650 + quantidade_ocupantes*650 + quantidade_eletronicos*650 + quantidade_lampadas*650;
    window.alert(`carga termica = ${carga_termica} btus`);
}