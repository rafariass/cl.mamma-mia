const AreaWork = ({ children, bg = '' }) => {
  return (
    <div className='area-work'>
      <div className={`${bg} w-100 h-100 d-flex align-items-center justify-content-center`}>
        <div className='p-2 p-md-5'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AreaWork
