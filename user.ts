export interface User {
    id: string;
    pin: string;
    balance: number;
  }
  // Generate random user data

  export function generateRandomUserData(): User[] {
    const users: User[] = [
        {
          id: 'saad01',
          pin: '1234',
          balance: 2500,
        },
        {
          id: 'jahanzaib01',
          pin: '1234',
          balance: 3200,
        },
        {
            id: `khalid`,
            pin: `1234`,
            balance:1250,
        },
        {
            id: `waleed`,
            pin: `5678`,
            balance:5855
        },
        {
            id: `attia`,
            pin: `1414`,
            balance: 100,
        },
    ];
   // Loop 5 times to create 5 random user objects
    for (let i = 1; i <= 5; i++) {
      const user: User = {
        id: `user${i}`,
        pin: `${i}${i}${i}${i}`,
        balance: Math.floor(Math.random() * 5000) + 1000,
      };
  
      users.push(user);
    }
  
    return users;
  }
  