

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

    let userFunc = ( email, password, name, discord, subscription, lessonsCompleted)   => {
        user = {
            email: email,
            name: name,
            password: password,
            discord: discord,
            subscription: subscription,
            lessonsCompleted: lessonsCompleted
        }

        users.push(user)
    }

    userFunc("ahah@gmail.com", "test.123", "Emmanuel Bedzo", "hhsysyhd", "VIP+", [1, 2, 3]);
     
    console.log(users)

     userFunc("appph@gmail.com", "test.459", "Delsi  Bedzo", "jsyshdh", "VIP", [5, 9, 7]);