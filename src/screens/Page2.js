import React, { Component } from 'react'
import { Text, View, AsyncStorage,TouchableOpacity,StyleSheet } from 'react-native'
import { translate} from 'react-i18next';
import i18n from 'i18next';
import { connect } from "react-redux"
import { changeRTL } from '../actions'


class Page2 extends Component {

constructor(props) {
  super(props);

}


  render() {

    // styles(this.props.is_rtl

    const { t } = this.props.screenProps;

    return (
      <View style={styles(this.props.is_rtl).container}>

        <Text style={styles(this.props.is_rtl).title}> {t('Page2:title')} </Text>
      
      </View>
    )
  }
}

// export translate(['Page1', 'common'], { wait: true })(Page1);


const styles = (is_rtl) => StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
  },
  title:{
    textAlign: is_rtl?'right':'left'
  },
  buttonContainer:{
    alignItems: 'center',
    width:'100%',
    height:'80%',
    top:'10%',
    // backgroundColor:'blue'
  },
  button:{
    width: '65%%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(156,146,100,1)',
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    marginBottom: '5%',
  },
  button1:{
    width: '65%%',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(156,146,100,1)',
    shadowColor: '#000000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.2
  },
  buttonTxt:{
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  }

})

const mapStateToProps = ({ localizationState }) => {
  return {

      is_rtl: localizationState.is_rtl,
  }
}

export default connect(mapStateToProps, {
  changeRTL
})(Page2)