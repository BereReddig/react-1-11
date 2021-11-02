import './Button.css';

export default function ButtonPruebita (props){
    const { id, isActive, href, number, content, clicked } = props;

    return (
        <button 
        type="button" 
        id="info-button"
        
        >
            <a
                className={isActive ? 'nav-btn btn-active' : 'nav-btn'}
                href={href}
                onClick={() => clicked(number)}
            >
                <span>{number}</span>
                {content}
            </a>
        </button>
    );
}

