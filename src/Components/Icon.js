import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

const Icon = ({icon, ...rest}) => {
    return (
        <FontAwesomeIcon icon={icon} {...rest}></FontAwesomeIcon>
    );
}
 
export default Icon;