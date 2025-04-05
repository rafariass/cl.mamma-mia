const NotFound = () => {
  return (
    <div className='d-flex align-items-center justify-content-center bg-common bg-not-found'>
      <div className='container text-center'>
        <div className='container bg-banner rounded-4 shadow py-5'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-3'>
              <h1 className='display-1 f-not-found text-danger'>: (</h1>
            </div>
            <div className='col-md-6'>
              <h3 className='font-weight-bold f-pizza' style={{ fontSize: '45px' }}>Error 404 - Web not found.</h3>
              <p className='lead'>The page you are looking for may have been removed or is temporarily unavailable.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
