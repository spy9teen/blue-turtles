# blue-turtles
Mindk dev-camp

## DB connection data
In the root directory create file '**.env**'. It will contain your DB connection info. 

### .env template:
```
#PostgreSQL:
DB_CLIENT=pg

#for mySQL:
#DB_CLIENT=mysql

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```
And define your your DB connection parameters like this:
>DB_CLIENT=pg

>DB_HOST=127.0.0.1

>DB_USER=postgres

>DB_PASSWORD=yourPostgresPassword

>DB_NAME=dbName

##  SQL scripts
You can find some sql scripts in [**services/sql**](services/sql) directory:
- to create all reqired tables - [**services/sql/createTables.sql**](services/sql/createTables.sql)
- to fill your base with some test data - [**services/sql/insertTestData.sql**](services/sql/insertTestData.sql)
- to drop all tables - [**services/sql/dropTables.sql**](services/sql/dropTables.sql)
- to delete all data from tables - [**services/sql/clearTables.sql**](services/sql/clearTables.sql)
