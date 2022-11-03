import React, { Fragment } from 'react'

const Head = (props) => {

    React.useEffect(() => {


        document.title = 'Wagner | ' + props.title
        document.querySelector('meta[name="description"]').setAttribute('content', props.description)

        // react-helmet 

    }, [props])


    return (
        <Fragment>

        </Fragment>
    )
}

export default Head