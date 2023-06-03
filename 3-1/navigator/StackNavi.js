import { createStackNavigator } from '@react-navigation/stack'
import Menu from '../Screen/Menu'
import User from '../Screen/User'
import TodoList from '../Screen/TodoList'
import Gpt from '../Screen/Gpt'
import Calendar from '../Screen/Calendar'
import Calculator from '../Screen/Calculator'

const Stack = createStackNavigator();


const StackNavi = () => {
    return (
        <Stack.Navigator
            initialRouteName='TodoList'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="TodoList" component={TodoList}
                options={{
                    title: '메인 화면',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />

            <Stack.Screen name="Menu" component={Menu}
                options={{
                    title: '메뉴',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />

            <Stack.Screen name="User" component={User}
                options={{
                    title: 'User',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />
            <Stack.Screen name="Gpt" component={Gpt}
                options={{
                    title: '챗봇',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />
            <Stack.Screen name="Calendar" component={Calendar}
                options={{
                    title: '달력',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />
            <Stack.Screen name="Calculator" component={Calculator}
                options={{
                    title: '계산기',
                    headerShown: true,
                    headerStyle: { backgroundColor: '#9acd32' },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavi