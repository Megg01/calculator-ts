interface Props {
    label: string;
    purpose?: string;
    onClick: (e: React.MouseEvent) => void;
}

const Button = ({ label, purpose, onClick }: Props) => {
    
    return (
        <>
            <button
                className="btn btn-primary"
                data-label={label}
                data-purpose={purpose}
                onClick={e => onClick(e)}
                value={label}
            >
                {label}
            </button>
        </>
    );
};

export default Button;
