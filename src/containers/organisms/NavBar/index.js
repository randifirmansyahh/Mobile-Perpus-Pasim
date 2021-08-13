import React, {Component} from 'react';
import {View} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ac: 'Home',
    };

    AsyncStorage.getItem('@ac', (error, result) => {
      if (result) {
        this.setState({
          ac: result,
        });
      }
    });
  }
  render() {
    return (
      <View
        style={{
          height: 54,
          flexDirection: 'row',
          backgroundColor: 'white',
          borderTopColor: '#e8e9ed',
          borderTopWidth: 1,
        }}>
        {/* Start NavBarIcon */}

        <NavBarIcon
          onPress={() => {
            AsyncStorage.setItem('@ac', 'Riwayat');
            // alert(this.state.ac);
            this.props.navigation.navigate('Orders');
          }}
          title="Riwayat"
          img={require('./../../../assets/images/icon/his.png')}
          active={this.state.ac == 'Riwayat' ? true : false}
        />
        <NavBarIcon
          onPress={() => {
            AsyncStorage.setItem('@ac', 'Home');
            this.props.navigation.navigate('Home');
          }}
          title="Home"
          img={require('./../../../assets/images/icon/homee.png')}
          active={this.state.ac == 'Home' ? true : false}
        />
        {/* <NavBarIcon
          onPress={() => {
            AsyncStorage.setItem('@ac', 'Bantuan');
            this.props.navigation.navigate('Bantuan');
          }}
          title="Bantuan"
          img={
            this.state.ac == 'Bantuan'
              ? require('./../../../assets/images/icon/help-active.png')
              : require('./../../../assets/images/icon/help.png')
          }
          active={this.state.ac == 'Bantuan' ? true : false}
        /> */}
        {/* <NavBarIcon
          onPress={() => this.props.navigation.navigate('')}
          title="Pesan"
          img={require('./../../../assets/images/icon/inbox.png')}
        /> */}
        <NavBarIcon
          onPress={() => {
            AsyncStorage.setItem('@ac', 'Account');
            // alert(this.state.ac);
            this.props.navigation.navigate('Account');
          }}
          title="Account"
          img={require('./../../../assets/images/icon/user.png')}
          active={this.state.ac == 'Account' ? true : false}
        />
        {/* End NavBarIcon */}
      </View>
    );
  }
}

export default withNavigation(NavBar);
