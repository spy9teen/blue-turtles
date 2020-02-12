# blue-turtles
Mindk dev-camp

## DB connection data
In the root directory create file '**.env**'. It will contain your DB connection info. 

### .env template:
```
#PostgreSQL:
DB_CLIENT=pg
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
Yo can find some sql scripts (*create tables, insert some values etc.*) in [**services/sql**](services/sql) directory
