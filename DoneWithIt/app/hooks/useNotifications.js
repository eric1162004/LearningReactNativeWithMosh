import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import navigation from "./rootNavigation";

import expoPushTokenApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addPushTokenListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    let token;
    try {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync();

      let finalStatus = existingStatus;

      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);

      expoPushTokenApi.register(token);
    } catch (error) {
      console.log(error);
    }
  };
};
