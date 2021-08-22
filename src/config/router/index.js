import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  Riwayat,
  ScanQRCode,
  Login,
  Daftar,
  Auth,
  Account,
  Bantuan,
  QRAnggota,
  CariBuku,
  DetailBuku,
  QRPinjam,
  SplashScreen,
} from './../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home,
    ScanQRCode,
    QRAnggota,
    Bantuan,
    CariBuku,
    DetailBuku,
    QRPinjam,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const LoginStack = createSwitchNavigator(
  {
    SplashScreen,
    Auth,
    Login,
    Daftar,
    Home,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SplashScreen',
  },
);

const AccountStack = createStackNavigator(
  {
    Account,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Account',
  },
);

const ScanStack = createStackNavigator(
  {
    ScanQRCode,
    Home,
  },
  {
    headerMode: 'none',
    initialRouteName: 'ScanQRCode',
  },
);

const RiwayatStack = createStackNavigator(
  {
    Riwayat,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Riwayat',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    RiwayatStack,
    ScanStack,
    LoginStack,
    AccountStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginStack',
  },
);

export default createAppContainer(Router);
