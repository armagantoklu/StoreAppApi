import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Loading from './components/Loading';
import Login from './pages/Login'
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
const Stack = createNativeStackNavigator();
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const userSessionData = useSelector(data => data.user);
  const userSessionLoading = useSelector(data => data.aLoading);

  return (
    <NavigationContainer>
      {userSessionLoading
        ? (
          <Loading />
        )
        :
        !userSessionData
          ?
          <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name='login' component={Login} options=
              {{
                headerShown: false
              }} />
          </Stack.Navigator>
          :
          <>
            <Stack.Navigator>
              <Stack.Screen name='profile' component={Profile} options=
                {{
                  title: 'Dükkan',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#61A4BC' },
                  headerTitleStyle: { color: 'white' },
                  headerRight: () => (
                    <Icon name='sign-out' size={20} color='white' onPress={() => { dispatch({ type: 'SET_USER', payload: { user: null } }) }} />
                  )
                }} />
              <Stack.Screen name='details' component={Details} options=
                {{
                  title: 'Detay',
                  headerTitleAlign: 'center',
                  headerStyle: { backgroundColor: '#61A4BC' },
                  headerTitleStyle: { color: 'white' }
                }} />
            </Stack.Navigator>
          </>

      }

    </NavigationContainer>
  )
}
export default App;