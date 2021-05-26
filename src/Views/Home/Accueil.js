import React from 'react'
import { View, Image, Text, StyleSheet, FlatList } from 'react-native'

import Header from '../../components/Navigation/Header'
import BoxInfos from '../../components/BoxInfos'

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: '100%',
        resizeMode: 'cover',
    },
    textContainer: {
        height: 150,
        width: '100%',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

})

const infos = [
    {
        id: 1,
        src: require('app/assets/icon-alsace.png'),
        title: "Une entreprise locale",
        desc: "Tous nos projets sont réalisés dans notre atelier. Nos matières premières proviennent de fournisseurs locaux (Alsace et Allemagne).",
    },
    {
        id: 2,
        src: require('app/assets/ampoule.png'),
        title: "Des création sur mesure",
        desc: " - Des escaliers (limon central ,double crémaillères etc...) - Garde-corps (Acier, inox, alu) - Mobiler faconné par BsCréation",
    },
]

const Accueil = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: "#D0D0D0" }}>
            <Header back={false} navigation={navigation} />

            <View>
                <Image source={require('app/assets/accueil.jpg')} style={styles.image} blurRadius={4} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>BS CREATION, <Text style={{ color: '#FF7400' }}>PARTENAIRE</Text> DE VOTRE PROJET</Text>
                </View>
                <View style={{ position: "absolute", top: 150, right: 0, left: 0 }}>
                    <FlatList
                        data={infos}
                        renderItem={(item) => <BoxInfos {...item} />}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        </View>
    )
}

export default Accueil