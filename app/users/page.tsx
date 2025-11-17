export default async function Contact() {
    console.log("Is this server or client?");

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);

    return (
        <div>
            <h1>User list</h1>
            <ul>
                {users.map((user: {id: number, name: string}) => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}