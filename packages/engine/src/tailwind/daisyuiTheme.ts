// daisyUI doesn't publish a declaration for this helper subpath.
// @ts-expect-error Missing upstream module declaration for daisyui/theme.
import daisyuiTheme from 'daisyui/theme'

const daisyuiThemePlugin = daisyuiTheme as unknown

export default daisyuiThemePlugin
