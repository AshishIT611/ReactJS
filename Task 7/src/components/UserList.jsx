import React from "react";
const UserList=()=>{
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
    ];
    return (
        <div>
            <h1>User List</h1>
            <ol>
                {users.map((user)=>{
                    return <li key={user.id}>{user.name} - Age:{user.age}</li>
                })}
            </ol>
        </div>
    )
}
export default UserList;