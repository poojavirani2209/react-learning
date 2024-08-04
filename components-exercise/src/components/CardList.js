import { concepts } from '../data';
import { Card } from './Card';

export function CardList() {
  return (
    <>
      {concepts.map((concept) => {
        return (
          <Card name={concept.name} description={concept.description}></Card>
        );
      })}
    </>
  );
}
