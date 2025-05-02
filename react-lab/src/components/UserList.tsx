import { IUser } from "../types/user.types"

type Props = {
  user: IUser,
  onDelete: (id: string) => void,
  onEdit: (id: string) => void,
  onDisplay: (id: string) => void
}

const UserList = ({ user, onDelete, onEdit, onDisplay }: Props) => {
  return (
    <tr>
      <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.id}</td>
      <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.fullname}</td>
      <td><button onClick={() => onDisplay(user.id)}>View</button></td>
      <td><button onClick={() => onEdit(user.id)}>Edit</button></td>
      <td><button onClick={() => onDelete(user.id)}>Delete</button></td>
    </tr>
  )
}

export default UserList