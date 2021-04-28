import React from 'react'
import { Text, View, Image } from 'react-native'
// Styles
import HeaderStyle from '../styles/HeaderStyle';

const Header = () => {
    return (
        <View style={HeaderStyle.container}>
            <Image style={HeaderStyle.logo} source={require('../assets/logo.png')}/>
            <Image style={HeaderStyle.menu} source={require('../assets/menu.png')}/>
        </View>
    )
}

export default Header;