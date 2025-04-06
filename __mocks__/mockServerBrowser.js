import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const mockServerBrowser = setupWorker(...handlers)
