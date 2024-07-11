// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// Functional component
export const UserComments = () => {
    // State to hold comments data
    const [comments, setComments] = useState([]);

    // Mocking data similar to Blade's $comments
    useEffect(() => {
        // Simulate fetching comments from API or server
        const mockComments = [
            { id: 1, name: 'John Doe', email: 'john.doe@example.com', message: 'This is a comment.' },
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', message: 'Another comment.' },
        ];
        setComments(mockComments);
    }, []); // Empty dependency array to run once on component mount

    return (
        <div className="content-wrapper">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1 className="mt-3 ml-4 mb-3" style={{ color: '#40434E' }}>User Comments</h1>
                <Link to="/admin/dashboard" className="text-decoration-none">
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#40434E', marginTop: '30px', marginRight: '30px' }} />
                </Link>
            </div>

            <section className="content">
                {comments.length > 0 ? (
                    <Accordion defaultActiveKey="0">
                        {comments.map(comment => (
                            <Card key={comment.id}>
                                <Accordion.Toggle as={Card.Header} eventKey={comment.id.toString()}>
                                    <div>
                                        <h3 className="card-title w-100" style={{ color: '#40434E' }}>{comment.name}</h3>
                                        <h5 className="card-title text-dark mt-1">{comment.email}</h5>
                                    </div>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={comment.id.toString()}>
                                    <Card.Body>
                                        {comment.message}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))}
                    </Accordion>
                ) : (
                    <p style={{ color: '#702632' }}>No Data Found!</p>
                )}
            </section>
        </div>
    );
};


