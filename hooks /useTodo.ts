import { useState } from 'react'
import { Vibration } from 'react-native'

import { Todo } from '@/types/todo'

const defaltTodo: Todo[] = [
  { id: 1, title: 'Buy milk', isCompleted: false },
  { id: 2, title: 'Buy cacao', isCompleted: true },
  { id: 3, title: 'Buy butter', isCompleted: false }
]
const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([...defaltTodo])
  const completedTodos = todos.filter((todo) => todo.isCompleted)

  const onPressDelete = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    Vibration.vibrate(50)
  }

  const onCheckTodo = (id: Todo['id']) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    )
  }
  const onAddTodo = (title: Todo['title']) => {
    setTodos([...todos, { id: Number(new Date()), title, isCompleted: false }])
  }

  const onUpdateTitle = (id: Todo['id'], title: Todo['title']) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)))
  }

  return {
    todos,
    completedTodos,
    onPressDelete,
    onCheckTodo,
    onAddTodo,
    onUpdateTitle
  }
}

export default useTodo
