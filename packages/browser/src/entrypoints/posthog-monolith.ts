import './posthog-recorder'
import './surveys'
import './logs'
import './exception-autocapture'
import './tracing-headers'
import './web-vitals'
import './dead-clicks-autocapture'
import './default-extensions'
import { init_as_module } from '../posthog-core'
import { assignableWindow } from '../utils/globals'

// Initialize the global posthog object
const posthog = init_as_module()

// Explicitly assign to window to prevent Terser from dropping it
if (typeof window !== 'undefined') {
    (window as any).posthog = posthog;
}

// Export it as the default export for the IIFE bundle
export default posthog
