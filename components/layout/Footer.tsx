import { Container, Box, Typography } from "@mui/material"

export default function Footer() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', backgroundColor: 'secondary' }}>
                <Typography variant='body1' color='primary' fontWeight={'regular'} gutterBottom>
                    Made with ❤️ by Christian
                </Typography>
            </Box>
        </Container>



    )
}