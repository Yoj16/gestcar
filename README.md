## Questions 

### Quelle est la différence entre AngularJS et Angular ? 

La différence est que AngularJS utilise pour langage Javascript, alors que Angular utilise TypeScript. 
Angular est une version améliorée d'AngularJS basé sur les composants et l'architecture modulaire.

### Quelle est la nouveauté apporté depuis Angular14 et confirmer en Angular19 

L'introduction des composants autonomes (standalone components). 
Cela a permis de simplifier la structure des applications Angular en les rendant plus modulaires et plus faciles à maintenir.

### Lister les étapes nécessaires  à l’installation et / ou configuration d’angular pour commencer  le développement sur son PC ?

1. Installer Node.js
2. Installer Angular CLI
3. Créer un nouveau projet Angular
4. Lancer le serveur de développement
5. Ouvrir le navigateur et accéder à l'application
6. Créer des composants, des services et développer !

### C’est quoi un composant Angular?

Un composant Angular est une classe TypeScript qui contient des propriétés et des méthodes, et se décompose en 3 parties : fichier .ts, fichier .html, fichier .scss.

### C’est quoi une directive Angular? Donnez quelques exemples et dites à quoi ils servent ?

Une directive Angular est un élément HTML qui permet d'ajouter des fonctionnalités à un élément HTML.
Exemples de directives Angular : ngIf, ngFor, ngStyle, ngClass, etc.

### C’est quoi un service angular ?

Un service Angular est une classe TypeScript qui contient des méthodes et des propriétés, et qui permet de partager des données et de la logique entre les composants.

### Que fait la fonction ngOnInit

La fonction ngOnInit est une fonction du cycle de vie d'un composant Angular qui est appelée après que le composant a été initialisé.

### Quels sont les fichiers principaux générés dans un projet Angular

Les fichiers principaux générés dans un projet Angular sont :
- app.component.ts
- app.component.html
- app.component.scss
- app.module.ts
- main.ts
- index.html
- styles.scss
- angular.json
- package.json
- tsconfig.json
- tslint.json

### C’est quoi le mécanisme de routage en Angular,  comment le met-on en œuvre ?

Le mécanisme de routage en Angular permet de naviguer entre les différentes pages d'une application Angular.

### C’est quoi RxJs? 

RxJs est une bibliothèque JavaScript qui permet de gérer les flux de données asynchrones.

### Expliquer  brièvement la notion d’observable et comment l’utiiser

Un observable est un objet qui émet des valeurs asynchrones. Pour utiliser un observable, il faut souscrire à l'observable et définir des fonctions de callback pour gérer les valeurs émises.

### Expliquer  la différence entre un subjectet un BehaviourSubject

Un Subject est un type d'observable qui permet d'émettre des valeurs asynchrones. Un BehaviorSubject est un type de Subject qui permet d'émettre une valeur initiale et de stocker la dernière valeur émise.

### Le fichier angular.jsonsert à quoi 

Le fichier angular.json est un fichier de configuration qui permet de configurer un projet Angular.

### Expliquer  à quoi serve ces commandes : 

- `ngserve` : permet de lancer le serveur de développement
- `ngserve --port 4500` : permet de lancer le serveur de développement sur le port 4500
- `ng g c moncompnent` : permet de générer un composant
- `ng g class MaClasse` : permet de générer une classe
- `ng g service MonService` : permet de générer un service
- `ng g guardAuthGuard` : permet de générer un guard
- `ng new GestionVols` : permet de créer un nouveau projet Angular
- `json-server --watch produit.json --port 3500` : permet de lancer un serveur JSON sur le port 3500

### Comment appelle –t-on cet élément @component et quels sont ces attributs

Un élément @Component est un décorateur qui permet de définir les propriétés d'un composant Angular. Ces attributs sont selector, templateUrl, styleUrls, providers, imports.

### Expliquer le mécanisme de composant enfant et composant parent

Un composant enfant est un composant qui est inclus dans un composant parent. Un composant parent peut communiquer avec un composant enfant en lui passant des données via des propriétés d'entrée. Un composant enfant peut communiquer avec un composant parent en émettant des événements.

