import { StyleSheet } from 'react-native'
import colors from '../../constants/colors'
const styles = StyleSheet.create({
    items :{
        fontSize: 18,
        color:colors.blue,
        fontWeight:'bold',
        padding:8,
        paddingHorizontal:12,
        textTransform:'capitalize'
    },
    selectedItem:{
        color:colors.blue,
    },
    // ===================
    itemsContainer:{
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.blue,
        marginRight: 8,
        marginBottom: 14,
    },
    selectedItemsContainer:{
        borderColor:colors.grayCate,
        backgroundColor:colors.grayCate,
    }
})
export default styles