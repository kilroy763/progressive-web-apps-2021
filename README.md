# Progressive Web Apps @cmda-minor-web · 20-21
In dit vak heb ik mijn Breaking Bad overzichtspagina van Web App From Scratch omgebouwd tot een server side rendered applidatie. Ik heb ook een manifest.json en serviceworker toegevoegd. Verders heb ik de applicatie nog geoptimaliseerd.

## Live Demo
https://progressivewebappmaxmulder.herokuapp.com

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
Zoals hier boven te zien is, was mijn desktop perforamce al redelijk oke. Ik heb gekeken naar de errors die lighthouse aangaf en heb de code voor de images aangepast. Verders heb ik mijn code nog wat opgeschoond en gekeken naar de snelheden de fetches. Toen ik dit had opgelost was de desktop versie zo goed als perfect. (buiten de SEO om, hier heb ik mijn tijd niet ingestoken omdat dit niet echt een punt van performance is)
Voor de mobiele versie verliep het niet zo gemakkelijk. Na de aanpassingen van de desktop versie, liep de mobiele versie direct ook beter. Toch kwam ik niet uit 1 foutmelding, namenlijk het volgende : Largest Contentful Paint. Die is bij mij 4.1s op de mobiele variant. Dit komt doordat mijn CSS bestand 2.7kb is volgens de console. Ik kreeg het alleen niet voor elkaar om dit beter te minifyen en heb daarom gekozen om te laten voor wat het is.


## Skeleton UI
![Skelelton UI](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/frames.jpg?raw=true)
Tijdens mijn performance tests heb ik ook een netwerk test gedaan. Zo heb ik mijn pagina laten runnen op slow 3G verbinding. Hierbij kwam ik er direct achter hoe mijn pagina rendert. Eerst zag ik een wit beeld, hierna mijn achtergrond afbeelding. Hierdoor werd mijn tekst ook zichtwaar, die is namenlijk wit. Tot slot werden de gefetchde afbeeldingen getoond. Ik heb hiervoor mijn achtergrond kleur aangepast. Nu is direct mijn tekst te lezen, ook heb ik een placeholder voor de afbeeldingen gemaakt. Hierdoor is een vakje gereserveerd voor de afbeeldingen waar ze komen. Nu heb ik dan ook een render manier waarbij je eerst de tekst ziet met wat basis stijlen, dan mijn achtergrond afbeelding en tot slot de gefetchde afbeeldingen.


## Overview Page
![overview page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/overviewpc.jpg?raw=true)
Dit is mijn overzichtspagina. Ik heb de stijl overgenomen van mijn WAFS project. 

## 404 Page
![404 page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/404.jpg?raw=true)
Source for image: https://www.jamiesale-cartoonist.com/wp-content/uploads/hank-2-1024x1024.png  
De 404 pagina is zichtbaar wanneer de gebruiker zelf de link aanpast, zodra de gebruiker dit doet wordt hij/zij geredirect naar een 404 pagina. Hierbij krijg je direct de optie om terug te gaan naar de home pagina.

## Offline Page
![offline page](https://github.com/kilroy763/progressive-web-apps-2021/blob/master/documentatie/connectionLost.jpg?raw=true)
Source for image: https://www.jamiesale-cartoonist.com/wp-content/uploads/sofa-2-1024x1024.png  
De offline pagina is zichtbaar door de serviceworker. De offline pagina wordt samen met de afbeelding en het css bestand in de cache geladen van de gebruiker. Hierdoor kan ik zodra de gebruiker geen internet meer heeft de offline pagina tonen. Hierdoor weet de gebruiker dat zijn internet is uitgevallen.


## Reflectie
In de 3 weken van dit project heb ik extreem veel geleerd. Ik de eerste week vond ik het nog erg lastig om mijn weg te vinden met express en node. Ik had hier al eens mee gewerkt voor een vak van 2 jaar terug alleen ik wist er niks meer van. Hierdoor duurde het even voordat ik op weg was. Zodra ik het doorhad ging het wel vrij snel. Ook had ik nog nooit gehoord van de service worker en manifest.json, ik vond het dan ook erg interessant om hier gebruik van te maken. Tot slot vond ik ook de college's die gegeven werden tijdens het vak erg interessant. Ze waren erg nuttig en hielpen vaak voor eventuele inspiratie.
