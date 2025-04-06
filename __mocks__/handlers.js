import mockAssets from './assets/mockAssets'
import mockAuth from './api/mamma-mia/auth/mockAuth'
import mockCheckouts from './api/mamma-mia/checkouts/mockCheckouts'
import mockProducts from './api/mamma-mia/products/mockProducts'

export const handlers = [
  ...mockAssets,
  ...mockAuth,
  ...mockCheckouts,
  ...mockProducts
]
