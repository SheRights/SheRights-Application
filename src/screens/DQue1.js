import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
  Modal,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import QuestionCard from './QuestionCard';

const {height, width} = Dimensions.get('window');

const DomesticVio = [
  {
    question: "Have you ever been physically harmed or injured by your partner?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Has your partner ever threatened to harm you or your children?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever felt scared or intimidated by your partner?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Has your partner ever controlled your access to money, transportation, or other resources?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been prevented from seeing or contacting family or friends by your partner?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been prevented from seeking medical attention or help when you needed it?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever felt isolated or alone in your situation?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
];
const SexualAssult = [
  {
    question: "Did the perpetrator physically force or threaten you into engaging in sexual activity?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Was the sexual activity unwanted or non-consensual in any way?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Did the perpetrator use any weapons or other objects during the sexual activity?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Did the perpetrator use any physical force or inflict injuries during the sexual activity?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Did the sexual activity occur in a public or private location?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Was the perpetrator someone you knew or a stranger?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Did the perpetrator try to justify or minimize their behavior?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
 
];
const ReproductiveHealth = [
  {
    question: "Have you ever been denied access to contraception or other reproductive healthcare services?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever been forced or coerced into having an abortion or continuing a pregnancy against your wishes?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever experienced medical malpractice or negligence in relation to your reproductive health?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been subjected to unwanted sterilization or other forms of reproductive coercion?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been denied time off work or other accommodations related to pregnancy or childbirth?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever experienced physical or emotional trauma related to your reproductive health?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you received any support or resources to help you cope with the experience?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
 
];
const Education = [
  {
    question: "Have you ever been denied access to education or been prevented from attending school because of your gender?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever been denied access to educational resources or opportunities because of your gender?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever been subjected to sexual harassment, assault, or other forms of violence at school or on campus?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been excluded or marginalized from educational activities or opportunities because of your gender or sexuality?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been subjected to negative stereotypes or bias related to your gender or sexuality by teachers or other educational professionals?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you ever been denied access to educational funding or scholarships because of your gender or sexuality?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you ever been denied the opportunity to participate in sports, clubs, or other extracurricular activities because of your gender or sexuality?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
];
const Marriage = [
  {
    question: "Are you forced into a marriage against your will or without your consent?",
    Options: ['to live', 'to have lived', 'to be lived', 'to be living'],
    correct: 1,
    marked: -1,
  },
  {
    question: "Were you threatened or coerced into accepting the marriage proposal?",
    Options: ['on account of', 'due', 'because', 'owing'],
    correct: 2,
    marked: -1,
  },
  {
    question: "Did you feel like you had no choice but to marry the person chosen for you?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Were you subjected to physical, emotional, or psychological abuse as part of the marriage or as a result of trying to resist the marriage?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Were you forced to leave your family or community as part of the marriage or as a result of trying to resist the marriage?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Did you experience a loss of personal autonomy or control over your life as a result of the marriage?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Were you prevented from pursuing education, work, or other opportunities because of the marriage?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
  },
];
const WorkplaceDiscrimination = [
  {
    question: "Have you been subjected to differential treatment or excluded from opportunities because of your gender?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you been subjected to negative stereotypes or bias related to your gender or sexuality by coworkers or managers?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you been subjected to sexual harassment, assault, or other forms of violence in the workplace?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you been denied access to promotions, raises, or other benefits based on your gender?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you been denied access to training or other professional development opportunities because of your gender?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: 'Have you been subjected to a hostile work environment, including bullying or intimidation, because of your gender or sexuality?',
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
  {
    question: "Have you been subjected to retaliation or other negative consequences for speaking out against discrimination or harassment?",
    Options: ['Always', 'Sometimes', 'Once', 'Not at all'],
    correct: 1,
    marked: -1,
    
  },
 
];

const DQue1 = ({route, navigation}) => {
  // testing part

  const [currentIndex, setCurrentIndex] = useState(1);
  const [marks, setMarks] = useState(0)
  const [questions, setQuestions] = useState(
    route.params.cat == 'Domestic Violence'
      ? DomesticVio
      : route.params.cat == 'Sexual Assault'
      ? SexualAssult
      : route.params.cat == 'Reproductive Health'
      ? ReproductiveHealth
      : route.params.cat == 'Education'
      ? Education
      : route.params.cat == 'Marriage'
      ? Marriage
      : ReproductiveHealth,
  );
  useEffect(() => {
    console.log('Marks: ', marks)
  }, [marks])
  const listRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const OnSelectOption = (index, x) => {
    const tempData = questions;
    tempData.map((item, ind) => {
      if (index == ind) {
        if (item.marked !== -1) {
          item.marked = -1;
        } else {
          item.marked = x;
          if (x==1) {
            setMarks(marks+5)
          }else if(x == 2){
            setMarks(marks+3)
          }else if(x == 3){
            setMarks(marks+1)
          }else if(x == 4){
            setMarks(marks+0)
          }
        }
      }
    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestions(temp);
  };
  const getTextScore = () => {
    let marks = 0;
    questions.map(item => {
      if (item.marked !== -1) {
        marks = marks + 5;
      }
    });
    return marks;
  };
  const reset = () => {
    const tempData = questions;
    tempData.map((item, ind) => {
      item.marked = -1;
    });
    let temp = [];
    tempData.map(item => {
      temp.push(item);
    });
    setQuestions(temp);
  };

  // End testing part

  return (
    <View style={styles.maincontainer}>
      <View style={styles.circularcontainer}>
        <Image style={styles.img} source={{uri:route.params.img}} />
      </View>
      <Text style={styles.heading}>{route.params.cat}</Text>
      <View style={styles.captioncontainer}>
        <Text style={styles.caption}>Your Voice Counts!</Text>
      </View>

      <FlatList
        ref={listRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x / width + 1;
          setCurrentIndex(x.toFixed(0));
        }}
        data={questions}
        renderItem={({item, index}) => {
          return (
            <QuestionCard
              data={item}
              selectedOption={x => {
                OnSelectOption(index, x);
                console.log(x);
              }}
            />
          );
        }}
      />

      {/* <View style={styles.txt}>
          <Text style={styles.que}>{item.Question}</Text>
          <View style={styles.options}>
            <TouchableOpacity>
              <View style={styles.opt1}>
                <Text style={styles.optionText}>{item.option1}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.opt1}>
                <Text style={styles.optionText}>{item.option2}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.opt1}>
                <Text style={styles.optionText}>{item.option3}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.opt1}>
                <Text style={styles.optionText}>{item.option4}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View> */}

<View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 50,
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: currentIndex > 1 ? 'purple' : 'gray',
            height: 50,
            width: 100,
            borderRadius: 10,
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            console.log(parseInt(currentIndex) - 1);
            if (currentIndex > 1) {
              listRef.current.scrollToIndex({
                animated: true,
                index: parseInt(currentIndex) - 2,
              });
            }
          }}>
          <Text style={{color: '#fff'}}>Previous</Text>
        </TouchableOpacity>
        {currentIndex == 7 ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('SeverityScreen', {totalmarks: marks});
            }}>
            <Text style={{color: '#fff'}}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              height: 50,
              width: 100,
              borderRadius: 10,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              console.log(currentIndex);
              if (questions[currentIndex - 1].marked !== -1) {
                if (currentIndex < questions.length) {
                  listRef.current.scrollToIndex({
                    animated: true,
                    index: currentIndex,
                  });
                }
              }
            }}>
            <Text style={{color: '#fff'}}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DQue1;

const styles = StyleSheet.create({
  circularcontainer: {
    backgroundColor: '#EEE6FF',
    marginLeft: -100,
    marginTop: -100,
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#FBF6F6',
  },
  heading: {
    color: 'black',
    marginTop: 40,
    position: 'absolute',
    right: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  captioncontainer: {},
  caption: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  que: {
    color: 'red',
    fontWeight: 'bold',
    //marginLeft:38,
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  txt: {
    height: '95%',
    width: '100%',
    //backgroundColor:"pink"
  },

  options: {
    backgroundColor: '#fff',
    marginTop: 45,
    flex: 0.5,
    height: 700,
    width: '78%',
    alignSelf: 'center',
    borderRadius: 30,
  },
  opt1: {
    backgroundColor: '#EEE6FF',
    height: 45,
    width: 210,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    height: '70%',
    marginTop: 95,
    marginLeft: 65,
    width: '100%',
    resizeMode: 'contain',
  },
});
