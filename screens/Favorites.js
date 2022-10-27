import { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { FavoriteContext } from '../contexts/FavoriteContext';
import Card from '../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favorites() {
    const { listarFavoritos } = useContext(FavoriteContext)
    const listaDeFavoritos = listarFavoritos();
    const columns = 3

    console.log('renderizou fav')
    if (listaDeFavoritos.length == 0) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>Você ainda não favoritou nenhum filme!</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: '#111', flex: 1 }}>
            <Text style={styles.text}>Favoritos</Text>
            <FlatList key={'_'} numColumns={columns} vertical data={listaDeFavoritos} renderItem={({ item }) => {
                return (
                    <View style={styles.item}>
                        <Card filme={item} />
                    </View>
                )
            }
            } keyExtractor={(item) => item.id} />
        </SafeAreaView>
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
        marginTop: 10,
        alignSelf: 'center'
    },
    item: {
        alignItems: "center",
        backgroundColor: "#111",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis: 0
    }
});