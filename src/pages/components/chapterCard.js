import React, { useState , useEffect } from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader,CardContent,Button, Grid ,Box ,FormControl,Divider,Checkbox,
        InputLabel,Select,MenuItem,TextField} from '@material-ui/core';
import {Col,Modal, Row} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
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
    searchBar:{
      margin: theme.spacing(0,1,0,0),
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor:"#3F51B5"
      },
    studentDivider: {
      margin: theme.spacing(0,0,0,0),
      backgroundColor:"#3F51B5"
    },
  }));
  

export default function SearchAppBar({ChapterName}) {
    const classes = useStyles();
    const [showModal,setshowModal] = useState(false)
    const [searchBy,setsearchBy] = useState("Mail")
    const [check1,setcheck1] = useState(true)
    const [check2,setcheck2] = useState(false)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 5000);
        console.log(timer)
    }, []);

  return (
    <div className={classes.root}>
            <Col style={{marginBottom:"10px"}} md={12}>
            <Card>
            <Box border={1} borderColor={"#3F51B5"}>
              <CardHeader
              title={ChapterName}
              style={{
              backgroundColor: "#3F51B5",
              color: "white",
              }}
              />
            <CardContent>
            <Grid 
            container
            >
                <Grid
                  direction="column"
                  item
                  xs={6}
                  className={classes.paper}
                >
                  <Button
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor:"#ED4B56"
                  }}
                  >
                    Delete {<DeleteIcon/>}
                  </Button>
                </Grid>
                
                <Grid
                  direction="column"
                  className={classes.paper}
                  item
                  xs={6}
                >
                  <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={()=>{setshowModal(true)}}
                  >
                    Open  {<OpenInNewIcon/>}
                  </Button>
                </Grid>

            </Grid>
            </CardContent>
        </Box>
        </Card>
        </Col>

        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
            onHide={()=>setshowModal(!showModal)}
            >
            <Modal.Header 
                style={{
                    backgroundColor: "#3F51B5",
                    color: "white",
                    }}
                     closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                {ChapterName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>            
                <TextField id="outlined-basic" label="Search"
                className={classes.searchBar}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Search</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBy}
                    onChange={(e)=>{setsearchBy(e.target.value)}}
                    >
                    <MenuItem value={"Name"}>Name</MenuItem>
                    <MenuItem value={"Mail"}>Mail</MenuItem>
                    <MenuItem value={"Phone"}>Phone</MenuItem>
                    </Select>
                </FormControl>

                <Divider className={classes.divider}/>
                
                <Row>
                    <Col md={4}>
                        <h6>Name</h6>
                    </Col>
                    <Col md={4}>
                        <h6>Mail</h6>
                    </Col>
                    <Col md={2}>
                        <h6>Phone</h6>
                    </Col>
                    <Col md={2}>
                       <h6>Permission</h6>
                    </Col>
                </Row>
            {loading ? <div className='spinner-border' style={{position:"absolute", left:"50%",top:"25%"}}></div>:
            <div>    
                <Row style={{backgroundColor:"lightgray"}}>
                    <Col md={4}>
                        Fady Medhat Thabt
                    </Col>
                    <Col md={4}>
                        fady.wasfalla@gmail.com
                    </Col>
                    <Col md={2}>
                        01284898411
                    </Col>
                    <Col md={2}>
                       <Checkbox 
                        checked={check1}
                        onChange={()=>{setcheck1(!check1)}}/>
                    </Col>
                </Row>
                <Divider className={classes.studentDivider}/>

                <Row style={{backgroundColor:"lightskyblue"}}>
                    <Col md={4}>
                        Hossam Gerges Shenoda
                    </Col>
                    <Col md={4}>
                        Hossam.Gerges@gmail.com
                    </Col>
                    <Col md={2}>
                        01286535677
                    </Col>
                    <Col md={2}>
                       <Checkbox 
                        checked={check2}
                        onChange={()=>{setcheck2(!check2)}}/>
                    </Col>
                </Row>
            </div>}
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    style={{
                        backgroundColor: "#3F51B5",
                        color: "white",
                        }}
                onClick={()=>setshowModal(!showModal)}>Save</Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}
