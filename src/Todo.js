import React from 'react'
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <List className="todo_list">
            <ListItemAvatar>
                <Avatar>
                   
                </Avatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary= "Dummy Deadline " />
            </ListItem>
            <DeleteForeverIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}/>
        </List>
 
 )
}

export default Todo
