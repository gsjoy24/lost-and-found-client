'use client';
import ImageIcon from '@mui/icons-material/Image';
import { Typography } from '@mui/material';
import { CldUploadWidget } from 'next-cloudinary';
import { Dispatch, SetStateAction } from 'react';
type TProps = {
	imageLinks: string[] | null;
	setImageLinks: (links: string[]) => void;
	imageError: boolean;
	setImageError: Dispatch<SetStateAction<boolean>>;
};
const MultiImageUploader = ({ imageLinks, setImageLinks, imageError, setImageError }: TProps) => {
	return (
		<CldUploadWidget
			options={{ sources: ['local', 'url'], multiple: true, maxFiles: 5 }}
			signatureEndpoint='/api/sign-cloudinary-params'
			onSuccess={(result, { widget }) => {
				// setProfileImage(result?.info);
				console.log(result?.info?.secure_url);

				widget.close();
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open()}
						className='flex justify-center items-center h-full flex-col gap-2 cursor-pointer pt-5 md:pt-0 w-full'
					>
						<ImageIcon
							sx={{
								fontSize: '3rem',
								color: `${imageError ? 'red' : '#1586FD'}`
							}}
						/>
						<Typography
							sx={{
								color: `${imageError ? 'red' : '#1586FD'}`
							}}
						>
							Upload a profile picture
						</Typography>
					</div>
				);
			}}
		</CldUploadWidget>
	);
};

export default MultiImageUploader;
