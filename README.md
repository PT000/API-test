# API-test
A way to run tests, 
Creates an dynamic (wich means it starts and stops during the test) Backend server and an SQLite-DB in the memory at the client that's running the tests.
Tests all of the API (CRUD) If you want it run too an existing database just change the URL for the existense database instead of "memory" 
Beware of what's in seedDB it must at least have one entry in the DB! Otherwise "GET" will fail

Just type: 
npm test 

(to run the tests, 4 tests in 1 test suite, the backend server only runs during the tests and the DB will be removed from memory when the tests are completed (beware of openHandles if the are running test that have openHandles, this example does an forceExit. The dynamic Backend server (app.js) can be used for other types tests as well)
