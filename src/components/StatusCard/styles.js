import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const getStyles = (type) => StyleSheet.create({
    container: {
        backgroundColor: type==='error' ? colors.lightRed : colors.lightGray,
        padding: 12,
        borderRadius: 15,
        marginRight: 10,
        width: '32%',
    },
    label: {
        color:  type==='error' ? colors.red : colors.blue,
        fontSize: 12,
        marginBottom: 13,
    },
    count: {
        color: type==='error' ? colors.red : colors.blue,
        fontSize: 30,
        fontWeight: '500',
        marginBottom: 10,
    },

});

export default getStyles;