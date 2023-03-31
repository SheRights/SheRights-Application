import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, {useState} from 'react';
import Whatis from './Whatis';

const DomesticViolence = [
  {
    id: 1,
    name: 'Section 498A',
    img: require('../components/domesticvio.png'),
    ans: 'Section 498A of the Indian Penal Code deals with the offense of cruelty towards a married woman by her husband or his relatives. It states that whoever subjects a married woman to cruelty shall be punished with imprisonment for a term which may extend to three years and shall also be liable to a fine.',
  },
  {
    id: 2,
    name: 'Section 304B',
    img: require('../components/domesticvio.png'),
    ans: 'Dowry death - Where the death of a woman is caused by any burns or bodily injury or occurs otherwise than under normal circumstances within seven years of her marriage and it is shown that soon before her death she was subjected to cruelty or harassment by her husband or any relative of her husband for, or in connection with, any demand for dowry, such death shall be called "dowry death", and such husband or relative shall be deemed to have caused her death',
  },
  
];

const SexualAssualt = [
  {
    id: 1,
    name: 'Section 354',
    img: require('../components/domesticvio.png'),
    ans: 'Section 354 of the Indian Penal Code deals with the offense of assault or criminal force on a woman with the intent to outrage her modesty. It states that whoever assaults or uses criminal force on a woman, intending to outrage or knowing that it is likely to outrage her modesty, shall be punished with imprisonment for a term which may extend to two years, or with a fine, or with both.',
  },
  {
    id: 2,
    name: 'Section 354A',
    img: require('../components/domesticvio.png'),
    ans: 'Section 354A of the Indian Penal Code deals with the offense of sexual harassment and provides protection to women from unwanted and sexually colored advances. It states that whoever makes any physical contact or advances involving unwelcome and explicit sexual overtures to a woman, or demands sexual favors from her, or shows pornography against her will, shall be guilty of the offense of sexual harassment.',
  },
  {
    id: 3,
    name: 'Section 376',
    img: require('../components/domesticvio.png'),
    ans: 'Section 376 of the Indian Penal Code deals with the offense of rape. It defines rape as a sexual act committed against a woman without her consent, or with her consent obtained by force, fraud, or coercion, or when she is unable to give her consent.',
  },
];

const ReproductiveHealth = [
  {
    id: 1,
    name: 'Section 312: Causing miscarriage',
    img: require('../components/domesticvio.png'),
    ans: 'Whoever voluntarily causes a woman with child to miscarry, shall, if such miscarriage be not caused in good faith for the purpose of saving the life of the woman, be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.',
  },
  {
    id: 2,
    name: 'Section 313: Causing miscarriage without women consent ',
    img: require('../components/domesticvio.png'),
    ans: 'Whoever causes a woman with child to miscarry without her consent, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine',
  },
  {
    id: 3,
    name: 'Section 315',
    img: require('../components/domesticvio.png'),
    ans: 'Act done with intent to prevent child being born alive or to cause it to die after birth - Whoever before the birth of any child does any act with the intention of thereby preventing that child from being born alive or causing it to die after its birth, and does by such act prevent that child from being born alive, or causes it to die after its birth, shall, if such act be not caused in good faith for the purpose of saving the life of the mother, be punished with imprisonment of either description for a term which may extend to ten years, or with fine, or with both',
  },
];

const WorkplaceDiscrimination = [
  {
    id: 1,
    name: 'The Equal Remuneration Act, 1976 ',
    img: require('../components/domesticvio.png'),
    ans: 'The Equal Remuneration Act, 1976 is a legislation in India that prohibits discrimination in the matter of payment of wages on the grounds of gender. The Act aims to ensure that men and women receive equal pay for equal work, and prohibits employers from paying lower wages to women than men for the same work or work of similar nature.',
  },
];

const Education = [
  {
    id: 1,
    name: 'National Policy on Education, 2020',
    img: require('../components/domesticvio.png'),
    ans: 'This policy recognizes the need for gender parity and womens empowerment in education. It aims to promote equal access to education for girls and women, and to eliminate gender-based discrimination in education.',
  },
  {
    id: 2,
    name: 'Right to Education Act, 2009',
    img: require('../components/domesticvio.png'),
    ans: 'This act makes education a fundamental right for all children in India between the ages of 6 and 14 years. The act prohibits discrimination on the basis of gender, and requires that every child be provided with free and compulsory education',
  },
 
];

const Marriage = [
  {
    id: 1,
    name: 'Section 366B',
    img: require('../components/domesticvio.png'),
    ans: 'Importation of girl from foreign country - Whoever imports into India from any country outside India or from the State of Jammu and Kashmir any girl under the age of twenty-one years with intent that she may be, or knowing it to be likely that she will be, forced or seduced to illicit intercourse with another person, shall be punishable with imprisonment which may extend to ten years and shall also be liable to fine',
  },
  {
    id: 2,
    name: 'Section 372',
    img: require('../components/domesticvio.png'),
    ans: 'Selling minor for purposes of prostitution, etc. - Whoever sells, lets to hire, or otherwise disposes of any person under the age of eighteen years with intent that such person shall at any age be employed or used for the purpose of prostitution or illicit intercourse with any person or for any unlawful and immoral purpose, or knowing it to be likely that such person will at any age be employed or used for any such purpose, shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine',
  },
  {
    id: 3,
    name: 'Section 366A',
    img: require('../components/domesticvio.png'),
    ans: 'Procuration of minor girl - Whoever, by any means whatsoever, induces any minor girl under the age of eighteen years to go from any place or to do any act with intent that such girl may be, or knowing that it is likely that she will be, forced or seduced to illicit intercourse with another person shall be punished with imprisonment of either description for a term which may extend to ten years, and shall also be liable to fine',
  },
  
];

const categories = [
  {
    id: 1,
    category: 'Domestic Violence',
    img: require('../components/domesticvio.png'),
    },
  {
    id: 2,
    category: 'Sexual Assualt',
    img: require('../components/domesticvio.png'),
   },
  {
    id: 3,
    category: 'Reproductive Health',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is a pattern of abusive behavior that one person uses to gain power and control over another person in a domestic or intimate relationship. It can take many forms, including physical, sexual, emotional, and financial abuse.',
  },
  {
    id: 4,
    category: 'Workplace Discrimination',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is a pattern of abusive behavior that one person uses to gain power and control over another person in a domestic or intimate relationship. It can take many forms, including physical, sexual, emotional, and financial abuse.',
  },
  {
    id: 5,
    category: 'Education',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is a pattern of abusive behavior that one person uses to gain power and control over another person in a domestic or intimate relationship. It can take many forms, including physical, sexual, emotional, and financial abuse.',
  },
  {
    id: 6,
    category: 'Marriage',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is a pattern of abusive behavior that one person uses to gain power and control over another person in a domestic or intimate relationship. It can take many forms, including physical, sexual, emotional, and financial abuse.',
  },
];
const Awareness = ({navigation}) => {
  const [Category, setCategory] = useState(1);
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.headtxt}>Let's get known to few things!</Text>

      <View style={styles.bottomcontainer}>
        <View style={styles.btmparent}>
          <View style={styles.categorycardcontainer}>
            <ScrollView horizontal={true}>
              {categories.map((item, index) => {
                return (
                  <TouchableOpacity key={index}onPress={() => setCategory(item.id)}>
                    <View
                      style={[
                        styles.categorycard,
                        {
                          backgroundColor:
                            Category == item.id ? '#CCFFF5' : '#fff',
                        },
                      ]}
                      key={index}>
                      <Text numberOfLines={1} style={styles.categorytxt}>
                        {item.category}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <ScrollView>
            <View style={styles.cardContainer}>
              {Category == 1
                ? DomesticViolence.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : Category == 2
                ? SexualAssualt.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : Category == 3
                ? ReproductiveHealth.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : Category == 4
                ? WorkplaceDiscrimination.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : Category == 5
                ? Education.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : Marriage.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('Whatis', {
                            img: item.img,
                            que: item.name,
                            ans: item.ans,
                          })
                        }>
                        <View style={styles.Card} key={index}>
                          <View style={styles.NameAndDistance}>
                            <Text
                              numberOfLines={1}
                              style={styles.PoliceStationName}>
                              {item.name}
                            </Text>
                          </View>
                          <View style={styles.CallButton}>
                            <FontAwesome5
                              name="angle-right"
                              size={20}
                              color="black"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Awareness;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#FFF2F2',
  },
  bottomcontainer: {
    backgroundColor: '#CCCCFF',
    marginTop: '20%',
    height: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  headtxt: {
    textAlign: 'center',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: '20%',
  },
  btmparent: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  categorycardcontainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  categorycard: {
    backgroundColor: '#CCFFF5',
    width: 150,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  categorytxt: {
    color: 'black',
    fontWeight: 'bold',
  },
  cardContainer: {
    marginTop: 10,
  },
  Card: {
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  NameAndDistance: {},
  PoliceStationName: {
    fontSize: 18,

    width: 260,
    color: 'black',
    fontWeight: 'bold',
  },

  CallButton: {
    marginRight: 10,
  },
});
