## 1. NextJS Milestone 4 Assignment no 3

This is a final Fullstack blog platform using  NextJs,Tailwindcss, Shadcn-ui and sanity

[Deployed](https://bloggercom.vercel.app/);

## Planning :

```curl

main page
|
|___Signup or create account -> username, email, account password, --> validate name, validate email, validate password using zod ----> create a post request on server ---> server create a new request to sanity data sets and create a new entry in accounts  ---> set the credentials to cookies ----> redirects the user to his account dashboard
|
|___Dashboard
      |
|     |___Create new post
|     |
|     |___See all posts in the form of card  -> dynamic route that shows the details about that post (comments)
|
|___Login ---> ,email,  password---> validation and sanitization ---> post to server ---> request to sanity ---> returns response success or failure ---> server send the response ---> response arrived on frontend
```

### Frontend:

<div>
    <ol>
        <li>Create page for blogs where blogs are shown as card</li>
        <li>Second for top trending and third for normal 30 blogs (optional)</li>
        <li>Create dynamic route for reading blogs (completed)</li>
        <li>Implement a comment section in the dynamic route with notification (completed)</li>
        <li>Create an api endpoint for handling signup(completed)</li>
        <li>Create an api endpoint for login(completed)</li>
        <li>Create an api endpoint for comment posting (completed)</li>
        <li> Create home page for logged in user</li>
        <li>Create another route so that user can also create a post</li>
        <li> Create a route for deleting post</li>
        <li>Create a dynamic route for user home page that is showing full information of blog like comments</li>
        <li>Create a button in that dynamic route for reading blog</li>
        <li>Integrate zod for validation (completed)</li>
    </ol>
</div>

## landing page:
header --responsive --fixed --completed
3 sections
footer 


## Home page where user create blogs:
header --completed --responsive
section for creating a new blog
Footer --completed --responsive

handle post form and print data to console

## Queries:

### For searching out specific blogs with thiers dates fetch latest blogs using this

```sql
*[_type == "accounts"]{
  blogPosts[blogDate == "2025-02-13"]{
    blogTitle,
    blogDescription,
    comments,
    blogDate,
    blogBannerImage{
        asset -> {
            "url",
            _id
        }
    },
    blogBody,
  }
}
```

### For searching out specific account blogs

```sql
*[_type == "accounts" && _id == ""]{
  userInfo,
  blogPosts,
  _id,
}
```

### For searching out specific account

```sql
*[_type == "accounts" && userInfo.userEmail == "" && userInfo.userAccountPassword == "" ]{
  userInfo,
  blogPosts,
  _id,
}

```