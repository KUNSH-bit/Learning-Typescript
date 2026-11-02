interface User {
  readonly DbId: number, email: string, UserId: number, googleId?: string
  startTrail: () => string
  // startTrail(): string  also valid way
}

const kunsh: User = {
  DbId: 0,
  email: 'example@g.com',
  UserId: 1,
  startTrail: () => {return 'Trail started'},
  githubToken: 'github'
}

                    kunsh.email = 'newemail@example.com'



    // also valid way to add to interface
    interface User {  // reopening of interface
  githubToken?: string
}

interface Admin extends User {
  role: 'admin'
}



export {}