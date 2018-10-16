import React , { Component }from 'react';
import { Text,View,TouchableWithoutFeedback,LayoutAnimation } from 'react-native';
import CardSection from './CardSection';
import {connect} from 'react-redux';
import * as actions from '../Actions/Index'

class ListItem extends Component {

    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDetails(){
        const {library,expanded}=this.props;

        if (expanded){
            return(
                <CardSection>
              <Text style={styles.descriptionText}>{library.description}</Text>
                </CardSection>
            );
        }
    }


    render(){
        const {title,id}=this.props.library;
        return(
            <TouchableWithoutFeedback
            onPress={() => this.props.SelectLibrary(id)}>
            <View>
                <CardSection>
                <Text style={styles.textStyle}>{title}</Text>
            </CardSection>
                {this.renderDetails()}
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles={
    textStyle:{
        fontSize:20,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:15,
        color:'#0F460A',
        fontWeight:'800'
    },
    descriptionText:{
        fontSize:15,
        fontWeight:'300',
        paddingLeft:30,
        color:'#2B7202',
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,
        flex:1
    }
};
const mapStateToProps = (state,ownProps) => {

    const expanded = state.SelectedLibraryId === ownProps.library.id;

  return {expanded};
};

export default connect(mapStateToProps,actions)(ListItem);