Book Rental API

TABLES FOR POSTGRESQL
BOOKS
id required
title required
Author required
Description not required
Text required
Isavailable true/false for rent;

USERS
Id Name UNIQUE
Password hashed
Role admin regular

Rentals Book id (foreign key) delete on cascade User id (foreign key) delete on cascade
TakeDate date of book taken	
ReturnDate date of book to be returned
Overdue false/true

Paths

BOOKS

POST /books ONLY ADMIN GET /books/:id
DELETE /books/:id/delete ONLY ADMIN

USERS

POST /auth/register GETS JWT
POST /auth/login GETS JWT

RENTALS

POST /rentals
PUT /rentals/:id/return


MAINTENANCE

POST /maintenance/check-overdue

FILE STRUCTURE routes controllers middleware modules db
 
db|
	pgConnections.js modules|
	booksModule.js
	usersModule.js 	rentalModule.js
	maintenanceModule.js
controllers|
	booksModule.js
	usersModule.js 	rentalModule.js
	maintenanceModule.js