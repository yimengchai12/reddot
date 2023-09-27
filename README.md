# reddot

### API documentation 
[API documentation link](https://documenter.getpostman.com/view/29989340/2s9YJXZk9W)


### Initialise a database **reddot** 
>Go to mySQL workbench and create a database **reddot**


### Run ExpressJS on backend folder
```console
cd backend 
npm install
npm start 
```

### Run sample data
>In backend folder, run the following:
```console
node data.js
```

### ERD diagram 

![ERD diagram](backend/erd.png)


### Technology used 
- ExpressJS
- mySQL 
- Sequelize for database management 
  - Avoid writing raw SQL queries 
  - More consistent code 
  - Avoid SQL injection vulnerabilities 
  
### Difficulties faced 
  >It was my first time using ExpressJS and Sequelize, hence i had to learn from scratch and faced several issues in the process. At first, i was using raw SQL queries but i found out that sequelize might be a better option and i had to swtich over. The implementation of foreign key constraint also caused some issues with the cascading, which took some time. Overall, it was a good and challenging experience! 

