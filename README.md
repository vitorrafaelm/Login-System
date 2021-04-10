# Login-System
This repository contains a login system and the functionalities to list customers and add them. 

To run this repository in your computer first you will need to initialize a docker container, then you will create a database named tsauth. All the configuration
Connect with the database is in the file ormconfig.json, if you change the password or your database name you might change those information in ormconfig.json.

With the data base setted you have to run the following command to create the tables in your database: yarn typeorm migration:run.

After that you might just run yarn dev to run the back-end project. 
