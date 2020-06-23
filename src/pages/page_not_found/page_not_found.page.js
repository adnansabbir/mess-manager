import React from "react";
import {Box} from "@material-ui/core";

const PageNotFound = () => (
    <Box
        bgcolor='text.primary'
        display='flex'
        justifyContent="center"
        alignItems='center'
        flexDirection="column"
        height='100%'
        color='background.paper'>
        <span className="display-1">404 Not Found</span>
    </Box>
);

export default PageNotFound;