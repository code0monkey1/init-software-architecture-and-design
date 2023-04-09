#  Software Architecture and Design Concepts

---

## Categories of UML Diagrams Used to Model Systems :

![All UML  Diagrams](./pics/diagrams.jpg "Structural and Behavioral Diagrams")

------------------------------------------------

### \# Case : Relationships between People , Vehicles and Pollution Laws
 >Verbs help us in defining the relationsips between different UML Classes.

>People drive Vehicles , and Vehicle manufacturing can be affected by a change in the pollution laws .

1. **IS a Relationship** :  A car  -> is a  -> Vehicle  
2. **Association Relationship** : People-> drive ->Vehicles   
3. **Dependency Relationship** : Pollution  Laws -> affect -> Vehicles ( How they are produced , in terms of pollution control laws)
  

---

### \# OOAD : Library Management System

![Library Management System Use Case](./pics/ooad-question-1.jpg "Library Management System")

![OOADSteps](./pics/ooa-steps.jpg "The steps in OOA")


#### There are 2 types of `Operations` that can be performed by the defined Classes

+ **Pure Operations** : `Query Operations that don't state the change of any object` 
+ **Mutating Operations** : `Mutating Operations that change the state of objects`