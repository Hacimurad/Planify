import { StyleSheet} from "react-native";
import colors from "../../../constants/colors";



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 30,
        backgroundColor: colors.white,
    },
    image: {
        width: "100%",
        flex: 1,
    },
    title: {
    color: colors.black,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    },
    subtitle: {
    color: colors.gray,
    textAlign: "center",
    fontSize: 15,
    marginVertical: 15,
    },
});

export default styles;