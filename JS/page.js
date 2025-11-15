
function voirprojet1() {
      window.location.href = "maths.html","_blank";
}
function voirprojet2() {
     window.open("DOCUMENTS/PROJET POUBANB.pdf", "_blank");
}           
function voirprojet3() {
     window.open("DOCUMENTS/PROGRAMME HDE IDANTITE M Klinik Dan 1.0.pdf");
}
function voirmesprojets() {
    const section = document.getElementById("projet");
    if (section) {
        section.scrollIntoView({ 
            behavior: "smooth", // effet qui fait défiler la page jusqu'à la section, défilement fluide, en haut de l'écran. 
            block: "start" // Pour eviter de faire la section a propos de parraitre brusquement.
        }); 
    }
}       