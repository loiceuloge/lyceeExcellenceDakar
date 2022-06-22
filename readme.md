# MINI PROJET FLUX RSS : PROGRAMME SOFTWARE ENGINEERING EDACY - DIGITAL

Creation d'un lecteur de flux RSS

---

## Description

Il s'agissait pour ce projet de créer un dashboard pour le lycée de l'excellence de Dakar. Nous avons proposer une interface qui gère les studients et les classes(CRUD).
Nous avons egalement l'option de lier les students sans classe à une classe, mais surtout de supprimer un student d'une classe pour l'affecter à une autre.
Pour ce faire :

[Angular]

- Créer un model pour student et classe afin d'uniformiser la donnée dans toutes l'application
- Créer un composant student, un composant classe et un composant classroom
- créer deux services (student et classe) pour gérer toutes opérations liées à manipulation de ces components

---

## Prérequis

Pour la lancer l'application, vous aurez besoin d'installer Node.js, NPM et Angular

### [Node](http://nodejs.org/)

    $ node --version

### [NPM](https://www.npmjs.com/)

    $ npm --version

### [Angular](https://angular.io/)

    $ ng --version

---

## Installation du projet

    $ git clone https://github.com/loiceuloge/flux-rss.git
    $ cd flux-rss
    $ ng serve
