import { StyleSheet } from 'react-native';
import  colors  from '../../constants/colors';


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.purple,
        borderRadius: 3,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 3,
        marginRight: 15,
    },
    innerSquare: {
        backgroundColor: colors.purple,
        width: 10,
        height: 10,
    },
    checkedBox: {
        borderWidth: 2,
    }
});

export default styles;