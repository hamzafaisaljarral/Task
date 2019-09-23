# Task


## Description
An e-commerce application which is built on mean stack 

Features 
1. If the user is an employee of the store, he gets a 30% discount
2. If the user is an affiliate of the store, he gets a 10% discount
3. If the user has been a customer for over 2 years, he gets a 5% discount.
4. For every $100 on the bill, there would be a $ 5 discount (e.g. for $ 990, you get $ 45
as a discount).
5. The percentage based discounts do not apply on groceries.
6. A user can get only one of the percentage based discounts on a bill.

 

## Prerequisites

Git
NodeJs
NPM
MongoDB

## Running

(Note: these instructions are for Ubuntu Linux based OS. Assuming nodejs, npm and mongodb is already installed).

  running mongodb:
```
    1). Open Terminal and change directory to where mongodb is installed in bin folder.
    2). user@linux: ~/path/to/mongodb/bin $ ./mongod 
    3). press enter database server will start.
```
  unzipping and installing dependencies:
```
    1). Unzip the downloaded file.
    2). Open the extracted folder.
    3). Right click somewhere in folder and select Open in Terminal.
    4). Type Command : npm install and press enter. This will install all dependencies shown in package.json file.
```
  running project:
```
for backend admin:
  Step 1: Install all dependencies by : npm install and run node server.js
  Step 2: Sign up for the admin account @ http://localhost:8000/admin/signup
  Step 3: Now you're good to go.
  Step 4: Now Login  @http://localhost:8000/admin/login
  Step 5: Now create some products to show at user end and see the magic.

for frontend user:
  Step 1: Install all dependencies by : npm install and run node app.js
  Step 2: site works at. http://localhost:5000
  Step 3: you are good to go now. Create account,shop, add to cart, checkout, orders, profile settings.
```
## Built With

OS : Linux Mint

API Tool : Postman

Editor : Atom.

## Version

This is first version 1.


