import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Title from '../components/Title'
import Card from '../components/Card'
import useAxios from 'axios-hooks';
import { useContext } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';

export default function Home() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"
  const [{ data, loading }] = useAxios(url)
  const { quantidade } = useContext(FavoriteContext)

  if (loading) return <Text>carregando filmes...</Text>

  const filmes = data.results

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.heroimage}
          source={{ uri: 'https://image.tmdb.org/t/p/w780/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg' }} />
      </View>
      <Title text="Filmes em Alta" />

      <FlatList horizontal data={filmes} renderItem={({ item }) => <Card filme={item} />} />

      <Title text={"Favoritos " + quantidade} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#111',
    padding: 8,
  },
  section: {
    flexDirection: 'row'
  },
  heroimage: {
    width: '100%',
    height: 200,
    zIndex: -1
  },
  button: {
    width: 150,
    marginTop: -15,
    backgroundColor: '#F06',
    padding: 5,
    color: '#FFF',
    textAlign: 'center',
    borderRadius: 5,
    alignSelf: 'center'
  }

});



