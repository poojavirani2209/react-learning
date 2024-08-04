import './Card.css';

export function Card({name,description}) {
  return (
    <div class='card'>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
