export const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') return

  const { mockServerBrowser } = await import('../../__mocks__/mockServerBrowser')
  await mockServerBrowser.start()
}
