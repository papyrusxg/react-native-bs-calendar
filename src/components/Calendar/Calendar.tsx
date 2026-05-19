import { useRef } from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";

import { NEPALI_DATES } from "../../constants/dates";
import type { NepaliDatesType } from "../../types";
import { calendarStyles } from "./styles";

export const Calendar = () => {
  const flatListRef = useRef<FlatList | null>(null);
  const { width } = useWindowDimensions();

  console.log("test");

  const renderCalendarItem = ({ item }: { item: NepaliDatesType }) => {
    return (
      <View style={[calendarStyles.slide, { width }]}>
        <View style={calendarStyles.yearBadge}>
          <Text style={calendarStyles.eraLabel}>B.S.</Text>
          <Text style={calendarStyles.yearText}>{item.year}</Text>
        </View>

        <View style={calendarStyles.content}>
          <Text style={calendarStyles.contentPlaceholder}>
            {JSON.stringify(item, null, 2)}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={calendarStyles.container}>
      <FlatList
        ref={flatListRef}
        data={NEPALI_DATES}
        renderItem={renderCalendarItem}
        keyExtractor={(item) => String(item.year)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
};
