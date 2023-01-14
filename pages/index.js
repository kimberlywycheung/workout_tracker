import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Snackbar , MuiAlert } from '@mui/material';

import { useState, useEffect, forwardRef } from 'react';

import Header from '../components/Header.jsx';
import Add from '../components/Add.jsx';
import Form from '../components/Form.jsx';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [url, setUrl] = useState(null);
  const [formData, setFormData] = useState({});
  const [openSnackbar, setSnackbar] = useState(false);

  useEffect(() => {
    if (!url) {
      setFormData(null);
    }
  }, [url]);

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

      <Header
        setCurrentPage={setCurrentPage}>
      </Header>

      <main className={styles.main}>
        { !url &&
          <Add setUrl={setUrl} setFormData={setFormData}></Add>
        }
        { url &&
          <Form url={url} setUrl={setUrl} formData={formData} setSnackbar={setSnackbar}></Form>
        }

        {/* <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your workout has been saved!
          </Alert>
        </Snackbar> */}

      </main>
    </>
  )
}

export default Home;
