import { CardBody } from './styles'

interface User {
	name: string
	age: number
	hobby: string
}

const Card = ({ name, age, hobby }: User) => {
	return (
		<CardBody>
			<p>Nome: {name}</p>
			<p>Idade: {age}</p>
			<p>Hobby: {hobby}</p>
		</CardBody>
	)
}

export default Card
