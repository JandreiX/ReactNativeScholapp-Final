import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OrderContainer = ({
  eventTime,
  orderStatusMessage,
  orderStatusDescription,
  showSTTRK,
  propTop,
  propWidth,
  propWidth1,
}) => {
  const sTTRKStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth),
    };
  }, [propTop, propWidth]);

  const yourOrderAlreadyStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth1),
    };
  }, [propWidth1]);

  return (
    showSTTRK && (
      <View style={[styles.stTrk, sTTRKStyle]}>
        <Text style={[styles.jan2024850, styles.jan2024850Clr]}>
          {eventTime}
        </Text>
        <Image
          style={styles.stTrkChild}
          contentFit="cover"
          source={orderStatusMessage}
        />
        <Text
          style={[
            styles.yourOrderAlready,
            styles.jan2024850Clr,
            yourOrderAlreadyStyle,
          ]}
        >
          {orderStatusDescription}
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  jan2024850Clr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.abelRegular,
  },
  jan2024850: {
    fontSize: FontSize.size_2xs,
    textAlign: "center",
  },
  stTrkChild: {
    width: 10,
    height: 10,
    marginLeft: 20,
  },
  yourOrderAlready: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    width: 199,
    marginLeft: 20,
  },
  stTrk: {
    position: "absolute",
    top: 244,
    left: 20,
    width: 298,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default OrderContainer;
