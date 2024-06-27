export function AddTodoMenu({ isEmpty, onChange, onAddClick, nextTodoContent}){
    return (
        <div id='addTodoMenu'>
            <input 
            id='addTodoInput' 
            type='text' 
            placeholder='Add Todo Item' 
            onChange={onChange} 
            value={nextTodoContent}/>
            <button 
            disabled={isEmpty ? true : false}
            onClick={onAddClick}
            >Add Todo</button>
        </div>
    )
}