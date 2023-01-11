import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header.jsx';
import Graph from '../components/Graph.jsx';
import List from '../components/List.jsx';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  // grab data on load
  useEffect(() => {

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
      <Graph></Graph>
      <List></List>
    </main>
    </>
  );
};

export default Workouts;