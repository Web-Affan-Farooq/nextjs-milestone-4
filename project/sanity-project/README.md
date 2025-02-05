## Blog application Sanity:

This is the separate sanity project for blog platform .


```curl

main page
|
|___Signup or create account -> username, email, account password, --> validate name, validate email, validate password using zod ----> create a post request on server ---> server create a new request to sanity data sets and craete a new entry in accounts  ---> set the credentials to cookies ----> redirects the user to his account dashboard
|
|___Dashboard
      |
|     |___Create new post
|     |
|     |___See all posts in the form of card  -> dynamic route that shows the
|       details about that post (comments)
|
|___Login ---> username ,email,  password---> validation and sanitization ---> post to server ---> request to sanity ---> returns response success or failure ---> server send the response ---> response arrived on frontend
```