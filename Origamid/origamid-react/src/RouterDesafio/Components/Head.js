import React, { Fragment } from 'react'

const Head = (props) => {



    React.useEffect(() => {
        
        document.title = props.title;
        document.querySelector('meta[name="description"]')
            .setAttribute('content', props.description)

    }, [props])

    return (
        <Fragment>

        </Fragment>
    )
}

export default Head