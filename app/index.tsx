import TodoCreator from '@/layout/TodoCreator'
import TodoList from '@/layout/TodoList'
import { Todo } from '@/types/todo'
import { useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import { COLORS } from '../constant/ui'
import Header from '../layout/index'

const defaltTodo: Todo[] = [
  { id: 1, title: 'Buy milk', isCompleted: false },
  { id: 2, title: 'Buy cacao', isCompleted: true },
  { id: 3, title: 'Buy butter', isCompleted: false }
]

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>([...defaltTodo])

  const completedTodos = todos.filter((todo) => todo.isCompleted)
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
      <TodoCreator
        onAddTodo={(title) => {
          setTodos([...todos, { id: todos.length + 1, title, isCompleted: false }])
        }}
      />
      <TodoList todos={todos} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.PRIMARY_BCKG }
})
