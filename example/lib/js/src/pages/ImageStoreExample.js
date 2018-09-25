// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var Alert$BsReactNative = require("bs-react-native/lib/js/src/alert.js");
var Image$BsReactNative = require("bs-react-native/lib/js/src/components/image.js");
var Button$BsReactNative = require("bs-react-native/lib/js/src/components/button.js");
var ImageStore$BsReactNative = require("bs-react-native/lib/js/src/imageStore.js");

var image = "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";

var component = ReasonReact.reducerComponent("ImageExample");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              var match = self[/* state */1][/* imageUri */0];
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, Button$BsReactNative.make("Has Image For Tag", undefined, undefined, (function () {
                                            var match = self[/* state */1][/* imageUri */0];
                                            ImageStore$BsReactNative.hasImageForTag(match !== undefined ? match : "", (function (has) {
                                                    return Alert$BsReactNative.alert("Does store have image?", has ? "Yes :)" : "No :(", undefined, undefined, undefined, /* () */0);
                                                  }));
                                            return /* () */0;
                                          }), undefined, "Has Image For Tag")(/* array */[])),
                              ReasonReact.element(undefined, undefined, Button$BsReactNative.make("Set image uri", undefined, undefined, (function () {
                                            ImageStore$BsReactNative.addImageFromBase64(image, (function (uri) {
                                                    return Curry._1(self[/* send */3], /* SetImageUri */[uri]);
                                                  }), (function () {
                                                    return /* () */0;
                                                  }));
                                            return /* () */0;
                                          }), undefined, "Set Image Uri")(/* array */[])),
                              ReasonReact.element(undefined, undefined, Button$BsReactNative.make("Remove Image For Tag", undefined, undefined, (function () {
                                            var match = self[/* state */1][/* imageUri */0];
                                            if (match !== undefined) {
                                              return ImageStore$BsReactNative.removeImageForTag(match);
                                            } else {
                                              return /* () */0;
                                            }
                                          }), undefined, "Remove Image For Tag")(/* array */[])),
                              ReasonReact.element(undefined, undefined, Button$BsReactNative.make("Get Base64 For Tag", undefined, undefined, (function () {
                                            var match = self[/* state */1][/* imageUri */0];
                                            if (match !== undefined) {
                                              return ImageStore$BsReactNative.getBase64ForTag(match, (function (base64) {
                                                            return Alert$BsReactNative.alert(base64, undefined, undefined, undefined, undefined, /* () */0);
                                                          }), (function () {
                                                            return /* () */0;
                                                          }));
                                            } else {
                                              return /* () */0;
                                            }
                                          }), undefined, "Get Base64 For Tag")(/* array */[])),
                              match !== undefined ? ReasonReact.element(undefined, undefined, Image$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, /* `URI */[
                                            4245324,
                                            Image$BsReactNative.imageURISource(match, undefined, undefined, undefined, undefined, undefined, undefined, /* Pt */[200], /* Pt */[200], /* () */0)
                                          ], undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[])) : null
                            ]));
            }),
          /* initialState */(function () {
              return /* record */[/* imageUri */undefined];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, _) {
              return /* Update */Block.__(0, [/* record */[/* imageUri */action[0]]]);
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var ImageExample = /* module */[
  /* component */component,
  /* make */make
];

var examples = /* array */[/* record */[
    /* title */"",
    /* description */undefined,
    /* render */(function () {
        return ReasonReact.element(undefined, undefined, make(/* array */[]));
      })
  ]];

var exampleType = /* Multiple */0;

var displayName = "ImageStore";

var title = "ImageStore";

var description = "ImageStore API (iOS only)";

exports.image = image;
exports.exampleType = exampleType;
exports.displayName = displayName;
exports.title = title;
exports.description = description;
exports.ImageExample = ImageExample;
exports.examples = examples;
/* component Not a pure module */
