ore = 999;


function assenze() {
    n = parseInt(document.getElementById("progresso").value);
    console.log(n);
    ore = 999;
    assenze = n * 6;
    ore_assenti = ore - assenze;
    percentuale = (100 * ore_assenti)/ore;
    console.log(percentuale);
    document.getElementById("barra").style.widht = percentuale + "%";
}