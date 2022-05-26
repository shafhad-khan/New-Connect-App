import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import GetOtpBg from '../Assests/Group_2433.svg';
import Bubble from '../Components/Bubble';
import {OTP} from 'react-native-otp-form';
import EditPencilIcon from '../Components/EditPencilIcon';

const GetOtpScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.UpperView}>
        <Bubble />

        <View style={styles.OtpBgImageView}>
          <GetOtpBg width={'50%'} height={'50%'} />
        </View>
      </View>

      {/* Bottom View */}
      <View style={[styles.BottomView,{bottom:0}]}>
        <View style={{flexDirection: 'column', marginTop: '10%'}}>
          <Text style={styles.EnterOtpText}>Enter OTP</Text>
        </View>
        <View
          style={styles.WehaveSent4DigOtp_TextView}>
          <Text style={{color:'#5F6368'}}>We have sent 4 digit OTP on </Text>
          <Text style={{color: '#000000'}}>9897969543 </Text>
          <TouchableOpacity>
            <EditPencilIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.roundedTextInput}>
          {/* <OTPTextView 
          handleTextChange={(e) => {}}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          defaultValue=""
        /> */}

          <OTP
            codeCount={4}
            otpStyles={{backgroundColor: '#eee', borderRadius: 13}}
            onTyping={''}
          />
        </View>

        <View style={styles.OtpTimerView}>
          <Text style={{color: 'rgba(95, 99, 104, 1)'}}>
            Time left : 10 sec{' '}
          </Text>
          <Text style={{color: 'rgba(95, 99, 104, 1)'}}>
            Didn’t Received?{' '}
            <TouchableOpacity
              onPress={() => Alert.alert('Navigate to Mobile Screen')}>
              <Text style={styles.ResentButtonText}>Resend</Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => Alert.alert('Number Varification API Call')}
            style={styles.VerifyButton}>
            <Text style={styles.VerifyButtonText}>VERIFY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetOtpScreen;

const styles = StyleSheet.create({
  UpperView: {
    height: '55%',
    width: '100%',
    backgroundColor: '#F7FCFF',
  },

  roundedTextInput: {
    margin: 15,
    marginLeft: -5,
    marginBottom:12,
    marginTop:10,
    flexDirection: 'row',
    
  },
  BottomView: {
    width: '100%',
    height: '45%',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#FFFFFF',
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: -2,
    },

    // elevation: {
    //   elevation: 20,
    //   shadowColor: 'red',
    // },
  },
  OtpBgImageView: {
    width: '100%',
    height: '100%',
    marginLeft: 10,
    marginTop: '23%',
  },
  VerifyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  VerifyButton: {
    width: '90%',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1%',
    backgroundColor: 'rgba(14, 0, 113, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  ResentButtonText: {
    color: 'rgba(0, 112, 252, 1)',
    textDecorationLine: 'underline',
    marginRight: 5,
  },
  EnterOtpText: {
    color: 'rgba(0, 0, 0, 1)',
    alignItems: 'stretch',
    fontWeight: 'bold',
    fontSize: 24,
    margin: 10,
    marginLeft: 20,
    opacity: 1,
    
  },
  WehaveSent4DigOtp_TextView: {
    flexDirection: 'row', padding: 20, alignItems: 'flex-end',marginTop:-20
  },
  OtpTimerView: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
