import { StyleSheet } from 'react-native';
import  colors  from '../../constants/colors';


const styles = StyleSheet.create({
    input: {
        backgroundColor: colors.lightGray,
        paddingHorizontal: 24,
        paddingVertical: 16,
        borderRadius: 10,
        color: colors.black,
        marginVertical: 8,
        fontSize: 16,
    },
    outline: {
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.black,
        marginHorizontal: 24,
    },
});

export default styles;