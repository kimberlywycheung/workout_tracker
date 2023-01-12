import Card from './Card.jsx';

export default function List({ workouts }) {
  workouts = [{title: ''}];

  return (
    <>
    <div>
      { workouts.map((workout) => {
        return <Card key={workout.title} workout={workout}></Card>
      })}
    </div>
    </>
  );
}