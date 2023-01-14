import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';

import Header from '../components/Header.jsx';
import Graph from '../components/Graph.jsx';
import List from '../components/List.jsx';

const Workouts = () => {
  const [workouts, setWorkouts] = useState(null);

  // grab data on load
  useEffect(() => {
    // getAll(setWorkouts);
    getSummary(setWorkouts);
    console.log(workouts);
  }, []);

  return (
    <>
    <Head>
      <title>Workout YTracker</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header></Header>

    <main className={styles.main}>
      {/* <Graph id="graph"></Graph> */}
      <List workouts={workouts}></List>
    </main>
    </>
  );
};

// get workouts
const getAll = (cb) => {
  axios.get('/api/workouts/all')
    .then(({ data }) => cb(data))
    .catch(err => console.log(err));
};

const getSummary = (cb) => {
  axios.get('/api/workouts/summary')
    .then(({ data }) => cb(data))
    .catch(err => console.log(err));
};

// Workouts.getInitialProps = async (ctx) => {
//   axios.get("/api/workouts/kim")
//     .then(({ data }) => {{ workoutList: data }})
//     .catch(err => console.log('thisistheerr:', err));
// };

export default Workouts;