import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [selectedTodos, setSelectedTodos] = useState([]);

  const addTodo = () => {
    if (text === '') return;

    const newTodo = {
      id: Math.random().toString(),
      text: text
    };

    setTodos([...todos, newTodo]);
    setText('');
  };

  const toggleTodoSelection = (id) => {
    const isSelected = selectedTodos.includes(id);
    if (isSelected) {
      const updatedSelection = selectedTodos.filter(todoId => todoId !== id);
      setSelectedTodos(updatedSelection);
    } else {
      setSelectedTodos([...selectedTodos, id]);
    }
  };

  const removeSelectedTodos = () => {
    const updatedTodos = todos.filter(todo => !selectedTodos.includes(todo.id));
    setTodos(updatedTodos);
    setSelectedTodos([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>할 일 목록</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="할 일을 입력하세요"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>추가</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.todoList}>
        {todos.map(todo => (
          <View key={todo.id} style={styles.todoItemContainer}>
            <CheckBox
              checked={selectedTodos.includes(todo.id)}
              onPress={() => toggleTodoSelection(todo.id)}
            />
            <TouchableOpacity
              style={[
                styles.todoItem,
                selectedTodos.includes(todo.id) && styles.selectedTodoItem
              ]}
              onPress={() => toggleTodoSelection(todo.id)}
            >
              <Text style={styles.todoText}>{todo.text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {selectedTodos.length > 0 && (
        <TouchableOpacity style={styles.deleteButton} onPress={removeSelectedTodos}>
          <Text style={styles.deleteButtonText}>선택 삭제</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8
  },
  addButton: {
    marginLeft: 8,
    backgroundColor: '#007bff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  todoList: {
    flex: 1
  },
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center'
  },
  todoItem: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 4
  },
  selectedTodoItem: {
    backgroundColor: '#cce5ff'
  },
  todoText: {
    fontSize: 16
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default TodoList;