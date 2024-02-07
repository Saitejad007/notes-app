import {Dimensions, StyleSheet} from 'react-native';
import {useTheme} from '../theme';

const window = Dimensions.get('window');
const theme = useTheme();

export const styles = StyleSheet.create({
  container: {
    height: window.height,
    width: window.width,
    backgroundColor: '#f0f0f7',
    padding: theme.spacing.md,
  },
  addBtnContainer: {
    position: 'absolute',
    backgroundColor: theme.color.primary,
    padding: theme.spacing.md,
    left: '43.5%',
    borderRadius: theme.border.radius.md,
    top: window.height - 100,
    shadowColor: '#171717',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  noteInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});
