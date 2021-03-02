import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";
import {sheduleErrorMessage} from "../../redux/sheduleReducer";

const styles = makeStyles({
    root: {
        position: 'fixed',
        right: '15px',
        bottom: '40px',
        padding: '10px 20px',
        backgroundColor: grey[700]
    },
    error: {
        color: red[500]
    },
    saccess: {
        color: green[500]
    }
})

export const AlertMessage = (props) => {
    const {
        infoMessage,
        errorMessage,
        sheduleErrorMessage,
        sheduleInfoMessage
    } = props
    const classes = styles()

    useEffect(() => {
        setTimeout(() => {
            sheduleErrorMessage('')
        }, 3000)
    }, [errorMessage])

    useEffect(() => {
        setTimeout(() => {
            sheduleInfoMessage('')
        }, 3000)
    }, [infoMessage])

    return (
        <>
            {infoMessage && (
                <div className={classes.root}>
                    <Typography className={classes.saccess} variant="body2">
                        {infoMessage}
                    </Typography>
                </div>
            )}
            {errorMessage && (
                <div className={classes.root}>
                    <Typography className={classes.error} variant="body2">
                        {errorMessage}
                    </Typography>
                </div>
            )}
        </>
    )
}