import { Todo } from '@/types/todo'
import React from 'react'
import { FlatList, View } from 'react-native'
import TodoItem from '../TodoItem'

type TodoListProps = {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <TodoItem {...item} />}
      />
    </View>
  )
}

export default TodoList
