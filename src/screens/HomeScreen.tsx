import React, {useCallback, useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextInput,
} from 'react-native';
import {COLORS, DEFAULT_SPACE, FONT_SIZE} from '../style/styleVariables';
import SustancesHorizontalFlatList from '../containers/SustancesHorizontalFlatList';
import {Categorys, data} from '../data/data';
import SearchIcon from '../svg/SearchIcon';
import CategorysTabs from '../containers/CategorysTabs';
import {Category} from '../models/ISustenance';

type HomeScreenProps = {
  style?: StyleProp<ViewStyle>;
};
const HomeScreen = ({style}: HomeScreenProps) => {
  const [filtredData, setFiltredData] = useState(
    data.filter(el => el.category === 'Foods'),
  );
  const FilterSustances = useCallback((item: Category) => {
    setFiltredData(data.filter(el => el.category === item));
  }, []);
  return (
    <>
      <View style={[styles.container, style]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Delicious food for you</Text>
        </View>
        <View style={styles.searchContainer}>
          <SearchIcon style={styles.searchIcon} />
          <TextInput style={styles.searchField} placeholder="Search" />
        </View>
      </View>
      <CategorysTabs
        onChangeCategory={FilterSustances}
        contentContainerStyle={styles.categorysContent}
        style={styles.sustanceCardFlatList}
        data={Categorys}
      />
      <SustancesHorizontalFlatList
        data={filtredData}
        style={styles.sustanceCardFlatList}
        contentContainerStyle={styles.sustanceCardContent}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DEFAULT_SPACE * 4.5,
    paddingTop: DEFAULT_SPACE * 4.33,
  },
  headerText: {
    fontSize: FONT_SIZE.xLarge,
    fontWeight: 'bold',
  },
  headerContainer: {
    width: DEFAULT_SPACE * 18.5,
    paddingBottom: DEFAULT_SPACE * 2.8,
  },
  searchField: {
    flex: 1,
    fontSize: FONT_SIZE.medium,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.SECONDARYLIGHTER,
    height: DEFAULT_SPACE * 6,
    borderRadius: DEFAULT_SPACE * 10,
    paddingHorizontal: DEFAULT_SPACE * 3.5,
  },
  searchIcon: {
    marginRight: DEFAULT_SPACE * 1.6,
  },
  sustanceCardContent: {
    marginTop: DEFAULT_SPACE * 2.851,
    paddingLeft: DEFAULT_SPACE * 1.1,
    paddingRight: DEFAULT_SPACE * 4.5,
    paddingTop: DEFAULT_SPACE * 5,
  },
  categorysContent: {
    marginLeft: DEFAULT_SPACE * 6,
    marginTop: DEFAULT_SPACE * 4.6,
  },
  sustanceCardFlatList: {
    flexGrow: 0,
  },
});
