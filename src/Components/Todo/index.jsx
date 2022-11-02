import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import Header from '../Header/header';
import { v4 as uuid } from 'uuid';
import List from '../List';
import { Button, Card, createStyles, Grid, Slider, TextInput } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },
})),



const ToDo = () => {
  const { classes } = useStyles();

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm{4}>
          <Card withBorder p="xs">
            <Text className={classes.formHeading}>Add To Do Item</Text>
            <form onSubmit={handleSubmit}>
              <TextInput
                label="To Do Item"
                placeholder="Item Details"
                name="text"
                onChange={handleChange}
              />

              <TextInput
                label="Assigned To"
                placeholder="Assignee Name"
                name="assignee"
                onChange={handleChange}
              />

              <Text>Difficulty</Text>
              <Slider
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                type="range"
                min={1}
                max={5}
                step={1}
                name="difficulty"
                mb="lg"
              />

              <Button type="submit">Add Item</Button>
            </form>
          </Card>
        </Grid.Col>
        <Grid.Col xs={12} sm={8}>
          <List list={list} toggleComplete={toggleComplete} />
        </Grid.Col>
      </Grid>
    </>
  );
};




export default ToDo;
