import { StyleSheet,Dimensions } from "react-native";
import colors from "../../../constants/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    footerText: {
        color : colors.gray,
        fontSize: 16,
        textAlign: "center",
        marginTop: 15,
    },
    link: {
        color: colors.purple,
        fontWeight: "bold",
       
    }
});

export default styles;