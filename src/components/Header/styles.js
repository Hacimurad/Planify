import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.purple,
    },

});

export default styles;