# Workaround: https://github.com/software-mansion/react-native-reanimated/issues/4562
# Disabled hermes because firebase is not compatible and there is issue with reanimated
# TODO: Enabled hermes when update Firebase
ENV['USE_HERMES'] = '0'

# This is a Ruby method definition that takes an optional hash argument `options`. If `options` is not
# provided, it defaults to an empty hash. The method sets a local variable `path` to the value of the
# `:node_modules_path` key in the `options` hash, or to `'../../'` if the key is not present. The
# method then uses the `pod` command to add several pods to a CocoaPods project, with their paths
# based on the `path` variable.
def use_theme_modules! (options = {})
  path = options[:node_modules_path] ||= '../'

  pod 'BVLinearGradient', :path => "#{path}node_modules/react-native-linear-gradient"
end
