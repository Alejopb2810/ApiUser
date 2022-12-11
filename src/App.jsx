import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './assets/hooks/useCrud'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const { users,
    getAllusers,
    deleteUserById,
    createNewUser,
    updateUserById
  } = useCrud()
  const [updateInfo, setUpdateInfo] = useState()

  useEffect(() => {
    getAllusers()
  }, [])

  return (
    <div className="App">
      <h1 className='App__title'>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>➕ Add Users</button>
      <div className={`form-container ${closeForm && 'close__form'}`}
      >
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className="user-container">
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
