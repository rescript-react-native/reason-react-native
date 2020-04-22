type os = string;

[@bs.module "react-native"] [@bs.scope "Platform"] external os: os = "OS";

[@bs.module "react-native"] [@bs.scope "Platform"]
external version: string = "Version";

[@bs.inline]
let ios = "ios";

[@bs.inline]
let android = "android";

// react-native-web
[@bs.inline]
let web = "web";

external unsafe: string => os = "%identity";
