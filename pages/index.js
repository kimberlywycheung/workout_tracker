import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { Snackbar , Alert } from '@mui/material';

import { useState, useEffect, forwardRef } from 'react';
import axios from 'axios';

import Header from '../components/Header.jsx';
import Add from '../components/Add.jsx';
import Form from '../components/Form.jsx';
import Graph from '../components/Graph.jsx';
import List from '../components/List.jsx';

const Home = () => {
  const [homeView, setHomeView] = useState(true);
  const [url, setUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [workouts, setWorkouts] = useState(null);
  const [openSnackbar, setSnackbar] = useState(false);

  useEffect(() => {
    if (!url) {
      setFormData(null);
    }
  }, [url]);

  useEffect(() => {
    if (!homeView) {
      axios.get('/api/workouts/summary')
        .then(({ data }) => setWorkouts(data))
        .catch(err => console.log(err));
    }
  }, [homeView]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar(false);
  };

  return (
    <>
      <Head>
        <title>Workout YTracker</title>
        <meta name="description" content="Tracker that helps you keep track of your favorite workout videos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header homeView={homeView} setHomeView={setHomeView}></Header>

      <main className={styles.main}>
      { homeView &&
        <>
          { !url &&
            <Add setUrl={setUrl} setFormData={setFormData}></Add>
          }
          { url &&
              <Form url={url} setUrl={setUrl} formData={formData} setSnackbar={setSnackbar}></Form>
          }
          <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Your workout has been saved!
            </Alert>
          </Snackbar>
        </>
      }

      { !homeView &&
        <>
          <Graph id="graph"></Graph>
          <List workouts={workouts}></List>
        </>
      }
      </main>
    </>
  )
};

export default Home;
