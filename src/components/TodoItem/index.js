// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, onDelete} = props
  const {title, id} = item
  const onDel = () => {
    onDelete(id)
  }
  return (
    <li className="li-container">
      <p className="para">{title}</p>
      <button className="del-btn" type="button" onClick={onDel}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
