import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {itemsList: initialTodosList}

  onDelete = id => {
    const {itemsList} = this.state
    const filterList = itemsList.filter(each => each.id !== id)
    this.setState({itemsList: filterList})
  }

  render() {
    const {itemsList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head">Simple Todos</h1>
          <ul className="list-container">
            {itemsList.map(each => (
              <TodoItem item={each} key={each.id} onDelete={this.onDelete} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
