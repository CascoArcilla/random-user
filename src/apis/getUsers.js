export default async function getUsers(){
    const url = 'https://randomuser.me/api/?results=10';
    const results = await fetch(url);
    const users = await results.json();

    return users;
}