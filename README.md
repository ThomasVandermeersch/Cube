# Configuration

## Step 1
### Modify the node_modules

You have to temporary delete the processing of set time zone
Go to : ./node_modules/.bin/@cubejs-backend/postgres-drive/dist/PostgresDriver.js
Comment line containing "await conn.query(`SET TIME ZONE '${this.config.storeTimezone || 'UTC'}'`);"

## Step 2
Run script : ``npm run dev``
## Step 3
Start your local CrateDB
## Step 4 
Go to [localhost:4000](http://localhost:4000/)
## Step 5
### 5.1 Select database PostgreSQL
Note : Even if PostgreSQL is selected by default, you have to click on "change" and re-select PostgreSQL.

### 5.2 Fill in the following credentials
    * Hostname : localhost
    * Port : 4200
    * User : crate
