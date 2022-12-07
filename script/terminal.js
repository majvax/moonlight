if (document.getElementsByClassName('demo').length > 0) {
    var i = 0;
    var txt = `
                Prenez l'avantage sur vos adversaires avec Moonlight, notre tout nouvel autoclicker conçu spécialement pour Minecraft.
                

                Indétectable, Moonlight contient une multitude de fonctionnalités permettant de rester le plus discret possible.
                
                Moonlight est l'un des meilleurs autoclicker du marché, nous n'avons enregistré aucun bannissement depuis sa sortie.

    
                Téléchargez Moonlight maintenant !`;

    var speed = 60;

    function typeItOut () {
        if (i < txt.length) {
        document.getElementsByClassName('demo')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeItOut, speed);
        }
    }
    setTimeout(typeItOut, 1500);
}
