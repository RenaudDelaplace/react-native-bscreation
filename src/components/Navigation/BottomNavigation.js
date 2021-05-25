import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Context from './components/Context';

const BottomNavigation = ({ navigation, route }) => {
    let prefix = Platform.OS === "android" ? "md-" : "ios-"
    const [homeIcon, setHomeIcon] = useState(`${prefix}home-outline`)
    const [savoirFaireIcon, setSavoirFaireIcon] = useState(`${prefix}alert-circle-outline`)
    const [realisationIcon, setRealisationIcon] = useState(`${prefix}apps-outline`)
    const [contactIcon, setContactIcon] = useState(`${prefix}call-outline`)
    let firstRender = true

    const [press, setpress] = useContext(Context).press

    const tooglePress = (press) => {
        switch (press) {
            case "Home":
                setHomeIcon(`${prefix}home`)
                setSavoirFaireIcon(`${prefix}alert-circle-outline`)
                setRealisationIcon(`${prefix}apps-outline`)
                setContactIcon(`${prefix}call-outline`)
                break;
            case "Savoir":
                setHomeIcon(`${prefix}home-outline`)
                setSavoirFaireIcon(`${prefix}alert-circle`)
                setRealisationIcon(`${prefix}apps-outline`)
                setContactIcon(`${prefix}call-outline`)
            case "Realisation":
                setHomeIcon(`${prefix}home-outline`)
                setSavoirFaireIcon(`${prefix}alert-circle-outline`)
                setRealisationIcon(`${prefix}apps`)
                setContactIcon(`${prefix}call-outline`)
                break;
            case "Contact":
                setHomeIcon(`${prefix}home-outline`)
                setSavoirFaireIcon(`${prefix}alert-circle-outline`)
                setRealisationIcon(`${prefix}apps-outline`)
                setContactIcon(`${prefix}call`)
                break;
        }
    }

    let size = 30
    const labelPressed = '#ff7400'

    return (
        <View style={styles.container}>
            <View style={[styles.item, press == 'Home' ? styles.pressed : null]}>
                <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => { tooglePress('Home'); setpress('Home'); navigation.navigate('Home', {}) }}>
                    <Icon name={homeIcon} size={size} color={press == 'Home' ? labelPressed : '#fff'} />
                    <Text style={[styles.label, press == 'Home' ? styles.labelPressed : null]}>
                        Accueil
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.item, press == 'Savoir' ? styles.pressed : null]}>
                <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => { tooglePress('Savoir'); setpress('Savoir'); navigation.navigate('Savoir', {}) }}>
                    <Icon name={savoirFaireIcon} size={size} color={press == 'Savoir' ? labelPressed : '#fff'} />
                    <Text style={[styles.label, press == 'Savoir' ? styles.labelPressed : null]}>
                        Savoir faire
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.item, press == 'Realisation' ? styles.pressed : null]}>
                <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => { tooglePress('Realisation'); setpress('Realisation'); navigation.navigate('Realisation', {}) }}>
                    <Icon name={realisationIcon} size={size} color={press == 'Realisation' ? labelPressed : '#fff'} />
                    <Text style={[styles.label, press == 'Realisation' ? styles.labelPressed : null]}>
                        Réalisations
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.item, press == 'Contact' ? styles.pressed : null]}>
                <TouchableOpacity style={styles.touchable} activeOpacity={1} onPress={() => { tooglePress('Contact'); setpress('Contact'); navigation.navigate('Contact', {}) }}>
                    <Icon name={contactIcon} size={size} color={press == 'Contact' ? labelPressed : '#fff'} />
                    <Text style={[styles.label, press == 'Contact' ? styles.labelPressed : null]}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 0,
        height: 80,
        zIndex: 20
    },
    touchable: { height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7400'
    },
    pressed: {
        backgroundColor: '#fff'
    },
    label: {
        marginTop: 5,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    labelPressed: {
        color: '#ff7400'
    }
})

export default BottomNavigation;
