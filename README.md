# HTW-Berlin-CloudComputing-2016

# Kurs Cloud Computing

## Vorbereitung:
- Node.js: https://nodejs.org/en/
- Virtuelles Windows 10: https://developer.microsoft.com/en-us/windows/downloads/virtual-machines
- Azure Pass: https://www.microsoftazurepass.com/
- Microsoft Account erstellen: https://account.microsoft.com/
- Fiddler: https://www.telerik.com/download/fiddler
- Postman: https://www.getpostman.com/

## Hello Node:
Wenn Sie NodeJs richtig auf Ihrem System installiert haben, können Sie in der Eingabeaufforderung folgenden Code ausführen:

![HelloNode](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/img/HelloNode.png "HelloNode")


## Abgabe 1:

Vorbereitung zum 02.12.206: Bitte informieren Sie sich über das [HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol) Protokoll.

Sie haben die Aufgabe, eine Webanwendung in der Cloud bereitzustellen. Bevor Sie das Programm auf einem Server installieren, sollen Sie lokal an Ihrem Computer testen, ob das Programm auch wie gewünscht funktioniert.   
1. Führen Sie die Anwendung [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/HelloCloud.js) auf Ihrem Computer aus.  
2. Rufen Sie die Anwendung im Browser auf.  
3. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
4. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“  
5. Führen Sie die Anwendung [01-SimpleGet.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/01-SimpleGet.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „01-SimpleGet.txt“.  
6. Führen Sie die Anwendung [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/02-SimpleJsonPost.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Übermitteln Sie außerdem eine E-Mail-Adresse Ihrer Wahl im Nachrichtenkörper.
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „02-SimpleJsonPost.txt“.  

Bonus-Aufgabe:
Ändern Sie den Code der [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2016/blob/master/02-SimpleJsonPost.js)-Anwendung so ab, dass die Anwendung in der Lage ist, in der Antwort-Nachricht den Benutzernamen und das Kennwort im Klartext anzuzeigen, sofern sich der Client mit der "Basic"-Authentication authentifiziert hat. Speichern Sie das Programm als "03-BasicAuth.js". Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „03-BasicAuth.txt“.

## Berlin Cloud Computing Meetup
- Montag, 12. Dezember 2016, 19.00 Uhr: [Azure - Sensordaten mit IoT Hub und Tensorflow mit Docker auf GPU accelerated VM](https://www.meetup.com/de-DE/Berlin-Cloud/events/235891833/)

## Abgabe 2:

//TODO rherlt: enter some awesome text here!
