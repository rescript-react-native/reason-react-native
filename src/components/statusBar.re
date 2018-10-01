[@bs.module "react-native"]
external statusBar: ReasonReact.reactClass = "StatusBar";

[@bs.scope "StatusBar"] [@bs.module "react-native"]
external _setHidden: (bool, Js.Undefined.t(string)) => unit = "setHidden";

let setHidden = (hidden, ~animation=?, ()) =>
  _setHidden(
    hidden,
    Js.Undefined.fromOption(
      UtilsRN.option_map(
        x =>
          switch (x) {
          | `none => "none"
          | `fade => "fade"
          | `slide => "slide"
          },
        animation,
      ),
    ),
  );

[@bs.scope "StatusBar"] [@bs.module "react-native"]
external _setBarStyle: (string, Js.Undefined.t(bool)) => unit = "setBarStyle";

let setBarStyle = (style, ~animated=?, ()) =>
  _setBarStyle(
    switch (style) {
    | `default => "default"
    | `lightContent => "light-content"
    | `darkContent => "dark-content"
    },
    Js.Undefined.fromOption(animated),
  );

[@bs.scope "StatusBar"] [@bs.module "react-native"]
external _setNetworkActivityIndicatorVisible: bool => unit =
  "setNetworkActivityIndicatorVisible";

let setNetworkActivityIndicatorVisible = visible =>
  _setNetworkActivityIndicatorVisible(visible);

[@bs.scope "StatusBar"] [@bs.module "react-native"]
external _setBackgroundColor: (string, Js.Undefined.t(bool)) => unit =
  "setBackgroundColor";

let setBackgroundColor = (color, ~animated=?, ()) =>
  _setBackgroundColor(color, Js.Undefined.fromOption(animated));

[@bs.scope "StatusBar"] [@bs.module "react-native"]
external _setTranslucent: bool => unit = "setTranslucent";

let setTranslucent = translucent => _setTranslucent(translucent);

let make =
    (
      ~animated=?,
      ~barStyle=?,
      ~hidden=?,
      ~backgroundColor=?,
      ~translucent=?,
      ~networkActivityIndicatorVisible=?,
      ~showHideTransition=?,
    ) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=statusBar,
    ~props={
      "animated": animated,
      "barStyle":
        UtilsRN.option_map(
          x =>
            switch (x) {
            | `default => "default"
            | `lightContent => "light-content"
            | `darkContent => "dark-content"
            },
          barStyle,
        ),
      "backgroundColor": backgroundColor,
      "hidden": hidden,
      "translucent": translucent,
      "networkActivityIndicatorVisible": networkActivityIndicatorVisible,
      "showHideTransition":
        UtilsRN.option_map(
          x =>
            switch (x) {
            | `none => "none"
            | `fade => "fade"
            | `slide => "slide"
            },
          showHideTransition,
        ),
    },
  );