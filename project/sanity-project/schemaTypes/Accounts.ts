export default {
    name: 'accounts',
    type: "document",
    title: "Accounts",
    fields: [
        // in blogPosts == "2025-02-13
        {
            name: "userInfo",
            type: "object",
            title: "User Information",
            fields: [
                {
                    name: "userName",
                    type: "string",
                    title: "User Name"
                },
                {
                    name: "userEmail",
                    type: "string",
                    title: "Email"
                },
                {
                    name: "userAccountPassword",
                    type: "string",
                    title: "Account Password"
                }
            ]
        },
        {
            name: "blogPosts",
            type: "array",  // ✅ Changed from "object" to "array"
            title: "Blog Posts",
            of: [
                {
                    type: "object",
                    name:"blog",
                    title: "Blog",
                    fields: [
                        {
                           name: "blogTitle",
                            type: "string",
                            title: "Blog Post Title"
                        },
                        {
                            name: "blogDescription",
                            type: "string",
                            title: "Blog Description"
                        },
                        {
                            name: "blogDate",
                            type: "date",
                            title: "Date Created"
                        },
                        {
                            name: "blogBannerImage",
                            type: "image",
                            title: "Upload Blog Banner Image"
                        },
                        {
                            name: "blogBody",
                            type: "array",
                            of: [
                                { type: "block" }
                            ],
                            title: "Main Blog Body"
                        },
                        {
                            name:"comments",
                            type:"array",
                            of:[{type:"string"}],
                            title:"Comments"
                        }
                    ]
                }
            ]
        }
    ]
};

/*
-----------> for searching out specific blogs with thiers dates fetch latest blogs using this

*[_type == "accounts"]{
  blogPosts[blogDate == "2025-02-13"]{
    blogTitle,
  }
}

-----------> For searching out specific account blogs

*[_type == "accounts" && _id == "3d79a311-b54d-4e38-b19e-1ac63702b717"]{
  userInfo,
  blogPosts,
  _id,
}

-----------// For searching out specific account

*[_type == "accounts" && userInfo.userEmail == "affanamir903@gmaill.com" && userInfo.userAccountPassword == "Dell00225" ]{
  userInfo,
  blogPosts,
  _id,
}

 */