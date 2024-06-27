export default function Todo({item, onDeleteClick, onEditClick, isEditing, editId}){

    return(
        <div className='todo-item'>
            {isEditing && editId === item.id ? 
            <input defaultValue={item.content}/> :
            <li>{item.content}</li> 
            }
            <div>
                <button 
                onClick={() => onDeleteClick(item.id)}
                >Delete</button>
                <button
                onClick={(e) => onEditClick(e, item.id)}
                >{isEditing && editId === item.id ? 'Save' : 'Edit'}</button>
                <input type='checkbox' />
            </div>
        </div>
    )
}