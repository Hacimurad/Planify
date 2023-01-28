import { StyleSheet } from 'react-native';
import  colors  from '../../constants/colors';


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
        padding: 12,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    blueBg: {
        backgroundColor: colors.blue,
    },
});

export default styles;