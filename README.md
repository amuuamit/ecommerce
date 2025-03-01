# EVENT PLANNER

## Steps to run Backend

1. `npm install`
2. `Create .env & Update with your own configuration`
3. `npm  start`

## Routes -

### USER routes

- POST - `/signup`
- POST - `/signin`

### EVENT routes

- POST - `/createevent` - create a new event
- DELETE - `/deleteevent` - delete a event
- PATCH - `/updateevent` - update a single event
- GET - `/getsingleevent` - get single event
- GET - `/allevents` - show all events

## Dependencies

- Express
- mongoose
- nodemon
- morgan
- dotenv
- cors
- bcrypt
- jsonwebtoken
- cookie-parser
