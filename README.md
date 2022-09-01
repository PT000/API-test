# Time To First "Hello, World!"
Time To First "Hello, World!" (TTFHW, sometimes known as bootstrap time) represents the time it takes for a user to onboard to an API, framework, project or team. 
How long it takes for a developer to get started and begin being productive in an organisation.


# Skapa container i Docker
docker run \
    --name test-mysql \
    -e MYSQL_ROOT_PASSWORD=root \
    -e MYSQL_USER=test \
    -e MYSQL_PASSWORD=test \
    -e MYSQL_DATABASE=test \
    -p 3306:3306 \
    --tmpfs /var/lib/mysql  \
    -d mysql/mysql-server:latest

# API-test
Demonstrating tests
Creates an DB in memory of the client
Tests all of the API (Get, Put, Delete) Just type: 
npm test 

(to run the tests, 4 tests in 1 test suite)
