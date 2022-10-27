import { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native'
import { FavoriteContext } from '../contexts/FavoriteContext';
import Card from '../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Recently() {
    const { listarUltimosVisitados } = useContext(FavoriteContext);
    const listaUltimosVisitados = listarUltimosVisitados();

    function render({ item }) {
        return (
            <View style={styles.item}>
                <Card filme={item} />
            </View>
        )
    }

    console.log('renderizou recente')

    return (
        <SafeAreaView style={{ backgroundColor: '#111', flex: 1 }}>
            <Text style={styles.text}>Vistos Recentemente</Text>
            <FlatList
                key={'*'}
                vertical
                initialNumToRender={5}
                data={listaUltimosVisitados}
                renderItem={render}
                keyExtractor={(item) => item.id} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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