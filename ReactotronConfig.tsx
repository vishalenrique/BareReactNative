import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

console.tron = Reactotron;
Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({}) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
