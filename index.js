/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import SingleQuote from './components/single_quote/SingleQuote'

AppRegistry.registerComponent(appName, () => SingleQuote);
