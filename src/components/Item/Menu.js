import React, {useState, useEffect} from "react";

import styles from "./Menu.module.css";
import MenuList from "./MenuList";
import Card from "../UI/Card/Card";

const Menu = () => {
  
  const [meals, setmeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState();

  useEffect(()=>{

    const fetchMeals = async () => {
      const response = await fetch(
        'https://foodordering-33b2c-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
      );  

      if(!response.ok){
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      let loadedData = []

      for (const key in data){
        loadedData.push({
          id: key,
          name: data[key].name,
          desc: data[key].desc,
          price: data[key].price,
        })
      }

      setmeals(loadedData);
      setIsLoading(false);
    }

    fetchMeals().catch((error)=>{
      setIsLoading(false);
      setFetchError(error.message);
    })

  },[])

  if(isLoading){
    return(
    <section className={styles.loading}>
      <p>Loading...</p>
    </section>
    )
  }

  if(fetchError){
    return(
    <section className={styles.error}>
      <p>{fetchError}</p>
    </section>
    )
  }

  return (
    <Card className={styles.card}>
      {meals.map((item) => (
        <MenuList
          key={item.id}
          id={item.id}
          name={item.name}
          desc={item.desc}
          price={item.price}
        />
      ))}
    </Card>
  );
};

export default Menu;
