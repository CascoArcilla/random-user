import '../styles/UserItem.css'

export default function UserItem({ user }){
    return (
        <div key={user.name} className="content">
            <p>{user.name} <span className='apellido'>{user.apellido}</span></p>
        </div>
    );
}
