type Props = {
    label: string;
    purpose?: string;
};

const Button = ({ label, purpose = 'number' }: Props) => {
    return (
        <>
            <button className="btn btn-primary" label={label} purpose={purpose}>
                {label}
            </button>
        </>
    );
};

export default Button;
