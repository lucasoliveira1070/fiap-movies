import { View, Text, StyleSheet } from 'react-native'

export default function Title(props){
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   titleContainer:{
    borderLeftWidth: 4,
    borderColor: '#F06',
    paddingLeft: 3
  },
  title:{
    fontSize: 20,
    color: '#FFF',
  }
})