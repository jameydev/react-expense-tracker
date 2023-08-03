import './Card.css';

export default function Card(props) {
    const classNames = `card ${props.className}`;
    return <div className={classNames}>{props.children}</div>;
}