export default function Todo({item}){
    return(
        <div className='todo-item'>
            <li>{item.content}</li>
            <div>
                <button>Delete</button>
                <button>Edit</button>
                <input type='checkbox' />
            </div>
        </div>
    )
}