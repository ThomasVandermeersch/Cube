# Configuration
Step 1 : Start the script : npm run dev
Step 2 : Go to localhost:4000
Step 3 : Start the crate database
Step 4 : Set up database connexion

Database selection : PostgreSQL  - Even if PostgreSQL is selected by default, you have to click on "change" and re-select PostgreSQL

Then, fill in the following creditials
    Hostname : localhost
    Port : 4200
    Database : <do not fill this field>
    User : crate
    Password : <do not fill this field>

Step 5 : Modify the node modules

You have to temporary delete the processing of set time zone
Go to : ./node_modules/.bin/@cubejs-backend/postgres-drive/dist/PostgresDriver.js
Comment line containing "await conn.query(`SET TIME ZONE '${this.config.storeTimezone || 'UTC'}'`);" in my case (Line 135 --> Version "0.28.58")

Step 6 : Restart the server



# Building schema
