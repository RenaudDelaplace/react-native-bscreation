import React, { useState } from 'react'
import { ScrollView, View, Text, Platform, Dimensions, TextInput, StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import MapView, { Marker } from 'react-native-maps';

import Header from '../../components/Navigation/Header';

const styles = StyleSheet.create({
    color: {
        color: "#fff"
    },
    box: {
        padding: 15,
        marginTop: 5,
        backgroundColor: '#3E3E3E',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
    icon: {
        color: '#fff',
        marginRight: 10,
    },
    adresseText: { 
        color: '#ff7400', 
        fontSize: 18, 
        fontWeight: 'bold'
     },
})

const Contact = ({ navigation }) => {
    let prefix = Platform.OS === "android" ? "md-" : "ios-"
    const windowHeight = Dimensions.get('window').height - 130

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const coordinate = {
        latitude: 48.84346823447883,
        longitude: 7.60743135582357,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    const markerCoordinate = {
        latitude: 48.84346823447883, 
        longitude: 7.60743135582357,
    }

    return (
        <View>
            <Header back={true} backText='Nous contacter' navigation={navigation} />

            <View style={{ height: windowHeight }}>
                <ScrollView>
                    <View style={styles.box}>
                        <Text style={styles.text}>
                            Un renseignement ?
                    </Text>
                        <Text style={styles.text}>
                            Un devis ?
                    </Text>
                        <Text style={styles.text}>
                            Laissez-nous un <Text style={{ color: '#ff7400', fontSize: 22 }}>message</Text>
                        </Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={{ color: '#ff7400', fontSize: 20 }}>Nos réseaux sociaux</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name={`${prefix}logo-facebook`} size={40} style={styles.icon} onPress={() => console.log('press')} />
                            <Icon name={`${prefix}logo-instagram`} size={40} style={styles.icon} onPress={() => console.log('press')} />
                        </View>
                    </View>

                    <View style={[styles.box], { backgroundColor: "#3E3E3E" }}>
                        <MapView
                            style={{ height: 200, width: '100%', padding: 0 }}
                            initialRegion={{...coordinate}}
                        >
                            <Marker coordinate={{ ...markerCoordinate }} />
                        </MapView>
                    </View>

                    <View style={[styles.box, {backgroundColor: "#3E3E3ECC"}]}>
                        <View style={{ flex: 1, marginBottom: 20 }}>
                            <Text style={[styles.adresseText, {fontSize: 18}]}>Adresse</Text>
                        </View>
                        <View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.adresseText}>Show room</Text>
                                <Text style={style.color}>3 Place de la République, 67350 PFAFFENHOFFEN</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.adresseText}>Siège social</Text>
                                <Text style={style.color}>1a rue du moulin, 67330 obermodern</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.adresseText}>Téléphone</Text>
                                    <Text style={style.color}>00.00.00.00.00</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.adresseText}>Adresse email</Text>
                                    <Text style={style.color}>bscreation67@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => setName(text)}
                            placeholder="Votre nom"
                        /><TextInput
                            style={styles.input}
                            onChangeText={(text) => setName(text)}
                            placeholder="Votre nom"
                        />
                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

export default Contact