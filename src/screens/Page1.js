import React, { Component } from 'react'
import { Text, View, AsyncStorage,TouchableOpacity,StyleSheet } from 'react-native'
import { translate} from 'react-i18next';
import i18n from 'i18next';
import { connect } from "react-redux"
import { changeRTL } from '../actions'


class Page1 extends Component {

  async onLanguageChange(lang) {
    i18n.changeLanguage(lang);

    try {
        await AsyncStorage.setItem('@APP:languageCode', lang);
    } catch (error) {
        console.log(` Hi Error : ${error}`);
    }
    // console.log(i18n.dir());
    this.props.changeRTL(!this.props.is_rtl)
}

constructor(props) {
  super(props);

}

navigateToPage2(){
  this.props.navigation.navigate('Page2')
}
  render() {

    // t is the translation function from ar to en or vise versa

    const { t } = this.props.screenProps;

    return (
      <View style={styles(this.props.is_rtl).container}>

        <Text style={styles(this.props.is_rtl).title}> {t('Page1:title')} </Text>
      

        <View style={styles(this.props.is_rtl).buttonContainer}>
{/*        

        Change from one lang to another
 */}



          <TouchableOpacity onPress={() => this.onLanguageChange('ar')} style={styles(this.props.is_rtl).button}>
          <Text style={styles(this.props.is_rtl).buttonTxt}>{t('Page1:changeLangButton')}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.navigateToPage2()} style={styles(this.props.is_rtl).button}>
          <Text style={styles(this.props.is_rtl).buttonTxt}>{t('Page1:goToPage2')}</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: 'blue',
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
})(Page1)