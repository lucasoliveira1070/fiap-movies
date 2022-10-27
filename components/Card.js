import { useContext, useState } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { FavoriteContext } from '../contexts/FavoriteContext'
import { useNavigation } from '@react-navigation/native'

export default function Card({ filme }) {
  const poster = { uri: 'https://www.themoviedb.org/t/p/w200/' + filme.poster_path }
  const [favorito, setFavorito] = useState(false)
  const { adicionarFavorito, removerFavorito, adicionarUltimosVisitados } = useContext(FavoriteContext)
  const navigation = useNavigation();

  function favoritar() {
    setFavorito(!favorito)
    if (!favorito) {
      adicionarFavorito(filme)
    } else {
      removerFavorito(filme)
    }
  }
  const handleMovieDetail = () => {
    adicionarUltimosVisitados(filme);
    navigation.navigate('Details', { filme: filme })
  }

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => favoritar()}>
        <MaterialIcons name={favorito ? 'favorite' : 'favorite-border'} size={20} color={favorito ? '#F06' : '#FFF'} />
      </TouchableOpacity>
      <Image style={styles.poster} source={poster} />
      <Text style={styles.vote}>
        <MaterialIcons name='star' size={20} color='gold' />
        {filme.vote_average.toFixed(1)}
      </Text>
      <TouchableOpacity onPress={handleMovieDetail}>
        <Text style={{
          width: 100,
          marginTop: 5,
          backgroundColor: '#F06',
          padding: 5,
          color: '#FFF',
          textAlign: 'center',
          borderRadius: 5,
          alignSelf: 'center',
        }}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  card: {
    width: 100,
    height: 220,
    backgroundColor: '#212121',
    borderRadius: 5,
    margin: 8,
    alignItems: 'center'
  },

  poster: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  vote: {
    color: '#FFF',
    opacity: 0.6
  }
})