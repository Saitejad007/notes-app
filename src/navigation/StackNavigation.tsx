import {EditNotes, Home} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  //   const loading = useSelector((state: any) => state.user.loading);

  return (
    // <>
    //   {loading ? (
    //     <LoadingScreen />
    //   ) : (
    <Stack.Navigator
      screenOptions={{gestureEnabled: true, headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="EditNotesScreen" component={EditNotes} />
    </Stack.Navigator>
    //   )}
    // </>
  );
};
export default Navigation;
