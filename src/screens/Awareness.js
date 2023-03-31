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
    name: 'What is Domestic Violence?',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is a pattern of abusive behaviour that one person uses to gain power and control over another person in a domestic or intimate relationship. It can take many forms, including physical, sexual, emotional, and financial abuse.',
  },
  {
    id: 2,
    name: 'What are the different types of domestic violence?',
    img: require('../components/domesticvio.png'),
    ans: 'There are several types of domestic violence, including physical abuse (hitting, slapping, kicking), sexual abuse (forcing sexual acts or unwanted sexual contact), emotional abuse (insults, threats, belittling), and financial abuse (controlling finances, preventing the victim from working).',
  },
  {
    id: 3,
    name: 'How common is domestic violence against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Domestic violence is unfortunately quite common. According to the World Health Organization, 1 in 3 women worldwide has experienced physical or sexual violence from an intimate partner at some point in their lifetime.',
  },
  {
    id: 4,
    name: 'What are the warning signs of domestic violence?',
    img: require('../components/domesticvio.png'),
    ans: 'Some warning signs of domestic violence include the abuser being controlling, jealous, possessive, and having a quick temper. The victim may seem afraid of the abuser and may have unexplained injuries or bruises.',
  },
  {
    id: 5,
    name: 'What are the effects of domestic violence on women?',
    img: require('../components/domesticvio.png'),
    ans: 'The effects of domestic violence on women can be severe and long-lasting. Victims may experience physical injuries, psychological trauma, depression, anxiety, and PTSD. They may also feel isolated and may struggle to maintain healthy relationships with others.',
  },
  {
    id: 6,
    name: 'How can women protect themselves from domestic violence?',
    img: require('../components/domesticvio.png'),
    ans: 'Women can protect themselves from domestic violence by creating a safety plan, which may include identifying safe places to go in case of an emergency, having a phone and/or money readily available, and reaching out to support networks.',
  },
];

const SexualAssualt = [
  {
    id: 1,
    name: 'What is sexual assault?',
    img: require('../components/domesticvio.png'),
    ans: 'Sexual assault is any type of unwanted sexual contact or behaviour, including rape, sexual coercion, and unwanted sexual touching.',
  },
  {
    id: 2,
    name: 'What are the different types of sexual assault?',
    img: require('../components/domesticvio.png'),
    ans: 'There are several types of sexual assault, including rape, attempted rape, sexual coercion, unwanted sexual touching, and sexual harassment.',
  },
  {
    id: 3,
    name: 'How common is sexual assault against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Sexual assault against women is unfortunately quite common. According to the World Health Organization, 1 in 3 women worldwide has experienced sexual or physical violence from an intimate partner or sexual violence from a non-partner at some point in their lifetime.',
  },
  {
    id: 4,
    name: 'What are the effects of sexual assault on women?',
    img: require('../components/domesticvio.png'),
    ans: 'The effects of sexual assault on women can be severe and long-lasting. Victims may experience physical injuries, psychological trauma, depression, anxiety, and PTSD. They may also feel isolated and may struggle to maintain healthy relationships with others.',
  },
  {
    id: 5,
    name: 'How can women protect themselves from sexual assault?',
    img: require('../components/domesticvio.png'),
    ans: 'Women can protect themselves from sexual assault by being aware of their surroundings, avoiding isolated areas, trusting their instincts, and learning self-defense techniques.',
  },
  {
    id: 6,
    name: 'How can we prevent sexual assault against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Preventing sexual assault against women requires a multi-faceted approach, including educating the public about the dangers of sexual assault, promoting healthy and respectful relationships, holding perpetrators accountable for their actions, and supporting survivors.',
  },
];

const ReproductiveHealth = [
  {
    id: 1,
    name: 'What is reproductive health?',
    img: require('../components/domesticvio.png'),
    ans: 'Reproductive health refers to the physical, mental, and social well-being of the reproductive system and its functions. It includes issues related to sexuality, fertility, pregnancy, childbirth, and reproductive rights.',
  },
  {
    id: 2,
    name: 'Why is reproductive health important for women?',
    img: require('../components/domesticvio.png'),
    ans: 'Reproductive health is important for women because it affects their overall health, quality of life, and ability to make choices about their bodies and futures. Good reproductive health allows women to have control over their reproductive lives and make informed decisions about their sexual health and family planning.',
  },
  {
    id: 3,
    name: 'What are some common reproductive health concerns for women?',
    img: require('../components/domesticvio.png'),
    ans: 'Common reproductive health concerns for women include menstrual problems, sexually transmitted infections, fertility issues, contraception, pregnancy, childbirth, and menopause.',
  },
  {
    id: 4,
    name: 'What are the different types of birth control and how do they work?',
    img: require('../components/domesticvio.png'),
    ans: 'There are several types of birth control, including hormonal methods such as the pill and the patch, barrier methods such as condoms and diaphragms, intrauterine devices (IUDs), and sterilization. Each method works differently to prevent pregnancy.',
  },
  {
    id: 5,
    name: 'How can women maintain good reproductive health throughout their lives?',
    img: require('../components/domesticvio.png'),
    ans: 'Women can maintain good reproductive health by practicing safe sex, getting regular gynecological check-ups, eating a healthy diet, exercising regularly, and avoiding tobacco, drugs, and excessive alcohol consumption.',
  },
  {
    id: 6,
    name: 'What should women know about sexually transmitted infections (STIs) and how to prevent them? ',
    img: require('../components/domesticvio.png'),
    ans: 'Women should know how to protect themselves from STIs by practicing safe sex and getting tested regularly. They should also be aware of the symptoms of STIs and know when to seek medical attention if they suspect they have an infection.',
  },
];

const WorkplaceDiscrimination = [
  {
    id: 1,
    name: 'What is workplace discrimination against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Workplace discrimination against women refers to unfair treatment or practices that negatively impact women in the workplace based on their gender. This can include unequal pay, exclusion from promotions, sexual harassment, and other forms of bias and harassment.',
  },
  {
    id: 2,
    name: 'What are some examples of workplace discrimination against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Examples of workplace discrimination against women may include pay inequity, gender-based harassment or bullying, gender stereotyping, denial of opportunities for advancement, and lack of access to training or other resources.',
  },
  {
    id: 3,
    name: 'What should I do if I experience workplace discrimination?',
    img: require('../components/domesticvio.png'),
    ans: 'If you experience workplace discrimination, you should document the incident(s) and report it to your employers human resources department or a supervisor. If the issue is not resolved, you may consider filing a complaint with the Equal Employment Opportunity Commission (EEOC) or seeking legal advice.',
  },
  {
    id: 4,
    name: 'What can employers do to prevent workplace discrimination against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Employers can prevent workplace discrimination against women by creating policies and practices that promote equity and inclusion, providing training and resources for employees and managers, and implementing fair and transparent systems for hiring, promotion, and pay.',
  },
  {
    id: 5,
    name: 'How can women empower themselves in the workplace?',
    img: require('../components/domesticvio.png'),
    ans: 'Women can empower themselves in the workplace by advocating for themselves, seeking out mentorship and networking opportunities, and developing their skills and expertise through education and training. Additionally, women can support each other by forming alliances and networks to promote gender equity and address workplace discrimination.',
  },
  {
    id: 6,
    name: 'What resources are available for women who experience workplace discrimination?',
    img: require('../components/domesticvio.png'),
    ans: 'Resources for women who experience workplace discrimination may include legal advocacy organizations, employee assistance programs, support groups, and hotlines or helplines.',
  },
];

const Education = [
  {
    id: 1,
    name: 'What is educational injustice against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Educational injustice against women refers to unequal access to education and opportunities for learning and advancement based on gender. This can include barriers to enrolment, lower quality of education, and lack of resources and support.',
  },
  {
    id: 2,
    name: 'What are some examples of educational injustice against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Examples of educational injustice against women may include lower enrollment rates for girls in primary and secondary education, lack of access to higher education, gender-based violence and harassment, and limited opportunities for girls and women to pursue STEM (Science, Technology, Engineering, and Mathematics) fields.',
  },
  {
    id: 3,
    name: 'How does educational injustice affect women and girls?',
    img: require('../components/domesticvio.png'),
    ans: 'Educational injustice affects women and girls by limiting their opportunities for personal growth, economic advancement, and social mobility. This can lead to lower earning potential, limited career opportunities, and lower quality of life.',
  },
  {
    id: 4,
    name: 'What are some root causes of educational injustice against women?',
    img: require('../components/domesticvio.png'),
    ans: 'Root causes of educational injustice against women may include social and cultural norms that prioritize male education and career opportunities, poverty and economic disparities, lack of access to healthcare and nutrition, and gender-based violence and harassment.',
  },
  {
    id: 5,
    name: 'How can women and girls advocate for their own education?',
    img: require('../components/domesticvio.png'),
    ans: 'Women and girls can advocate for their own education by speaking out against discrimination and bias, seeking out resources and support, and pursuing educational opportunities despite obstacles or challenges.',
  },
  {
    id: 6,
    name: 'How can allies support women and girls in their pursuit of education?',
    img: require('../components/domesticvio.png'),
    ans: 'Allies can support women and girls in their pursuit of education by advocating for policies and programs that promote gender equity and equal access to education, providing resources and support, and speaking out against discrimination and bias.',
  },
];

const Marriage = [
  {
    id: 1,
    name: 'What is forceful marriage?',
    img: require('../components/domesticvio.png'),
    ans: 'Forceful marriage is a practice where a person is married against their will, often through coercion, threats, or physical violence.',
  },
  {
    id: 2,
    name: 'How common is forceful marriage?',
    img: require('../components/domesticvio.png'),
    ans: 'Forceful marriage is unfortunately a common practice in many parts of the world. Exact numbers are difficult to determine due to underreporting and lack of data, but it is estimated that millions of women and girls are affected by this issue each year.',
  },
  {
    id: 3,
    name: 'What are the impacts of forceful marriage on women?',
    img: require('../components/domesticvio.png'),
    ans: 'Forceful marriage can have severe impacts on womens physical, emotional, and mental health. It can lead to trauma, depression, and anxiety. Additionally, women who are forced into marriage may be at risk of experiencing further forms of gender-based violence, such as sexual violence and domestic abuse.',
  },
  {
    id: 4,
    name: 'What are the legal and human rights implications of forceful marriage?',
    img: require('../components/domesticvio.png'),
    ans: 'Forceful marriage is a violation of several human rights, including the right to freedom from coercion and the right to marry only with free and full consent. It is also often illegal under national and international law.',
  },
  {
    id: 5,
    name: 'What are some signs that someone may be experiencing or at risk of forceful marriage?',
    img: require('../components/domesticvio.png'),
    ans: 'Signs that someone may be experiencing or at risk of forceful marriage include sudden withdrawal from friends and activities, sudden or unexplained engagement or marriage plans, and indications of fear or pressure from family members or partners.',
  },
  {
    id: 6,
    name: 'What can women do if they are being forced into marriage?',
    img: require('../components/domesticvio.png'),
    ans: 'Women who are being forced into marriage can seek help and support from a range of resources, including legal services, counseling and support services, and community organizations. It is important to prioritize personal safety and seek out trusted allies and support networksWomen who are being forced into marriage can seek help and support from a range of resources, including legal services, counseling and support services, and community organizations. It is important to prioritize personal safety and seek out trusted allies and support networks.',
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
