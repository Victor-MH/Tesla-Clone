import { StyleSheet } from 'react-native'

const PairedBtnsStyle = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        width: '90%',
        paddingVertical: 15,
        marginBottom: 25,
        borderRadius: 50,
        backgroundColor: 'grey'
    },
    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 12
    }
})

export default PairedBtnsStyle;