import { React, useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion, ListGroup } from 'react-bootstrap';

export default function DashBoard() {

    const [blogItems, setblogItems] = useState([
        {
            Id: 1,
            Title: "Growing Tomatos",
            Publisher: "Walaa AlSalmi",
            Date: "01-12-2022",
            Description: "Devote a prime, sunny spot to growing tomatoes. Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants.",
            Image:
                "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=m9c3T-XV",
            Published: true,
            Tags: 'gardening,plant',
            Category: 'Pastas'
        },

        {
            Id: 2,
            Title: "Growing Peppers",
            Date: "01-06-2022",
            Publisher: "Tom Finland",
            Description: "Set pepper plant seedlings out after the last spring frost. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day.",
            Image:
                "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Bell-Peppers-A105431708.jpg",
            Published: false,
            Tags: 'hot,plant',
            Category: 'Pastas'
        },
        {
            Id: 3,
            Title: "Growing Eggplants",
            Publisher: "Sam Bilton",
            Date: "12-24-2021",
            Description: "Start eggplant seeds indoors up to 10 weeks before the last frost date. Plant the seeds 1/4inch deep, water after planting and cover loosely with plastic to retain moisture. Transplant the seedlings to the garden when soil temperatures reach 60 degrees. Transplant the seedlings to the garden when soil temperatures reach 60 degrees.",
            Image:
                "https://cleangreensimple.com/wp-content/uploads/2020/05/growing-eggplant.jpg",
            Published: true,
            Tags: 'gardening,plant',
            Category: 'Sports'
        },
        {
            Id: 4,
            Title: "Growing Zucchinis",
            Publisher: "Tina Freedman",
            Date: "12-15-2021",
            Description: "Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and small space gardening. There are also bush types suitable for container gardening and small space gardening.",
            Image:
                "https://greenhouseemporium.com/wp-content/uploads/2020/02/How_to_Grow_Zucchini_2.jpg",
            Published: false,
            Tags: 'gardening,plant',
            Category: 'Cats'
        }
    ])

    //----Forms--------------------
    const [blogTitle, setBlogTitle] = useState('')
    const [blogImage, setBlogImage] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const [blogCategory, setBlogCategory] = useState('')
    const [blogTags, setBlogTags] = useState('')
    //------------------------------
    const [show, setShow] = useState(false);
    const [editBool, setEdit] = useState(false);

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
                            <Form.Control type="file" accept='image/png, img/jpeg' placeholder="Enter an Image" />
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