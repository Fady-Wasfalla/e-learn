import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader,CardContent,Box} from '@material-ui/core';
import {Col,Row} from 'react-bootstrap'

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
            title="Chapter 1"
            style={{
              backgroundColor: "#3F51B5",
              color: "white",
            }}
          />
          <CardContent >
          
          <Row>
          <Col md={{offset:1,span:7}}>
            <Box border={1} >
            <iframe width="100%" title="hhh" height={.5*window.innerHeight+"px"}
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            </Box>
          </Col>
          <Col md={3}>
            <Box border={1} >
              <iframe width="100%" title="hhh11" height={.1*window.innerHeight+"px"}
                src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
              </Box>
          </Col>
          </Row>
          {/* <Divider className={classes.divider}/> */}



          </CardContent>
          </Box>
        </Card>
    </Col>
    </div>
  );
}
