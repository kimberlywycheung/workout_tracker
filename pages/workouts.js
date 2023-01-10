import { useState } from 'react';
import Head from 'next/head'
import Header from '../components/Header.jsx';

const Workouts = () => {

  const [workouts, setWorkouts] = useState([]);

  return (
    <>
    <Head>
      <title>Workout YTracker</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header></Header>
    </>
  );
};

export default Workouts;