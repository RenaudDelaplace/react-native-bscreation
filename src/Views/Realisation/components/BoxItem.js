import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"

import { navigate } from "../../../components/Navigation/components/NavigationRef"

const windowWidth = Dimensions.get('window').width
const prefix = Platform.OS === "android" ? "md-" : "ios-"
const SIZE = 30

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        justifyContent: "center",
        height: '93%',
    },
    boxHeader: {
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
    },
    title: {
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
        color: '#FF7400',
        alignSelf: 'center',
    },
    image: {
        width: '90%',
        height: '60%',
        marginLeft: '5%',
        resizeMode: 'cover',
    },
    descContainer: {
        flex: 1,
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: '5%',
        marginBottom: '5%',
        flexDirection: 'row',
    },
    descTitle: { 
        color: '#ff7400', 
        fontSize: 16, 
        fontWeight: 'bold',
    },
    descText: { 
        fontSize: 16,
    }
})

const BoxItem = (item) => {
    const navigationToDescription = () => {
        navigate('Description', { title: item.title, author: item.author, date: item.date, image: item.img, desc: item.desc })
    }
    return (
        <View style={styles.container}>
            <View style={styles.boxHeader}>
                <Text style={styles.title}>
                    {item.title}
                </Text>
            </View>
            <Image source={{uri: item.img}} style={styles.image} />
            <View style={styles.descContainer}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.descTitle}>Author</Text>
                        <Text style={styles.descText}>{item.author}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.descTitle}>Date</Text>
                        <Text style={styles.descText}>{item.date}</Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity activeOpacity={.9} onPress={() => { navigationToDescription() }}>
                        <View style={{ backgroundColor: '#ff7400', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <Icon name={`${prefix}add`} size={SIZE} style={{ color: '#fff' }} />
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Description</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
};

export default BoxItem;
