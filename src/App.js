import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { 
  createStore, 
  applyMiddleware } 
  from 'redux'
import reducers from './reducers'
import ReduxThunk from "redux-thunk"
import { translate } from 'react-i18next';
import Page1 from './screens/Page1'
import Page2 from './screens/Page2'

//Do NOT remove this import even though it is not user directly, because it will cause an error
import i18n from './I18n/index';



const StackNavigation = new createStackNavigator({
  Page1: { screen: Page1 },
  Page2: { screen: Page2 },
},)

// Wrapping a stack with translation hoc asserts we get new render on language change
// the hoc is set to only trigger rerender on languageChanged
// translate is the translation func
const WrappedStack = ({ t }) => {
  return <StackNavigation screenProps={{ t }} />;
};

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false,
})(WrappedStack);

// The entry point using a react navigation stack navigation wrapped in Redux
export default class App extends React.Component {
  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <ReloadAppOnLanguageChange />
      </Provider>
    );
  }
}
