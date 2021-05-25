import React, { useState } from 'react'
import { View, Animated, PanResponder, Dimensions, StyleSheet, FlatList } from 'react-native'

import BottomNavigation from '../../components/Navigation/BottomNavigation'
import Header from '../../components/Navigation/Header'
import BoxItem from './components/BoxItem'

const data = require('app/assets/data.json')

const Realisation = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width
    const [translateState, setTranslateState] = useState(new Animated.Value(0))
    const [pageState, setPageState] = useState(0)
    const page = data.length

    const endGesture = (evt, gestureState) => {
        let toValue = 0
        if (Math.abs(gestureState.dx) / windowWidth > 0.2) {
            if (gestureState.dx < 0) {
                if (pageState != (page - 1)) {
                    toValue = windowWidth * -1
                } else {
                    toValue = 0
                }
            } else {
                if (pageState == 0) {
                    toValue = 0
                } else {
                    toValue = windowWidth
                }
            }
        }
        Animated.timing(
            translateState,
            {
                toValue: toValue,
                duration: 300,
                useNativeDriver: false
            }
        ).start(() => {
            if (toValue < 0 && pageState != (page)) {
                setPageState(pageState + 1)
            } else if (toValue > 0 && pageState != 0) {
                setPageState(pageState - 1)
            }
            setTranslateState(new Animated.Value(0))
        })
    }

    let panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => false,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
        onMoveShouldSetPanResponder: (ect, gestureState) => Math.abs(gestureState.dx) > 7,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
        onPanResponderTerminationRequest: () => false,
        onPanResponderMove: (evt, gestureState) => {
            Animated.event([null, { dx: translateState }], { useNativeDriver: false })(
                evt,
                gestureState,
            );
        },
        onPanResponderRelease: (evt, gestureState) => endGesture(evt, gestureState),
        onPanResponderTerminate: (evt, gestureState) => { console.log('terminate') },
        onShouldBlockNativeResponder: (evt, gestureState) => true
    })
    const styles = StyleSheet.create({
        slider: {
            width: page * windowWidth,
            flexDirection: 'row',
            transform: [{ translateX: translateState }],
            left: (pageState) * -1 * windowWidth
        },
    })

    return (
        <View style={{ backgroundColor: '#3E3E3E', flex: 1 }}>
            <BottomNavigation navigation={navigation} route="Realisation" />
            <Header back={true} backText='Nos réalisations' navigation={navigation} />
            <Animated.View {...panResponder.panHandlers} style={styles.slider}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => <BoxItem {...item} {...navigation} />}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    scrollEnabled={false}
                />
            </Animated.View>

        </View>
    )
}


export default Realisation