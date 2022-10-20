This App runs on port 8000.
Start the app using npm run start 
Then proceed to login with email: felixtemikotan@yahoo.com,
password: 123456 with this POST request route: localhost:8000/user


TYPICAL EXAMPLE OF REQUEST BODY: {
    "email":"felixtemikotan@yahoo.com",
    "password":"123456" 
}
You can modify the user.json file in the sbcs_ms/auth_service/src/database/user.json file.


On login you need to copy and paste the token so that each time a request is sent authorization header will be automatically generated.


Then hit the protected route localhost:8000/quotes on successful login.

Feel free to login with incorrect login credentials.