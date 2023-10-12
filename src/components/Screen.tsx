import '../styles/screen.css';

interface Props {
    equation?: string;
    value: string;
}

const Screen = ({ equation, value }: Props) => {
    return (
        <>
            <div id="equation">{equation}</div>
            <div id="value">{value}</div>
        </>
    );
};

export default Screen;
