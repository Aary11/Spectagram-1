import  React,{Component} from 'react'; 
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabNavigator from './TabNavigator';
import Profile from '../Screens/Profile';

const Drawer=createDrawerNavigator()
export default class DrawerNavigator extends Component {
  render () {
return(
    <Drawer.Navigator>


<Tab.Screen name='Home' component={TabNavigator} />
<Tab.Screen name='Profile' component={Profile} />
</Drawer.Navigator>

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
