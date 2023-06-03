import React, { useState } from 'react';
import { View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <View>
      <CalendarPicker
        onDateChange={onDateChange}
        selectedStartDate={selectedDate}
      />
      </View>
      );
}

      export default Calendar;