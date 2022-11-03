import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'





const CSSFRAMEWORKS = () => {

    return (

        <Fragment>
            <div className='card bg-dark text-white m-5' style={{ maxWidth: '18rem' }}>
                <div className='card-header'>Notebook</div>
                <div className='card-body'>
                    <h5 className='card-title' >R$ 2500</h5>
                    <p className='card-text'> Este é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb</p>
                </div>
            </div>

            <Card bg="dark" text="white" className='m-5' style={{ maxWidth: '18rem' }} >
                <Card.Header>Notebook</Card.Header>
                <Card.Body>
                    <Card.Title>R$ 2500</Card.Title>
                    <Card.Text>Este é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb</Card.Text>
                </Card.Body>
            </Card>
        </Fragment>

    )
}

export default CSSFRAMEWORKS