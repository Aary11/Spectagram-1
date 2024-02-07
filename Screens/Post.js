import  React,{Component} from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

export default class Post extends Component {
  render () {
return(
    <Text> Post </Text>
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
