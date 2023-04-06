import { React, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion, ListGroup } from 'react-bootstrap';
import { CheckToken,  LoggedInData, getBlogItemsByUserId, updateBlogItem } from '../Services/DataService';
import { useNavigate } from 'react-router-dom';

export default function DashBoard() {

    let navigate = useNavigate();

    useEffect(() => {
        const GetLoggedInData = async () => {
            const loggedIn = LoggedInData();
            setUserId(loggedIn.userId);
            SetPublisherName(loggedIn.PublisherName);
            console.log(loggedIn);
            let userBlogItems = await getBlogItemsByUserId(loggedIn.userId); 
            setBlogItems(userBlogItems);
            console.log(userBlogItems);
        }
        
        
        if(!CheckToken()){
            navigate('/Login')
        }else{
            //get tthe user data and blog items

        }

    }, [])
   
    //----Forms--------------------
    const [blogTitle, setBlogTitle] = useState('')
    const [blogImage, setBlogImage] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const [blogCategory, setBlogCategory] = useState('')
    const [blogTags, setBlogTags] = useState('')
    const [blogItems,setBlogItems] = useState([])
    const [blogId, setBlogId] = useState(0)
    const [blogUserId, setUserId] = useState('0')
    const [blogPublisherName, SetPublisherName] = useState('')


    //------------------------------
    const [show, setShow] = useState(false);
    const [editBool, setEdit] = useState(false);
    const [blogIsDeleted, SetIsDeleted] = useState(false)
    const [blogIsPublished, setIsPublished] = useState(false)

    //-----------bools---------------------
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);


        if (e.target.textContent == 'Add Blog Item') {
            setEdit(false);
            setBlogTitle('')
            setBlogDescription('');
            setBlogCategory('');
            setBlogTags('');
        } else {
            setEdit(true);
            setBlogTitle("Spicy Noodle");
            setBlogDescription('Spicy Noodles are good');
            setBlogCategory('Pastas');
            setBlogTags('yummy, spicy, fuego');
        }
    }

    const handleTitle = (e) => setBlogTitle(e.target.value);
    const handleDescriptiom = (e) => setBlogDescription(e.target.value);
    const handleCategory = ({ target: { value } }) => setBlogCategory(value);
    const handleTags = ({ target }) => setBlogTags(target.value);


    let e = {
        target: {
            value: "Anything we type",
            random: "Something random"
        }
    }

    const handleImage = (event) => {
     let file = event.target.files[0];
     const reader = new FileReader();
     reader.onloadend = () =>{
        console.log(reader.result)
        setBlogImage(reader.result)
     }    
     reader.readAsDataURL(file)
    }

    return (
        <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editBool ? 'Edit ' : 'Add '}Blog Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* title, image, description, category, tags */}
                    <Form>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Label>Title</Form.Label>
                            {/* <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle} /> */}

                            <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle} />


                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" onChange={handleDescriptiom} value={blogDescription} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Category">
                            <Form.Select aria-label="Pick a Category" onChange={handleCategory} value={blogCategory}>
                                <option>Pick a Category</option>
                                <option value="Sport">Sport</option>
                                <option value="Cats">Cats</option>
                                <option value="Pastas">Pastas</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Tags">
                            <Form.Label>Separate by comas</Form.Label>
                            <Form.Control type="text" placeholder="Enter Tags Separated by comas" onChange={handleTags} value={blogTags} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Image">
                            <Form.Label>Pick an Image</Form.Label>
                            <Form.Control type="file" accept='image/png, img/jpeg' placeholder="Enter an Image" onChange={handleImage}/>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {editBool ? 'Save Changes' : 'Save'}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {editBool ? 'Save Changes' : 'Save'} and Publish
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row>
                <Col md={12}>
                    <Button onClick={handleShow} >Add Blog Item</Button>
                    <Button onClick={handleShow} >Edit Blog Item</Button>
                </Col>
            </Row>


            <Row className='mt-5'>
                <Col>
                    <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Published blog Items</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup>
                                    {
                                        blogItems.map((item, idx) => {
                                            return (
                                                <>
                                                {
                                                item.Published ?                
                                                <ListGroup.Item>
                                                    <Col>{item.Title}</Col>            
                                                    <Col>
                                                    <Button variant='danger'>Delete</Button>
                                                    <Button variant='primary'>Edit</Button>
                                                    <Button variant='success'>Unpublished</Button>
                                                    </Col>        

                                                </ListGroup.Item>
                                                :
                                                null
                                                }
                                                </>

                                            )
                                        })
                                    }
                                   
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Unpublished Blog Items</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup>
                                    {
                                        blogItems.map((item, idx) => {
                                            return (
                                                <>
                                                {
                                                !item.Published ?                
                                                <ListGroup.Item>
                                                    <Col>{item.Title}</Col>            
                                                    <Col>
                                                    <Button variant='danger'>Delete</Button>
                                                    <Button variant='primary'>Edit</Button>
                                                    <Button variant='success'>Unpublished</Button>
                                                    </Col>        

                                                </ListGroup.Item>
                                                :
                                                null
                                                }
                                                </>
                                            )
                                        })
                                    }
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

        </Container>
    )
}