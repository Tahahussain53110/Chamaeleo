import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BulletPoint } from './form';

interface IDayDetails {
  agenda: [string];
  dayNumber: number;
}

const DayDetails = ({ agenda, dayNumber }: IDayDetails) => (
  <View>
    <Text style={styles.subheading}>Day - {dayNumber}</Text>
    <View style={styles.bulletContainer}>
      {agenda.map((item, index) => (
        <View key={index} style={styles.agenda}>
          <BulletPoint />
          <Text style={styles.agendaText}>{item}</Text>
        </View>
      ))}
    </View>
  </View>
);

export default DayDetails;
const styles = StyleSheet.create({
  subheading: {
    fontWeight: '600',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  bulletContainer: {
    marginHorizontal: 30,
  },
  agenda: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  agendaText: {
    marginLeft: 5,
  },
});
