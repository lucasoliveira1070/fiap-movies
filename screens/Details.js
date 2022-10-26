import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Details() {
  const navigation = useNavigation()
  const route = useRoute();
  const { filme } = route.params;
  const poster = { uri: 'https://www.themoviedb.org/t/p/w200/' + filme.poster_path }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalhes do Filme</Text>
      <View style={{
        flexDirection: 'row', width: '40%', backgroundColor: '#F06',
        marginBottom: 30, padding: 10, borderRadius: 12
      }}>
        <Image resizeMode='contain' style={styles.heroimage} source={poster} />
      </View>
      <View style={styles.viewDetail}>
        <Text style={styles.detail}>{filme.title}</Text>
        <Text style={styles.detail}>{filme.overview}</Text>
        <Text style={styles.detail}>{filme.release_date}</Text>
        <Text style={styles.detail}>{filme.vote_average}</Text>
      </View>
      <TouchableOpacity style={{ backgroundColor: '#F06', borderRadius: 10, padding: 8, marginTop: 20, width: 100 }} onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Voltar</Text>
      </TouchableOpacity>

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
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  heroimage: {
    width: '100%',
    height: 200,
    borderRadius: 12
  },
  viewDetail: {
    backgroundColor: '#333333',
    width: '80%',
    height: '40%',
    alignItems: 'center',
    borderRadius: 12
  },
  detail: {
    color: 'white',
    margin: 8
  }
});

