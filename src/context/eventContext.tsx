import React, {
  useState,
  createContext,
  FC,
  ReactNode,
  useEffect,
} from 'react';
import { getEvent } from '../services/apiCalls';
import { IEventsContext } from '../types';

const defaultEventsContext: IEventsContext = {
  event: {
    eventName: '',
    eventType: '',
    startDate: '',
    location: '',
    manager: '',
    website: '',
    totalParticipants: '',
    day1: [''],
    day2: [''],
    image: '',
  },
};
export const EventsContext =
  createContext<IEventsContext>(defaultEventsContext);

interface Props {
  children: ReactNode;
}

const EventsContextContainer: FC<Props> = props => {
  const [event, setEvent] = useState(defaultEventsContext.event);

  const getEvents = async () => {
    const res = await getEvent();
    setEvent(res);
  };
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventsContext.Provider
      value={{
        event,
      }}
    >
      {props.children}
    </EventsContext.Provider>
  );
};

export default EventsContextContainer;
