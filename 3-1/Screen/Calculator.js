import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleNumberPress = (number) => {
    setExpression(prevExpression => prevExpression + number);
  };

  const handleOperatorPress = (operator) => {
    setExpression(prevExpression => prevExpression + operator);
  };

  const handleClearPress = () => {
    setExpression('');
  };

  const handleCalculatePress = () => {
    try {
      const evalResult = eval(expression);
      setExpression(evalResult.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{expression}</Text>

      <View style={styles.numberPad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(number => (
          <TouchableOpacity
            key={number}
            style={styles.numberButton}
            onPress={() => handleNumberPress(number)}
          >
            <Text style={styles.numberButtonText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.operatorRow}>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleOperatorPress('+')}
        >
          <Text style={styles.operatorButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleOperatorPress('-')}
        >
          <Text style={styles.operatorButtonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleOperatorPress('*')}
        >
          <Text style={styles.operatorButtonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operatorButton}
          onPress={() => handleOperatorPress('/')}
        >
          <Text style={styles.operatorButtonText}>/</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.clearButton}
        onPress={handleClearPress}
      >
        <Text style={styles.clearButtonText}>다 지우기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.calculateButton}
        onPress={handleCalculatePress}
      >
        <Text style={styles.calculateButtonText}>=</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expression: {
    fontSize: 24,
    marginBottom: 10,
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  numberButton: {
    width: '33%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },
  numberButtonText: {
    fontSize: 24,
  },
  operatorRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  operatorButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fcb3f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  operatorButtonText: {
    color: 'white',
    fontSize: 24,
  },
  clearButton: {
    padding: 10,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 18,
  },
  calculateButton: {
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Calculator;