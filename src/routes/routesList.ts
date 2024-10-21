import EventDetails from '../screens/EventDetail';
import { BottomTabs } from './BottomTabs';

export const initialRouteName = 'Home';

export const RouteList = [
  { name: 'start', component: BottomTabs },
  { name: 'EventDetails', component: EventDetails },
];
