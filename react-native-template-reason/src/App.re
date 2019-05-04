/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Converted from https://github.com/facebook/react-native/blob/d752446b23e0a12171ca0c01d20f5be625f40455/template/App.js
 */
open ReactNative;

module Styles = {
  open Style;

  let container = style(
    ~flex=1.,
    ~justifyContent=`center,
    ~alignItems=`center,
    ~backgroundColor="#F5FCFF"
  );

  let welcome = style(
    ~fontSize=20.,
    ~textAlign=`center,
    ~margin=pt(10.)
  );

  let instructions = style(
    ~textAlign=`center,
    ~color="#333333",
    ~marginBottom=pt(5.)
  );
};

[@react.component]
let app = () => {
  let instructions =
    switch(Platform.os) {
    | ios => "Press Cmd+R to reload,\n" ++ "Cmd+D or shake for dev menu"
    | android =>
      "Double tap R on your keyboard to reload,\n"
      ++ "Shake or press menu button for dev menu"
    };

  <View style={Styles.container()}>
    <Text style={Styles.welcome()}>
      "Welcome to (Bs) React Native!"->React.string
    </Text>
    <Text style={Styles.instructions()}>
      "To get started, edit src/App.re"->React.string
    </Text>
    <Text style={Styles.instructions()}>
      instructions->React.string
    </Text>
  </View>;
};
