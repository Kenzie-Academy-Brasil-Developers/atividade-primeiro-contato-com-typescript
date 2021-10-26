import { useState } from 'react'
import { Input } from './components/Input'
import { CardContainer, MainContainer } from './style'
import Card from './components/Card'

interface User {
	name: string
	age: number
	hobby: string
}

function App() {
	const [users, setUsers] = useState<User[]>([] as User[])
	const [name, setName] = useState<string>('')
	const [age, setAge] = useState<number>(0)
	const [hobby, setHobby] = useState<string>('')

	const handleClick = () => {
		const user = { name, age, hobby }
		setUsers([...users, user])
	}

	return (
		<MainContainer>
			<div>
				<Input placeholder='Nome' onChange={(e) => setName(e.target.value)} />
				<Input
					placeholder='Idade'
					onChange={(e) => setAge(Number(e.target.value))}
				/>
				<Input placeholder='Hobby' onChange={(e) => setHobby(e.target.value)} />
				<button onClick={handleClick}>Enviar</button>
			</div>
			<CardContainer>
				{users.map((user, index) => {
					return (
						<section key={index}>
							<Card name={user.name} age={user.age} hobby={user.hobby} />
						</section>
					)
				})}
			</CardContainer>
		</MainContainer>
	)
}

export default App
