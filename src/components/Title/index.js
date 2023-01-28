import React from "react";
import {Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Title=({children})=>{
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default React.memo(Title) ;
