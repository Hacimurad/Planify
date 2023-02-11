import { StyleSheet } from 'react-native';
import  colors  from '../../constants/colors';


const styles = StyleSheet.create({
    outline: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.black,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors.gray,
        fontSize: 16,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});

export default styles;