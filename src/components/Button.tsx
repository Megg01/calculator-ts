interface Props {
    label: string;
    purpose?: string;
}

const Button = ({ label, purpose = 'number' }: Props) => {
    return (
        <>
            <button
                className="btn btn-primary"
                data-label={label}
                data-purpose={purpose}
            >
                {label}
            </button>
        </>
    );
};

export default Button;
