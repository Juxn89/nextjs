# Next.js | OpenJira App
To run in development environment, you must have the data base; run following commands:
```
docker-compose up -d
```
* The flag **-d** means __detached__

MongoDB URL Local:
```
mongodb://localhost:27017/entriesdb
```

## Setting environment variables
Rename file **.env.template** to **.env**

## Populate database with test data
Call to this endpoint:
```
http://localhost:3000/api/seed
```