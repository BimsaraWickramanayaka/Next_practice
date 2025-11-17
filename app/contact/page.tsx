import ButtonComponent from "./button";

export default async function Contact() {
    console.log("Is this server or client?");

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    console.log(posts);

    return <div>
        <ButtonComponent />
    </div>
}