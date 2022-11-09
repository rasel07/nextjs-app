import React, { useState } from 'react'


const Users  = [
    {
        name: "Person1",
        id: 1
    },
    {
        name: "Person2",
        id: 2
    },

    {
        name: "Person3",
        id: 3
    },
    {
        name: "Person4",
        id: 4
    },
    {
        name: "Person5",
        id: 5
    },
    {
        name: "Person6",
        id: 6
    },
    {
        name: "Person7",
        id: 7
    },
    {
        name: "Person8",
        id: 8
    },
    {
        name: "Person9",
        id: 9
    },
    {
        name: "Person10",
        id: 10
    },
    {
        name: "Person11",
        id: 11
    }
]
const Practice = () => {

    const [filterUsers, setfilterUsers] = useState([]);
    var tempUser = [];

    while(tempUser.length < 8){
        var person = Math.floor((Math.random() * Users.length) + 1);
        if(tempUser.indexOf(person) === -1){tempUser.push(Users[person])}  
      }
    
    //   setfilterUsers([tempUser])
    console.log(`This is state value${filterUsers}`);
    console.log(`This is TempArray value${tempUser}`);
  return (
    <div>
        <ul>
            {
                tempUser.map((user) => {
                    console.log(user);
                    <li key={user && user.id}>The : { user  && user.name}</li>
                })
            }
        </ul>
    </div>
  )
}

export default Practice