import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { MemoryRouter, Route, Routes, Link, matchPath, useLocation } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

function Router(props) {
  const { children } = props;

  if (typeof window === 'undefined') {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(['/', '/workouts']);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab label="Add Workout" value="/" to="/" component={Link} />
      <Tab label="View All" value="/workouts" to="/workouts" component={Link} />
    </Tabs>
  );
}

function CurrentRoute() {
  const location = useLocation();

  return (
    <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      Current route: {location.pathname}
    </Typography>
  );
}

export default function TabsRouter() {
  return (
    <Router>
      <Box sx={{ width: '100%' }}>
        <Routes>
          <Route path="*" element={<CurrentRoute />} />
        </Routes>
        <MyTabs />
      </Box>
    </Router>
  );
}
