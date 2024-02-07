import {SafeAreaView, Text, useColorScheme} from 'react-native';
import AddBtn from '../components/addBtn';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleAddNote = () => {
    navigation.navigate('EditNotesScreen');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <AddBtn eventHandler={handleAddNote} />
    </SafeAreaView>
  );
};

export default Home;
