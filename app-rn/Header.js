import * as React from "react";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MyComponent = () => {
  const insets = useSafeAreaInsets();
  return (
    <Appbar.Header safeAreaInsets={insets.top}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title="Title" />
    </Appbar.Header>
  );
};

export default MyComponent;
