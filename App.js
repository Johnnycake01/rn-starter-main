import TextComponent  from "./src/screens/TextComponent";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListOfCardScreen from "./src/screens/ListOfCardScreen"
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    TextC:TextComponent,
    CardList:ListOfCardScreen,
    Counter: CounterScreen,
    Color:ColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
