import React, { useState } from 'react'
import { ScrollView, View, Text, Platform, Dimensions, TextInput, StyleSheet, TouchableOpacity, Linking } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import MapView, { Marker } from 'react-native-maps';

import Header from "../../components/Navigation/Header"
import { Default } from "../../components/Mail/Email"

const styles = StyleSheet.create({
    color: {
        color: "#fff"
    },
    box: {
        padding: 15,
        marginBottom: 15,
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
    input: {
        borderBottomWidth: 2,
        padding: 15,
        fontSize: 16,
        marginBottom: 10,
        color: "#3E3E3E99",
        borderBottomColor: '#3E3E3E99',
    },
})

const Contact = ({ navigation }) => {
    let prefix = Platform.OS === "android" ? "md-" : "ios-"
    const windowHeight = Dimensions.get('window').height - 130

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

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
        <View style={{backgroundColor: "#D0D0D0"}}>
            <Header back={true} backText='Nous contacter' navigation={navigation} />
            <View style={{ height: windowHeight }}>
                <ScrollView>
                    <View style={{ flex: 1 }}>
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
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <Icon name={`${prefix}logo-facebook`} size={40} style={styles.icon} onPress={() => Linking.openURL("https://www.facebook.com/BS-Cr%C3%A9ation-1330346860445222/?ref=page_internal")} />
                                <Icon name={`${prefix}logo-instagram`} size={40} style={styles.icon} onPress={() => Linking.openURL("https://www.instagram.com/bs_creation_metallerie/?igshid=rhyp33490xh0")} />
                            </View>
                        </View>

                        <View style={[styles.box, { backgroundColor: "#3E3E3E" }]}>
                            <MapView
                                style={{ height: 200, width: '100%', padding: 0 }}
                                initialRegion={{ ...coordinate }}
                            >
                                <Marker coordinate={{ ...markerCoordinate }} />
                            </MapView>
                        </View>

                        <View style={[styles.box, { backgroundColor: "#3E3E3ECC", marginTop: 15 }]}>
                            <View style={{ flex: 1, marginBottom: 20 }}>
                                <Text style={[styles.adresseText, { fontSize: 18 }]}>Adresse</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.adresseText}>Show room</Text>
                                    <Text style={styles.color}>3 Place de la République, 67350 PFAFFENHOFFEN</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.adresseText}>Siège social</Text>
                                    <Text style={styles.color}>1a rue du moulin, 67330 obermodern</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.adresseText}>Téléphone</Text>
                                        <Text style={styles.color}>00.00.00.00.00</Text>
                                    </View>
                                    <View style={{ flex: 1.2 }}>
                                        <Text style={styles.adresseText}>Adresse email</Text>
                                        <Text style={styles.color}>bscreation67@gmail.com</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 30}}>
                            <Text style={{textAlign: 'center', fontSize: 16, color: '#ff7400', fontWeight: 'bold', marginBottom: 10}}>Contactez nous en nous envoyant un mail</Text>
                            <Text style={{textAlign: 'center', fontSize: 16, color: 'red', fontWeight: 'bold', marginBottom: 5}}>{errorMessage}</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setName(text)}
                                placeholder="Votre nom"
                                textContentType="name"
                                autoCompleteType="name"
                                keyboardType="name-phone-pad"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setPhone(text)}
                                placeholder="Votre numéro de téléphone"
                                textContentType="telephoneNumber"
                                autoCompleteType="tel"
                                keyboardType="phone-pad"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => setEmail(text)}
                                placeholder="Votre email"
                                textContentType="emailAddress"
                                autoCompleteType="email"
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={[styles.input, { paddingBottom: 30 }]}
                                onChangeText={(text) => setMessage(text)}
                                placeholder="Votre message"
                                multiline={true}
                                editable={true}
                            />
                            <View style={{ justifyContent: "center", alignItems: "center", transform:[{translateY: 10}]}}>
                                <TouchableOpacity activeOpacity={.9} onPress={() => {
                                    Default(name, phone, email, message, () => alert('send')).catch((e) => setErrorMessage(e))
                                }} >
                                    <View style={{ backgroundColor: "#3C3C3C", width: 120, height: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ color: '#fff', padding: 15, fontSize: 18 }}>Envoyer</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{height: 70}}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Contact