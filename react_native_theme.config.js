module.exports = {
  /* This is defining a function called `dependencies` that takes an optional `options` object as a
  parameter with a default value of `{ node_modules_path: null }`. The function then sets a variable
  `path` to the value of `options.node_modules_path` if it exists, otherwise it sets it to `'../../'`.
  The function then returns an object with various dependencies as keys, each with a `platforms`
  object that disables linking on iOS and a `root` property that sets the path to the dependency's
  root directory. */
  dependencies: (options = {node_modules_path: null}) => {
    let path = options.node_modules_path ? options.node_modules_path : '../../';

    return {
      'react-native-linear-gradient': {
        platforms: {
          ios: null,
        },
        root: `${path}node_modules/react-native-linear-gradient`,
      },
    };
  },
};
