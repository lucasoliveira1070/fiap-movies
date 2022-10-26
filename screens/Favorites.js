import { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { FavoriteContext } from '../contexts/FavoriteContext';
import Card from '../components/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favorites() {
    const { listarFavoritos } = useContext(FavoriteContext)
    const listaDeFavoritos = listarFavoritos();
    const columns = 3

    return (
        <SafeAreaView style={{backgroundColor:'#111',flex:1}}>
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
    text: {
        color: '#FFF'
    },
    item: {
        alignItems: "center",
        backgroundColor: "#111",
        flexGrow: 1,
        margin: 4,
        padding: 20,
        flexBasis:0
    }
});