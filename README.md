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

+ **Pure Operations** : `Query Operations that don't state the change of any object` (Checking , Querying for information , without causing any side effects)
+ **Mutating Operations** : `Mutating Operations that change the state of objects`  
    + _These have 2 condition attributes_:  
        1. Pre-Conditions:  What should be true for this operation to be executed ( eg. Book must be available , to be issued)  
        1. Post-Conditions: What should mutate after this operation is executed ( eg. after a book is returned , the `isIssued` attribute should be set to false.)
    

### \# OOAD : College Enrolment System 