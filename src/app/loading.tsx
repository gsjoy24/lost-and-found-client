import Loading from '@/components/Loading/Loading';
import { Box, Stack, Typography } from '@mui/material';

const LoadingCompo = () => {
	return (
		<Stack
			justifyContent='center'
			alignItems='center'
			gap={4}
			sx={{
				height: '100vh',
				backgroundColor: '#111'
			}}
		>
			<Loading />
			<Typography
				variant='h4'
				fontWeight='300'
				sx={{
					letterSpacing: {
						xs: 8,
						sm: 15
					},
					color: '#1586FD'
				}}
			>
				LOST & FOUND
			</Typography>
		</Stack>
	);
};

export default LoadingCompo;
