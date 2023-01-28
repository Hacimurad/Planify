import React from "react";
import {Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button=({children,type,onPress})=>{
    return(
       <TouchableOpacity onPress={onPress} style={[styles.container,type === 'blue'? styles.blueBg : {}]}>
         <Text style={styles.text}>{children}</Text>
       </TouchableOpacity>
    )
}

export default React.memo(Button) ;
