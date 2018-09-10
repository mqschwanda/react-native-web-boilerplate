/**
 * hack `global.self` because the fetch polyfill requires self or this to be
 * defined.
 * @see {@link https://github.com/facebook/react-native/issues/9599}
 */
if (global && !('self' in global)) global.self = global;
