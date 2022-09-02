# API-test
Demonstrating a way to run tests, 
Creates an dynamic Backend server and SQLite-DB in the memory of the client that's running the tests.
Tests all of the API (CRUD) If you want it run at an actual database just put in the URL for the database instead of "memory" 
Just type: 
npm test 

(to run the tests, 4 tests in 1 test suite, the backend server only runs during the tests and the DB will be removed from memory when the tests are run. The dynamic Backend server (app.js) can be used for other types tests as well)
