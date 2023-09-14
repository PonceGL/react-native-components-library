this repository is for testing how to create a component library for react native


add to Podfile
```rb
require_relative '../node_modules/@poncegl/library/react_native_theme_pods'
```

and 

```rb
use_theme_modules!()
```

if node_modules is at a higher level add

```rb
node_modules_path = '../../'

use_theme_modules!(:node_modules_path => node_modules_path)
```

