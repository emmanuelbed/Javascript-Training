

// let users = [

// {
//     email: "example.gmail.com",
//     name: "John Doe",
//     password: "test1234",
//     discord: "example",
//     subscription: "VIP+",
//     lessonsCompleted: [

//     ]
// },
// {
//     email: "example.gmail.com",
//     name: "John Doe",
//     password: "test1234",
//     discord: "example",
//     subscription: "VIP+",
//     lessonsCompleted: [

//     ]
// }

// ]

//     console.log(users[0].name);

//     console.log(users[0].name[0]);
    

    /**Sign Up User Challenge
     * 
     * Create a function that accepts the parameters
     * - email
     * - password
     * - name
     * - discord
     * - subscription
     * - lessonsCompleted
     * 
     * Inside the Sign Up function:
     * - Use those parameters to create a user object
     * - Push that object unto the "users" array
     * 
     */
    let users = []

    let userFunc = (user) =>{
        users.push(user)
    }

    userFunc({
        email:"ahah@gmail.com", 
        password: "test.123", 
        name: "Emmanuel Bedzo", 
        discord: "hhsysyhd", 
        subscription: "VIP+", 
        lessonsCompleted: [1, 2, 3]
    });
     
    console.log(users)

    