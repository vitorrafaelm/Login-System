# Login-System
This repository contains a login system and the functionalities to list customers and add them. 

To run this project you should clone the repository in any folder you want. Then, let me teach you how to configure both the back-end and the front-end project. 

#### Back-end ####
1. you might initialize a docker container with postgres image; 
2. enter the folder API - login System. 
3. yarn dev - and look at the console to see if any mensage appers saying everything went right and if the application has been successfully connect to the database. 
4. If everything went fine, run: **yarn typeorm migration:run** to create the tables in the postgres database. 
6. After this, you should be able to use the api. 

#### Front-end #### 
1. You might enter the folder Front-end and run yarn install and then the front-end will be ready to be used on localhost:3000; 

