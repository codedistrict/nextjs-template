import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Metadata } from 'next';
import useTranslation from 'next-translate/useTranslation';

import RecipeReviewCard from '@/components/card';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main>
      <Container>
        <p>{t('about')}</p>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
      </Container>
    </main>
  );
}

export const metadata: Metadata = {
  title: {
    absolute: 'login Page',
  },
  description: 'This is the login',
};
