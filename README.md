# Create-react-app with Auth0
Authentication with create-react-app and Auth0

## Useage

### Auth0
1. Create an account at [Auth0](https://auth0.com/)
2. Create a [new application](https://manage.auth0.com/#/applications) with Auth0.
3. Under the application settings grab the domain and clientid
4. While you're there add http://localhost:3000/callback to the allowed callbacks and http://localhost:3000/ to the allowed web origins.
5. Replace the `example.env` with your data
6. Rename `example.env` to `.env`:

```
REACT_APP_DOMAIN=*your domain here*
REACT_APP_CLIENTID=*your client ID here*
REACT_APP_REDIRECT=http://localhost:3000/callback
```

### Oauth integration
Follow Auth0's [instructions](https://auth0.com/docs/connections/social/) for integrating with your project

#### Google example
1. Create a google project
2. Follow Auth0's [instructions for integration](https://auth0.com/docs/connections/social/google)

### Development
1. npm install
2. npm start

### Deployment
1. Install [now.sh](https://now.sh) globally
2. Rename `example.now.json` to `now.json`
3. Replace the alias with whatever you want
4. `npm run deploy` in the root directory
