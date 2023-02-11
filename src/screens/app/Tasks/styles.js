import { StyleSheet} from "react-native";
import colors from "../../../constants/colors";



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 24,
        marginVertical: 6,

    },
    taskTitle: {
        color: colors.black,
        marginLeft: 8,
    },
    checked: {
        textDecorationLine: "line-through",
    },
});

export default styles;