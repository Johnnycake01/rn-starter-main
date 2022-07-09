import TextComponent  from "./src/screens/TextComponent";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListOfCardScreen from "./src/screens/ListOfCardScreen"

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    TextC:TextComponent,
    CardList:ListOfCardScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
