# Node API - CRUD

This is a sample developed while I study the creation of REST API's. 
<br>
I did it following a [NodeJS course](https://rocketseat.com.br), and It uses lot's of concepts and functionalities.

## Built With

- [X] [NodeJS](https://nodejs.org/en/) - The JS back-end runtime
- [X] [Docker](https://www.docker.com) - Container manager
- [X] [Robo 3T](https://robomongo.org) - MongoDB in GUI
- [X] [Imsomnia](https://insomnia.rest) - Easy REST requisitions

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
<br>
First of all, download and install all items of the "Built with" section.

### Installing

1. Once you have the NodeJS installed and already pulled this project, check if everything went fine:
Open your command prompt, and then:
```
node -v
```
You should receive a return of the version. If that happened, everything is fine.

2. Open your command prompt in the project folder, then, run:

```
npm i
```

This will ensure that all you need is installed, according to the ```package.json```

3. Download Docker and once you've installed it, open your command prompt, then:
```
docker pull mongo
```
This will pull a image of mongoDB to your docker.
Now, we need to use and run it:
```
docker run --name {nameOfYourContainer} -p 27017:27017 -d mongo
```
In this command we are running in the port 27017 (local) to the Mongo port 27017, the default ones, and using the mongo image.

Now, if you want to check the status of your VM, run:
```
docker ps
``` 
If you had return, it means your MongoDB is running in the VM.
<br>
Tip: If you logoff to your computer, it will stop, but then, you can use:
```
docker start {nameOfYourContainer}
```
Instead of run.

4. In your Robo3T connect to a DB using the ports ```21017``` as we have setted on the third item.

5. In your insomnia, create a new workspace and set up the ```Get (all and one), Post, Put and Delete, ``` using the URL's according to the project code.

6. Open the project folder in your command prompt and run ```nodemon server.js```.

<br>

With that you have the Node server running / the database in the VM running // The Imsomnia ready to run requisitions // The Robo3T ready so you can see the database schemas.

## Note
In this project i've seen:
- [X] Express: To help with routes
- [X] Cors: To help with outsiders requisitions
- [X] Mongoose: To act as my ORM and help in the DB codding
- [X] Mongoose-Paginate: To help with the requisition res pagination 
- [X] MVC Structure (Except the View features)
- [X] Containers with Docker
- [X] JS ES6+ features
- [X] Require-Dir: Which I've learned the purpose, but didn't used (My call)
- [X] Nodemon: To help running the Node Server
