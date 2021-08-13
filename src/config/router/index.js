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
} from './../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home,
    NewsDetail,
    ScanQRCode,
    QRAnggota,
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

const BantuanStack = createStackNavigator(
  {
    Bantuan,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Bantuan',
  },
);

const Router = createSwitchNavigator(
  {
    HomeStack,
    OrdersStack,
    ScanStack,
    LoginStack,
    AccountStack,
    BantuanStack,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeStack',
  },
);

export default createAppContainer(Router);
