import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SkillCard(props){
    return (
        <div>
        <FontAwesomeIcon icon={`fa-brands ${props.icon}`} size="4x" />
        <p>{props.name}</p>
        </div>
    )

}

export default SkillCard;