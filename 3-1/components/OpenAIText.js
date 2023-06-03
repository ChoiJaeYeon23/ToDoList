import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const ChatScreen = ({ route }) => {
  const [question, setQuestion] = useState('');
  const [conversation, setConversation] = useState([]);

  const fetchAnswer = async (questionText) => {
    try {
      const prompt = questionText;
      const apikey = "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"
      const url = 'https://api.openai.com/v1/engines/text-davinci-003/completions'

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apikey}`
      };
      const data = {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.7,
      }

      const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
      })

      const result = await response.json()
      return result.choices[0].text
    } catch (err) {
      return "에러"
    }

  };

  //사용자가 입력한 값이랑 chatgpt api를 통해 받아온값이 다른 형식의 말풍선으로 보이게 하는 코드
  const submitQuestion = async () => {
    if (question.trim().length === 0) return;

    setConversation((prev) => [...prev, { type: 'question', content: question }]);
    setQuestion('');

    const answer = await fetchAnswer(question);
    setConversation((prev) => [...prev, { type: 'answer', content: answer.replace(/\n/g, '') }]);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.conversation}>
        {conversation.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              message.type === 'question' ? styles.question : styles.answer,
            ]}
          >
            <Text style={styles.message}>{message.content}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={(text) => setQuestion(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={submitQuestion}>
          <Text style={styles.submitButtonText}>↑</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conversation: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: '#bfdce3'
  },
  messageContainer: {
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
  
  },
  question: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff200',
  },
  answer: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  message: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 16,
  },
  submitButton: {
    backgroundColor: '#fff200',
    marginLeft: 8,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    width: '100%'
  },
});

export default ChatScreen;