# Progressive Web Apps @cmda-minor-web · 20-21
In dit vak heb ik mijn Breaking Bad overzichtspagina van Web App From Scratch omgebouwd tot een server side rendered applidatie. Ik heb ook een manifest.json en serviceworker toegevoegd. Verders heb ik de applicatie nog geoptimaliseerd.

## Live Demo
https://progressivewebappmaxmulder.herokuapp.com/

## Plan Van Aanpak
Voor Web App From Scratch heb ik een breaking bad/better call saul website gemaakt. Op de website zie je als overzichtspagina de beiden serie's hun seizoenen. Je kan filteren tussen de specifieke series. Ook kan je op een seizoen klikken om de afleveringen te zien. Ik ga hiervoor eerst de routes aanpassen met Express.


# Mijn process

## Toelichting week 1 
De maandag in de eerste week had ik veel moeite om op gang te komen. Ik probeerde node en express aan de praat te krijgen met mijn WAFS applicatie, dit lukte alleen niet. Ik kreeg error na error. Hierdoor heb ik eerst veel onderzoek gedaan over de algemene informatie over express. 
Dinsdag heb ik de noob sessie gejoined van Joost. Hierdoor kreeg ik een goede basis om mee te beginnen. In de middag heb ik onderdelen van mijn WAFS overgezet naar node en express zodat het deels werkte. Daarom heb ik nu alleen maar een werkende fetch en dat moet ik nog uitbreiden.


## Toelichting week 2
Na de feedback sessie van vorige week vrijdag wist ik waar iedereen in de groep stond. Hierdoor wist ik dat ik erg achterliep. Hierdoor heb ik op de maandag snel stappen gezet met mijn code. Ik heb de detailpagina volledig uitgewerkt en de home pagina ook, ik had wat problemen met de modules opmaken alleen dat is uiteindelijk gelukt. Hierdoor kon ik de dinsdag snel aan de slag aan de opdracht van de week.
Dinsdag heb ik een begin gemaakt aan build scripts aan de hand van een noobs sessie met Wouter. Ook heb ik wat CSS uit mijn WAFS project toegevoegd. Tot slot had ik nog een manifest.json toegevoegd die werkt en een stukje basis code van de serviceworker.js. De service worker moet ik volgende week alleen nog correct uitwerken.


## Toelichting week 3
Ik ben de maandag verder gegaan met waar ik vorige week gebleven was. Zo heb ik de service worker uitgewerkt met een offline page. Ik had hier problemen mee door een stomme fout. Ik laad namenlijk een achtergrond in via een link en mijn tekst op de pagina is wit. Als je offline bent laad de achtergrond afbeelding niet in doordat die extern is en daardoor wordt de achtergrond wit. Doordat mijn tekst ook wit was, zag ik alleen maar wit en dacht ik dat het niet werkte. Hierdoor was ik een uur hiermee bezig voor niks. Toch heb ik het helemaal werkend gekregen. Ook heb ik een notfound pagina gemaakt. Verders heb ik nog het een en ander aangepast aan mijn css en de pagina in het engels gemaakt. Dinsdag ga ik op onderzoek uit naar de performance.
Dinsdag heb ik een semi skeleton UI gemaakt. Ook heb ik aan mijn lighthouse performance getallen gewerkt. Voor desktop is dit volledig gelukt, alleen voor mobiel niet helemaal. 


## Lighthouse Performance 
![Lighthouse performance](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/lighthouse.jpg?raw=true)

## Skeleton UI
![Skelelton UI](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/frames.jpg?raw=true)

## Overview Page
![overview page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/overviewpc.jpg?raw=true)

## 404 Page
![404 page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/404.jpg?raw=true)
Source for image: https://www.jamiesale-cartoonist.com/wp-content/uploads/hank-2-1024x1024.png

## Offline Page
![offline page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/connectionLost.jpg?raw=true)
Source for image: https://www.jamiesale-cartoonist.com/wp-content/uploads/sofa-2-1024x1024.png
