import UsersImage from '../../assets/users.png'
import { Background } from './styles'

function TopBackground() {

    return (
        <Background>
            <img src={UsersImage} alt='Imagem-Usuário' />
        </Background>
    )
}

export default TopBackground