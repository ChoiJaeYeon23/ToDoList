import OpenAIText from '../components/OpenAIText'
import { Button, View, Text } from "react-native"

const Gpt = (props) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{
        fontSize: 30
      }}> 채팅창 </Text>
      <OpenAIText />
      <Button
        title='메뉴화면으로 돌아가기'
        color="#fcb3f1"
        onPress={() => {
          props.navigation.navigate("Menu")
        }}
      />
    </View>
  )
}

export default Gpt