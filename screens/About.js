import { Text, View, StyleSheet, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre o time</Text>
      <Text style={styles.text}>Dream Team🚀</Text>
      <ScrollView contentContainerStyle={{ paddingBottom: 25 }} style={{ marginTop: 10, width: '100%', height: '100%', flexDirection: 'column' }}>
        <View style={styles.imageView}>
          <Image resizeMode='contain' style={styles.image} source={require('../assets/lucas.jpg')} />
          <Text style={styles.infoText}>Lucas Pereira de Oliveira</Text>
          <Text style={styles.infoText}>RM 86419</Text>

          <Image resizeMode='contain' style={styles.image} source={require('../assets/diego.jpg')} />
          <Text style={styles.infoText}>Diego Caruba do Carmo</Text>
          <Text style={styles.infoText}>RM 84197</Text>

          <Image resizeMode='contain' style={styles.image} source={require('../assets/hugo.jpg')} />
          <Text style={styles.infoText}>Victor Hugo Aguillar Xavier</Text>
          <Text style={styles.infoText}>RM 84250</Text>

          <Image resizeMode='contain' style={styles.image} source={require('../assets/matheus.jpg')} />
          <Text style={styles.infoText}>Matheus Henrique Borges dos Santos</Text>
          <Text style={styles.infoText}>RM 86417</Text>

          <Image resizeMode='contain' style={styles.image} source={require('../assets/Giovanna.jpg')} />
          <Text style={styles.infoText}>Giovanna Granzote Ligeri</Text>
          <Text style={styles.infoText}>RM 84614</Text>

          <Image resizeMode='contain' style={styles.image} source={require('../assets/vitao.jpg')} />
          <Text style={styles.infoText}>Vitor Barbosa de Lima Santos</Text>
          <Text style={styles.infoText}>RM 84902</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30
  },
  infoText: {
    color: 'white',
  },
  image: {
    borderRadius: 80,
    flex: 1,
    width: 150,
    height: 150,
    marginBottom: 10,
    marginTop: 40
  },
  imageView: {
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
  }
});

