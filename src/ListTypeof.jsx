import React, { Fragment } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemSecondaryAction } from "@material-ui/core";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyle = makeStyles((theme)=>({
    number:{
        fontWeight:"fontWeightBold",
    }
}));

function generate(element) {
    return [0, 1, 2, 3].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


function ListTypeof(){
    const classes = useStyle(); 
    return(
        <div>
            <List>
            {generate(
                <ListItem>
                    <ListItemAvatar>
                           <FiberManualRecordIcon color="primary"/>
                    </ListItemAvatar>
                    <ListItemText 
                     primary="Name"
                    />
                    <ListItemSecondaryAction>
                    <ListItemText className={classes.number}
                      primary="num(100%)"
                    />
                    </ListItemSecondaryAction>   
                </ListItem>
            )};
            </List>
        </div>
    );
}
export default ListTypeof;