import { Grid } from '@material-ui/core';
import React from 'react';
import ProductList from '../Products/ProductList';
import Content from './Content';
import Sideber from './Sideber';

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Sideber/>
            <Content/>
        </Grid>
    );
};

export default Home;