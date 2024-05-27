## Padrão de projeto MVC

A rota decide qual Controller vai ser utilizado naquela rota. "homeController" é quem "decide" coisas na rota "/home". O trabalho do controller é decidir qual é o model da rota (que vai controlar dados da base) e o view da rota (que vai ser renderizado para o usuário).