import { Animated, View, TouchableOpacity, Text } from 'react-native';
import { Colors } from '../config/Colors';

const TabBarNavigation = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          // <View style={{backgroundColor: 'green', width: '80%', display: 'flex', justifyContent: 'space-around'}}>
          // <TouchableOpacity style={{ backgroundColor: 'red' , display: 'flex',width:'50%'}}>
          //   <Text style={{textAlign: 'center'}}>{label}</Text>
          // </TouchableOpacity>
          // </View>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ display: 'flex',width:'50%'}}
          >
            <View style={{width:  '80%', alignSelf: 'center'}}>
            <Animated.Text style={{backgroundColor:isFocused ? Colors.BLUE : '#60708F', textAlign: 'center',color:'white',padding:20,borderRadius:100 }}>
              {label}
            </Animated.Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default TabBarNavigation;
