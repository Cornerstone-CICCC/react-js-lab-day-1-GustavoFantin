import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import { v4 as uuidv4 } from 'uuid'
import { IUser } from './types/user.types';

  const App = () => {
    // My States
    const [users, setUsers] = useState<IUser[]>([
      { id: uuidv4(), fullname: "Ryoga Ishii", age: 23, education: "College", gender: "Male", skills: ["Typescript", "React"], bio: "I love playing minecraft." }
    ])
    const [userEdit, setUserEdit] = useState<IUser | null>(null)
    const [userDisplay, setUserDisplay] = useState<IUser>({
      id: '',
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    })
    

    /* Your handlers here */
    const handleAddUser = (user: Omit<IUser, 'id'>) => {
      setUsers(prevState => [
        ...prevState, {
          ...user,
          id: uuidv4()
        }
      ])
      alert("User Added!")
    }

    const handleDeleteUser = (id: string) => {
      setUsers(prevState =>
        prevState.filter(user => user.id !== id)
      )
      alert("Deleted User!")
    }
    
    const handleUpdateUser = (editUser: IUser) => {
      setUsers(prevState => prevState.map(u => u.id === editUser.id ? {...editUser} : u))
      setUserEdit(null)
      alert("User Updated!")
    }

    const handleEditUserId = (id: string) => {
      const found = users.find(u => u.id === id)
      if (found) {
        setUserEdit(found)
      } else {
        setUserEdit(null)
      }
    }

    const handleDisplayUserId = (id: string) => {
      const found = users.find(u => u.id === id)
        if (found) {
            setUserDisplay(found)
        }
    }


    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: ".5rem",
        padding: ".5rem"
      }}>
        <UserForm onAdd={handleAddUser} editUser={userEdit} onUpdate={handleUpdateUser}/>
        <table style={{
          width: "100%"
        }}>
          <tr>
            <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>User Id</th>
            <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>User Fullname</th>
            <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>View</th>
            <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Edit</th>
            <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Delete</th>
          </tr>
            {users.map(u => (
              <UserList key={u.id} user={u} onDelete={handleDeleteUser} onEdit={handleEditUserId} onDisplay={handleDisplayUserId}/>
            ))}
        </table>
        <UserProfile user={userDisplay}/>
      </div>
    )
}

export default App