import React, { useContext } from 'react'
import { View, Image, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Context from './components/Context'

const Header = ({ back, backText, navigation }) => {
    const [press, setPress] = useContext(Context).press
    return (
        <View style={{ height: 100, width: '100%', backgroundColor: '#fff',justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', elevation: 5 }}>
            {back ? 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="arrow-left" size={30} style={{ color: '#ff7400', textAlignVertical: 'center' }} onPress={() => {navigation.goBack(null);setPress('Home') }} />
            </View> 
            : null}

            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                {back ?
                    <Text style={{ color: '#FF7400', fontSize: 20, fontWeight: 'bold' }}>{backText}</Text>
                    :
                    <Image source={require('app/assets/logo.png')} style={{ height: 80, width: 200 }} />
                }
            </View>
            
            {back ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ borderRadius: 99, backgroundColor: '#3E3E3E', padding: 15 }}>
                        <Image source={require('app/assets/logo-min.png')} style={{ height: 40, width: 40 }} />
                    </View>
                </View>
                : null
            }
        </View>
    )
}

export default Header