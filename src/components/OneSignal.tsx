import { OneSignal } from '@ionic-native/onesignal';

// this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

OneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

OneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

OneSignal.endInit();
