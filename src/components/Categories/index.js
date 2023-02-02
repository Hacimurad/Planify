import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const Categories = ({ categories,selectedCategory,onCategoryPress}) => {
    return (

        <FlatList 
            horizontal
            data={categories}
            keyExtractor = {item => String(item.value)}
            showsHorizontalScrollIndicator={false}
            style={{marginHorizontal:24}}
            renderItem = {({ item}) =>{
               const selected = selectedCategory === item.value;
               const displayName=item?.label;
                return  (
                        <TouchableOpacity onPress={() => onCategoryPress(item)}  style={[styles.itemsContainer,selected  ? styles.selectedItemsContainer:{}]}>
                               <Text style={[styles.items,selected  ? styles.selectedItem:{}]}>{displayName}</Text>
                        </TouchableOpacity>
                     
                    )
            }} />

    );
}


export default React.memo(Categories);