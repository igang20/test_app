import { StatusBar, StyleSheet, View } from 'react-native'

import { COLORS } from '../constant/ui'
import Header from '../layout/index'
import useTodo from '@/hooks /useTodo'
import TodoCreator from '@/layout/TodoCreator'
import TodoList from '@/layout/TodoList'
import { Todo } from '@/types/todo'

const defaltTodo: Todo[] = [
  { id: 1, title: 'Buy milk', isCompleted: false },
  { id: 2, title: 'Buy cacao', isCompleted: true },
  { id: 3, title: 'Buy butter', isCompleted: false }
]

export default function Index() {
  const { todos, onPressDelete, onCheckTodo, onAddTodo, onUpdateTitle, completedTodos } = useTodo()

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Header totalTodos={todos.length} completedTodos={completedTodos.length} />
      <TodoCreator onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onCheckTodo={onCheckTodo}
        onDeleteTodo={onPressDelete}
        onUpdateTodoTitle={onUpdateTitle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.PRIMARY_BCKG }
})
