import { useContext, useEffect, useState } from 'react'
import { AreaWork } from '../../components'
import { MammaMiaContext } from '../../contexts/MammaMiaContext'

const Profile = () => {
  const { getProfile, logOut } = useContext(MammaMiaContext)
  const [userProfile, setUserProfile] = useState({ id: 'loading', email: 'loading' })

  const getData = async () => {
    const profile = await getProfile()
    setUserProfile(profile)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AreaWork bg='bg-common bg-profile'>
      <div className='bg-white p-4 rounded-4 profile-section'>
        <h1 className='text-center mb-3 pb-1 border-bottom f-pizza'>Profile</h1>
        <div className='row py-1'>
          <label className='col-md-2 col-form-label'>Id:</label>
          <div className='col-md-10'>
            <input type='text' readOnly className='form-control-plaintext text-md-end border-bottom' value={userProfile.id} />
          </div>
        </div>
        <div className='row py-1'>
          <label className='col-md-2 col-form-label'>Email:</label>
          <div className='col-md-10'>
            <input type='text' readOnly className='form-control-plaintext text-md-end border-bottom' value={userProfile.email} />
          </div>
        </div>
        <button className='btn btn-danger w-100 mt-3' onClick={logOut}>LogOut</button>
      </div>
    </AreaWork>
  )
}

export default Profile
