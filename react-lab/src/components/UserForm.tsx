import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { IUser } from "../types/user.types"

type Props = {
  onAdd: (user: Omit<IUser, 'id'>) => void,
  onUpdate: (user: IUser) => void,
  editUser: IUser | null
}

const UserForm = ({ onAdd, onUpdate, editUser }: Props) => {
  const [formData, setFormData] = useState<IUser>({
    id: '',
    fullname: '',
    age: 0,
    education: '',
    gender: '',
    skills: [],
    bio: ''
  })

  //my handlers
  useEffect(() => {
    if (editUser) {
      setFormData({
        id: editUser.id,
        fullname: editUser.fullname,
        age: editUser.age,
        education: editUser.education,
        gender: editUser.gender,
        skills: editUser.skills,
        bio: editUser.bio
      })
    }
  }, [editUser])

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prevState => {
        const skills = checked ? [...prevState.skills, value] : prevState.skills.filter(skill => skill !== value)
        return {
          ...prevState,
          skills: skills
        }
      })
    } else { 
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editUser) {
      onUpdate(formData)
    } else {
      onAdd(formData)
    }
    setFormData({
      id: '',
      fullname: '',
      age: 0,
      education: '',
      gender: '',
      skills: [],
      bio: ''
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Full Name" name="fullname" onChange={handleChange} value={formData.fullname}/>
      <input type="number" placeholder="Age" name="age" value={formData.age} onChange={handleChange}/>
      <select name="education" value={formData.education} onChange={handleChange}>
        <option value="">Education</option>
        <option value="Grade School">Grade School</option>
        <option value="High School">High School</option>
        <option value="College">College</option>
      </select>
      Gender
      <input type="radio" name="gender" id="male" value="male" checked={formData.gender === "male"} onChange={handleChange}/>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="female" value="female" checked={formData.gender === "female"} onChange={handleChange} />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="other" value="other"  checked={formData.gender === "other"} onChange={handleChange}/>
      <label htmlFor="other">Other</label>
      <label>
        Typescript
        <input type="checkbox" name="skills" value="Typescript" checked={formData.skills.includes("Typescript")} onChange={handleChange}/>
      </label>
      <label>
        React
        <input type="checkbox" name="skills" value="React" checked={formData.skills.includes("React")} onChange={handleChange}/>
      </label>
      <label>
        Node
        <input type="checkbox" name="skills" value="Node" checked={formData.skills.includes("Node")} onChange={handleChange}/>
      </label>
      <label>
        NoSQL
        <input type="checkbox" name="skills" value="NoSQL" checked={formData.skills.includes("NoSQL")} onChange={handleChange}/>
      </label>
      <textarea name="bio"  value={formData.bio} onChange={handleChange}>Bio:</textarea>
      <button>Add/Save User</button>
      <button>Clear Form</button>
    </form>
  )
}

export default UserForm