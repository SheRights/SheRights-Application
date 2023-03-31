import {View, Text, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');
const QuestionCard = ({data, selectedOption}) => {
  return (
    <View style={{width: width}}>
      <Text
        style={{
          color: 'red',
          //marginLeft:38,
          marginTop: 20,
          fontSize: 20,
          textAlign: 'center',
          marginHorizontal: 10
        }}>
        {data.question}
      </Text>
      <View style={{marginTop: 20, backgroundColor: '#fff', padding: 10, borderRadius: 20, margin: 30}}>
        <FlatList
          data={data.Options}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 50,
                  elevation: 3,
                  backgroundColor: data.marked == index + 1 ? 'purple' : '#EEE6FF',
                  marginTop: 10,
                  marginBottom: 10,
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: "center",
                  paddingLeft: 15,
                  flexDirection: 'row',
                  borderRadius: 20,
                }}
                onPress={() => {
                  selectedOption(index + 1);
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold',color:data.marked == index + 1 ?'#fff':'#000'}}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default QuestionCard;