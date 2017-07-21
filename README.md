# testPFE


Au cas ou vous voulez le tester en local.
***côté serveur
npm install pour installer les dépendences
npm start pour lancer le serveur

**********************************************************
lien restFull Api heberger sur Heroku
registre
https://hidden-lake-30109.herokuapp.com/users/suscribe  POST

login
https://hidden-lake-30109.herokuapp.com/users/login POST

tous les utilisateurs 
https://hidden-lake-30109.herokuapp.com/users/admin   GET
********************************************************
lien restFull Api local
registre
http://localhost:8080/users/suscribe  POST

login
http://localhost:8080/users/login POST

tous les utilisateurs 
http://localhost:8080/users/admin  GET

***côté client 
aller sous le dossier angularApp et executer ng build.
une fois exécuté ng build vous avez deux possibilité de lancer l'application angular

sois vous exécuté la commande "ng serve" et vous connecté sur "localhost:4200" //port standart de angular.
OU vous allez directement sur "http://localhost:8080/" et le serveur appele l'angular sur le dossier public.

