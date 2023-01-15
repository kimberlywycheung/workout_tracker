// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { Box, Tabs, Tab, Typography } from '@mui/material';
// import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';

// function Router(props) {
//   const { children } = props;

//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/">{children}</StaticRouter>;
//   }

//   return (
//     <MemoryRouter initialEntries={['/']} initialIndex={0}>
//       {children}
//     </MemoryRouter>
//   );
// }

// Router.propTypes = {
//   children: PropTypes.node,
// };

// function useRouteMatch(patterns) {
//   const { pathname } = useLocation();

//   for (let i = 0; i < patterns.length; i += 1) {
//     const pattern = patterns[i];
//     const possibleMatch = matchPath(pattern, pathname);
//     if (possibleMatch !== null) {
//       return possibleMatch;
//     }
//   }

//   return null;
// }

// function MyTabs({ setCurrentPage }) {
//   const routeMatch = useRouteMatch(['/', '/workouts']);
//   const currentTab = routeMatch?.pattern?.path;

//   return (
//     <Tabs value={currentTab}>
//       <Tab label="Add Workout" value="/" to="/" component={Link} onClick={()=>{ setCurrentPage('home'); }}/>
//       <Tab label="View All" value="/workouts" to="/workouts" component={Link} onClick={()=>{ setCurrentPage('view') }}/>
//     </Tabs>
//   );
// }

// function CurrentRoute() {
//   const location = useLocation();

//   return (
//     <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
//       Current route: {location.pathname}
//     </Typography>
//   );
// }

// export default function TabsRouter() {
//   return (
//     <Router>
//       <Box sx={{ width: '100%' }}>
//         <Routes>
//           <Route path="*" element={<CurrentRoute />} />
//         </Routes>
//         <MyTabs />
//       </Box>
//     </Router>
//   );
// }

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Header ({ currentPage, setCurrentPage }) {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     if (!newValue) {
//       setCurrentPage('home');
//       console.log('setting to home');
//     } else {
//       setCurrentPage('view');
//       console.log('setting to view');
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={currentPage} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Add Workout" {...a11yProps(0)} />
//           <Tab label="View All" {...a11yProps(1)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={currentPage} index={'add'}></TabPanel>
//       <TabPanel value={currentPage} index={'view'}></TabPanel>
//     </Box>
//   );
// }

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Typography, Box } from '@mui/material';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Header = ({ homeView, setHomeView }) => {
  const [value, setValue] = useState(0);

  console.log("homeView", homeView);
  console.log("setHomeView", typeof(setHomeView));

  const handleChange = (event, newValue) => {
    setValue(newValue);

    if (!newValue && !homeView) {
      setHomeView(true);
    } else if (newValue && homeView) {
      setHomeView(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Add Workout" {...a11yProps(0)} />
          <Tab label="View All" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Header;