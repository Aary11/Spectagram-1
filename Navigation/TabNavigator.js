import  React,{Component} from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import Post from '../Screens/Post';


const Tab=createBottomTabNavigator()
export default class TabNavigator extends Component {
  render () {
return(
    <Tab.Navigator>


<Tab.Screen name='Feed' component={Feed} />
<Tab.Screen name='Post' component={Post} />
</Tab.Navigator>

)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
