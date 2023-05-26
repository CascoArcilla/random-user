import '../styles/UserItem.css'

export default function UserItem({ user, setName }){
    return (
        <div key={user.name} className="content" onClick={() => setName(user.name)}>
            <p>{user.name} <span className='apellido'>{user.apellido}</span></p>
        </div>
    );
}
