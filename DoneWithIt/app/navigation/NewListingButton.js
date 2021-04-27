import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" color={colors.white} size={35}/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius:40,
        borderWidth: 10,
        bottom:30,
        height:80,
        justifyContent:'center',
        width: 80
    }
})

export default NewListingButton;