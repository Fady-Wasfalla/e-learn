import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader,CardContent,Divider,Button,Box} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import {Col,Row} from 'react-bootstrap'
import ChapterCard from '../components/chapterCard'

const useStyles = makeStyles((theme) => ({
    avatar: {
      // margin: theme.spacing(0,0,5,0),
      backgroundColor: theme.palette.primary.main,
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
      backgroundColor:"#ED4B56"
    },
  }));
  

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Col md={12}>
        <Card>
        <Box border={1} borderColor={"#3F51B5"}>

          <CardHeader
            titleTypographyProps={{ variant: "h4" }}
            title="Chapters"
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
            }}
          />
          <CardContent >

            <Row>
            <Col xs={12} md={{span:4,offset:1}}>
            <Button 
            className={classes.avatar}
            fullWidth              
            size="large"
            variant="outlined"
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
              }}
            endIcon={<NoteAddIcon  />}>
              Add Chapter
            </Button>
            </Col>

            <Col xs={12} md={{span:4,offset:2}}>
            <Button 
            href="/createUser"
            size="large"
            className={classes.avatar}
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
              }}
            endIcon={<PersonAddIcon  />}>
              Add Student
            </Button>
            </Col>
            </Row>

            <Divider className={classes.divider}/>
            {/* mapping the added lessons from data base and inside each card the assigning page to this lesson */}
            <Row>
              <ChapterCard ChapterName={"Chapter 1"}/>
              <ChapterCard ChapterName={"Chapter 2"}/>
              <ChapterCard ChapterName={"Chapter 3"}/>
              <ChapterCard ChapterName={"Chapter 4"}/>
            </Row>

          </CardContent>
          </Box>
        </Card>
    </Col>
    </div>
  );
}
