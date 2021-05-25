import React from 'react'
import { View } from 'react-native'

import Header from '../../../components/Navigation/Header'
import BoxDescItem from './components/BoxDescItem'

const Description = ({ navigation, route }, props) => {
    const { title } = route.params
    return (
        <View style={{ backgroundColor: '#3E3E3E', flex: 1 }}>
            <Header back={true} backText={title} navigation={navigation} />
            <BoxDescItem {...route.params} />
        </View>
    )
}

export default Description
