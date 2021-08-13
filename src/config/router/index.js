import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  NewsDetail,
  Orders,
  OrderDetail,
  ScanQRCode,
  Login,
  Daftar,
  Auth,
  Account,
  Bantuan,
  QRAnggota,
  CariBuku,
} from './../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home,
    NewsDetail,
    ScanQRCode,
    QRAnggota,
    Bantuan,
    CariBuku,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const LoginStack = createSwitchNavigator(
  {
    Auth,
    Login,
    Daftar,
    Home,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
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

const OrdersStack = createStackNavigator(
  {
    Orders,
    OrderDetail,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Orders',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
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
