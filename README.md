# run-my-sql
A tools to perform different actions over the MySql. You can fresh/truncate your database safely using very simple command or you can import the api to your project. It has on the fly sql running capabilites.

## Installation
If you want to run as a cli global then 
```sh
npm install -g run-my-sql
```
Or as project dependency
```sh
npm install -S run-my-sql
```
## Usage
Command line usage
```sh
runMySql <file> [options]
```
i.e
```sh
runMySql --fresh --seedFile ./schema.sql --user=root --password=root --database=my_db
```
### Options
--host [optional] The hostname of the database you are connecting to.
--port [optional] The port number to connect to.
--user The MySQL user to authenticate as.
--password The password of that MySQL user.

-V, --version output the version number
-h, --help output usage information