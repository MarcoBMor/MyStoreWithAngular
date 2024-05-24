# My Store with Angular

Welcome to the repository for **Store with Angular**! This project is a modern web application built using Angular, a platform for building mobile and desktop web applications.

Basically, is a store that makes use of another of my projects called [MyApiRestWithSpringboot](https://github.com/MarcoBMor/MyApiRestWithSpringBoot.git).

## Pre-requisites
- Have a **JDK** installation on your system. Either set the **JAVA_HOME** environment variable pointing to your JDK installation or have the java executable on your **PATH**.
- [Download](https://maven.apache.org/download.cgi) & [Install](https://maven.apache.org/install.html) Maven
  
To set up this project locally, you should follow this steps:
  1. Install & Run MyApiRestWithSpringBoot
  2. Install & Run MyStoreWithAngular

## 1. Install & Run MyApiRestWithSpringBoot
Open a new GitBash and execute:
````bash
#Install
git clone https://github.com/MarcoBMor/MyApiRestWithSpringBoot.git 
cd myapirestwithspringboot
mvn clean install

#Run
mvn spring-boot:run
````
## 2. Install MyStoreWithAngular
Open GitBash and execute:
````bash
git clone https://github.com/MarcoBMor/MyStoreWithAngular.git
cd mystorewithangular
npm install
ng serve
````



# Contact
Marco Beruet Morelli - marcoberuetmorelli@gmail.com

Project link: [MyStoreWithAngular](https://github.com/MarcoBMor/MyStoreWithAngular)
