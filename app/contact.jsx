import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const contact = () => {
  return (
    <View style={styles.container}>
      <Text >Here</Text>
    </View>
  )
}

export default contact
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 30,
    textAlign:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    padding: 40,
    marginBottom: 120
  },
  link: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    // textDecorationLine:'underline',
    // width:'100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    cursor: "pointer",
  },
  button:{
    height:60,
    borderRadius:20,
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:6,
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding:4
  }
})