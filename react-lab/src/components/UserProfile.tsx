import { IUser } from "../types/user.types"

type Props = {
  user: IUser
}

const UserProfile = ({ user }: Props) => {
  return (
    <table style={{
      width: "100%"
    }}>
      <tr>
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Id</th >
        <th  style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Fullname</th >
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Age</th >
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Education</th >
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Gender</th >
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Skills</th >
        <th style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>Bio</th>
      </tr>
      <tr>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.id}</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.fullname}</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.age}</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.education}</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.gender}</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.skills.join(', ')}.</td>
        <td style={{
              border: "1px solid #dddddd",
              padding: '8px'
            }}>{user.bio}</td>
      </tr>
    </table>
  )
}

export default UserProfile