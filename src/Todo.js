export default function Todo({item, onDeleteClick}){
    return(
        <div className='todo-item'>
            <li>{item.content}</li>
            <div>
                <button 
                onClick={() => onDeleteClick(item.id)}
                >Delete</button>
                <button>Edit</button>
                <input type='checkbox' />
            </div>
        </div>
    )
}