import React from 'react';

import Card from '../UI/Card/Card';

import styles from './Home.module.css';

const Home = () => {
    return(
        <Card className={styles.card}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p><br/>
            <p>All out meals are cooked with high quality ingredients, just-in-time and of cource by experienced chefs!</p>
        </Card>
    )
}

export default Home;