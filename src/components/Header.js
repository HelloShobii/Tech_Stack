import React from 'react';
import {View,Text} from 'react-native';

const Header =(props)=>{
    const {viewStyle,textStyle}=styles;
  return(
      <View style={viewStyle}>
          <Text style={textStyle}>
              {props.headerText}
          </Text>
      </View>
  );
};
const styles={
    viewStyle:{
        backgroundColor:'#0F460A',
        paddingTop:20,
        justifyContent:'center',
        alignItems:'center',
        height:80,
        elevation:5,
        position:'relative'
    },
    textStyle:{
        color:'#fff',
        fontSize:25,
        fontWeight:'600',
        justifyContent:'center'

    }
};

export default Header;
