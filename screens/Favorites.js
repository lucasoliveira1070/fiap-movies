import { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import { FavoriteContext } from '../contexts/FavoriteContext';

export default function Favorites() {
    const { listarFavoritos } = useContext(FavoriteContext)
    
    useFocusEffect(() => {
        listarFavoritos();
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Favoritos</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#FFF'
    }
});