import PropTypes from 'prop-types' 

import { Button} from './styles'

//TypScript -> JavaScript com Tipagem

function DefaultButton({children, theme, ...props}){

    return(
        <Button {...props} theme={theme}>{children}</Button>
    )

}

DefaultButton.PropTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultButton