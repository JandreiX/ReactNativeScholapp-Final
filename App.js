import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FONTS } from './constants/fonts';
import { useCallback } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Welcome, Login, Signup } from './screens';
import HomeScreen from './screens/HomeScreen';
import NotificationPage from './screens/NotificationPage';
import PersonalPage from './screens/PersonalPage';
import RatingSellingItemPage from "./screens/RatingSellingItemPage";
import ConfirmationPage from "./screens/ConfirmationPage";
import EmailSent from "./screens/EmailSent";
import PhoneSent from "./screens/PhoneSent";
import Support from "./screens/Support";
import Settings from "./screens/Settings";
import MyAccount from "./screens/MyAccount";
import PurchasingCartPage from "./screens/PurchasingCartPage";
import SearchSuggestionPage from "./screens/SearchSuggestionPage";
import PurchaseOption from "./screens/PurchaseOption";
import ProductPage from "./screens/ProductPage";
import UserSellingPage from "./screens/UserSellingPage";
import MenuBtnProfilePage from "./screens/MenuBtnProfielPage";
import DeliveryTrackPage from "./screens/DeliveryTrackPage";
import MeetUpMessage from "./screens/MeetUpMessage";
import Delivery from "./screens/Delivery";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Welcome"
          >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="NotificationPage" component={NotificationPage} />
            <Stack.Screen name="PersonalPage" component={PersonalPage} />
            <Stack.Screen name="MenuBtnProfilePage" component={MenuBtnProfilePage} />
            <Stack.Screen name="RatingSellingItemPage" component={RatingSellingItemPage} />
            <Stack.Screen name="ConfirmationPage" component={ConfirmationPage} />
            <Stack.Screen name="EmailSent" component={EmailSent} />
            <Stack.Screen name="PhoneSent" component={PhoneSent} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="PurchasingCartPage" component={PurchasingCartPage} />
            <Stack.Screen name="SearchSuggestionPage" component={SearchSuggestionPage} />
            <Stack.Screen name="PurchaseOption" component={PurchaseOption} />
            <Stack.Screen name="ProductPage" component={ProductPage} />
            <Stack.Screen name="UserSellingPage" component={UserSellingPage} />
            <Stack.Screen name="DeliveryTrackPage" component={DeliveryTrackPage} />
            <Stack.Screen name="MeetUpMessage" component={MeetUpMessage} />
            <Stack.Screen name="Delivery" component={Delivery} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
