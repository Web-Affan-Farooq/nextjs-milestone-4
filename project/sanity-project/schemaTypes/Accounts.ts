export default {
    name: 'accounts',
    type: "document",
    title: "Accounts",
    fields: [
        {
            name: "userName",
            title: "User name",
            type: "string",
        },
        /*
        *[_type == "accounts"] {
  userName,
}
         */
    ]
}