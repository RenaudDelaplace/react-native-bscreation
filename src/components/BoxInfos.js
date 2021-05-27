import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '85%',
        marginLeft: '7.5%',
        marginTop: 10,
        backgroundColor: '#FF7400',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        backgroundColor: '#fff',
        borderRadius: 99,
        padding: 6,
        transform: [
            {
                translateY: -35
            },
        ],
    },
    image: {
        height: 60,
        width: 60,
        resizeMode: 'center',
        transform: [
            {
                scale: 2.5
            }
        ],
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    },
    desc: {
        color: '#fff',
        fontWeight: 'bold'
    },
})

const BoxInfos = ({ item }) => {
    const first = item.id == 1 ? true : false
    
    return (
        <View style={[styles.container, (first) ? { marginTop: 50 } : {}]}>
            <View style={styles.imageContainer}>
                <Image source={item.src} style={styles.image} />
            </View>
            <View style={{ transform: [{ translateY: -30 }] }}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{ paddingHorizontal: 30 }}>
                    <Text style={styles.desc}>{item.desc}</Text>
                </View>
            </View>
        </View>
    )
};

export default BoxInfos;
