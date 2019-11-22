import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import firebase from 'firebase';
import { firebaseConfig } from './src/config/firebase-config';

firebase.initializeApp(firebaseConfig)

import navigation from './src/navigations';

if (__DEV__) {
   activateKeepAwake();
}
registerRootComponent(navigation);
