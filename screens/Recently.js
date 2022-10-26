import { Text, View,StyleSheet } from 'react-native'
export default function Recently() {
    return (<View style={styles.container}>
        <Text style={styles.text}>Tela de Vistos Recentemente</Text>
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
