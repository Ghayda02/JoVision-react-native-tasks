import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Task42 = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Screen1' component={Screen1} />
                <Tab.Screen name='Screen2' component={Screen2} />
                <Tab.Screen name='Screen3' component={Screen3} />
                <Tab.Screen name='Screen4' component={Screen4} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Task42;