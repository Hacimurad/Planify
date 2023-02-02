import { StyleSheet } from 'react-native';
import  colors  from '../../constants/colors';


const styles = StyleSheet.create({
    title: {
        color: colors.black,
        fontSize: 24,
        fontWeight: 'bold',
      
    },
    thin: {
        fontSize: 24,
        fontWeight: '300',
        color: colors.purple,
        paddingHorizontal: 24,
    }
});

export default styles;