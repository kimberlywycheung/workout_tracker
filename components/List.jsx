import Card from './Card.jsx';

export default function List({ workouts }) {

  if (!workouts) {
    return;
  }

  return (
    <>
    <div>
      {
        workouts.map((workout) => {
          return <Card key={workout.url} workout={workout}></Card>
        })
      }
    </div>
    </>
  );
}