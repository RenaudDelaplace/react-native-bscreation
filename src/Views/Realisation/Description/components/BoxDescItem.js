import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, FlatList } from 'react-native';

const windowWidth = Dimensions.get('window').width

const IMAGE_WIDTH = windowWidth - (windowWidth * 0.10)

const styles = StyleSheet.create({
    container: {
        flex: .9,
        width: windowWidth,
        marginTop: '2%',
    },
    header: {
        flex: 1,
        maxHeight: 80,
        backgroundColor: '#fff',
        width: '90%',
        marginLeft: '5%',
        marginTop: '5%',
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 18,
        padding: 10,
        fontWeight: 'bold',
        color: '#FF7400',
        alignSelf: 'center'
    },
    titleText: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        fontWeight: 'bold',
        color: '#3E3E3E',
        alignSelf: 'center'
    },
    descContainer: {
        flex: 1,
        width: '90%',
        marginLeft: '5%',
        marginBottom: '5%',
        backgroundColor: '#fff',
    },
})

const BoxDescItem = ({ author, date, images, desc }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>
                        Date
                </Text>
                    <Text style={styles.titleText}>
                        {date}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>
                        Author
                </Text>
                    <Text style={styles.titleText}>
                        {author}
                    </Text>
                </View>
            </View>
            <FlatList
                data={images}
                renderItem={({ item }) =>
                    <Image source={{ uri: item.src }} style={{ flex: 1, width: IMAGE_WIDTH }} />
                }
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                snapToInterval={IMAGE_WIDTH}
                bounces={false}
                snapToAlignment="center"
                decelerationRate="fast"
                style={{width: '90%', marginLeft: '5%' }}
            />
            <View style={styles.descContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.title]}>Description</Text>
                </View>
                <View style={{ flex: 4 }}>
                    <ScrollView>
                        <Text style={[styles.titleText, { textAlign: "center" }]}>{desc}</Text>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
};

export default BoxDescItem;
