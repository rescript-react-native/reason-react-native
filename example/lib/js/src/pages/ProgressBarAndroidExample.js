// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var View$BsReactNative = require("bs-react-native/lib/js/src/components/view.js");
var ProgressBarAndroid$BsReactNative = require("bs-react-native/lib/js/src/components/progressBarAndroid.js");

var component = ReasonReact.statelessComponent("ExampleHorizontal");

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
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, undefined, undefined, undefined, /* Horizontal */208994564, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[])),
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, "#2196F3", undefined, undefined, /* Horizontal */208994564, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[])),
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, undefined, false, 0.5, /* Horizontal */208994564, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[]))
                            ]));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var ExampleHorizontal = /* module */[
  /* component */component,
  /* make */make
];

var component$1 = ReasonReact.statelessComponent("ExampleInverse");

function make$1() {
  return /* record */[
          /* debugName */component$1[/* debugName */0],
          /* reactClassInternal */component$1[/* reactClassInternal */1],
          /* handedOffState */component$1[/* handedOffState */2],
          /* willReceiveProps */component$1[/* willReceiveProps */3],
          /* didMount */component$1[/* didMount */4],
          /* didUpdate */component$1[/* didUpdate */5],
          /* willUnmount */component$1[/* willUnmount */6],
          /* willUpdate */component$1[/* willUpdate */7],
          /* shouldUpdate */component$1[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(undefined, undefined, View$BsReactNative.make(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, undefined, undefined, undefined, /* Inverse */188904336, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[])),
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, "#2196F3", undefined, undefined, /* Inverse */188904336, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[])),
                              ReasonReact.element(undefined, undefined, ProgressBarAndroid$BsReactNative.make(undefined, undefined, undefined, 0.5, /* Inverse */188904336, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)(/* array */[]))
                            ]));
            }),
          /* initialState */component$1[/* initialState */10],
          /* retainedProps */component$1[/* retainedProps */11],
          /* reducer */component$1[/* reducer */12],
          /* subscriptions */component$1[/* subscriptions */13],
          /* jsElementWrapped */component$1[/* jsElementWrapped */14]
        ];
}

var ExampleInverse = /* module */[
  /* component */component$1,
  /* make */make$1
];

var examples = /* array */[
  /* record */[
    /* title */"Horizontal",
    /* description */"ProgressBarAndroid with Horizontal styleAttr",
    /* render */(function () {
        return ReasonReact.element(undefined, undefined, make(/* array */[]));
      })
  ],
  /* record */[
    /* title */"Inverse",
    /* description */"ProgressBarAndroid with Inverse styleAttr",
    /* render */(function () {
        return ReasonReact.element(undefined, undefined, make$1(/* array */[]));
      })
  ]
];

var exampleType = /* Multiple */0;

var displayName = "ProgressBarAndroid";

var title = "<ProgressBarAndroid>";

var description = "Simple React Native ProgressBarAndroid component (only Android)";

exports.exampleType = exampleType;
exports.displayName = displayName;
exports.title = title;
exports.description = description;
exports.ExampleHorizontal = ExampleHorizontal;
exports.ExampleInverse = ExampleInverse;
exports.examples = examples;
/* component Not a pure module */
