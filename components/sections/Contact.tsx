import { Box, Button, Container, Link, Typography } from '@mui/material'
import useTranslation from 'next-translate/useTranslation';
export default function Contact() {
    const { t } = useTranslation('common');

    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    my: 4,
                    display: 'flex',
                    backgroundColor: 'primary',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vh',
                }}
            >
                <Typography variant='h2' color='primary' fontWeight={'bold'} gutterBottom>
                    {t('contactSection.title')}
                </Typography>
                <Typography variant='body1' fontWeight={'regular'} gutterBottom>
                    {t('contactSection.description')}
                </Typography>
                <Button variant='contained' size="large" sx={{ borderRadius: '0.875rem', mt: 4 }}>
                    <Link href={t('contactSection.contact.ref')} color='inherit' underline={'none'}>
                        {t('contactSection.contact.title')}
                    </Link>
                </Button>
            </Box>
        </Container>
    )
}