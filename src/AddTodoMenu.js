export function AddTodoMenu({ isEmpty, onChange}){
    return (
        <div id='addTodoMenu'>
            <input id='addTodoInput' type='text' placeholder='Add Todo Item' onChange={onChange}/>
            <button disabled={isEmpty ? true : false}>Add Todo</button>
        </div>
    )
}