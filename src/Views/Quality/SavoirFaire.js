import React from 'react'
import { View, FlatList } from 'react-native'
import BoxInfos from '../../components/BoxInfos'

import Header from '../../components/Navigation/Header'

const infos = [
    {
        id: 1,
        src: require('app/assets/icon-alsace.png'),
        title: "Design innovant",
        desc: "BS Création est toujours au coeur des tendances. De la conception 3D à la pose, nous saurons répondre à vos exigences les plus complexes en matière de design !",
    },
    {
        id: 2,
        src: require('app/assets/star.png'),
        title: "Professionnel",
        desc: "Fort de son expérience dans la métallerie fine, BS Création met à votre disposition toute son expertise. Notre équipe de professionnels saura répondre à toutes vos exigences.",
    },
    {
        id: 3,
        src: require('app/assets/work.png'),
        title: "Bureau d'étude",
        desc: "Notre bureau d’étude modélise en 3D vos idées afin de pouvoir vous présenter le projet avant la mise en fabrication dans notre atelier.",
    },
]

const SavoirFaire = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#3E3E3E', flex: 1 }}>
            <Header back={true} backText="Notre savoir faire" navigation={navigation} />
            <View style={{ height: '76%' }}>
                <FlatList
                    data={infos}
                    renderItem={(item) => <BoxInfos {...item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </View>
    )
}

export default SavoirFaire