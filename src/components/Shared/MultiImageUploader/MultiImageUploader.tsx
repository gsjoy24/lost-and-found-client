'use client';
import ImageIcon from '@mui/icons-material/Image';
import { Typography } from '@mui/material';
import { CldUploadWidget } from 'next-cloudinary';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type TProps = {
	imageError: boolean;
	setImageLinks: Dispatch<SetStateAction<string[] | null>>;
};
const MultiImageUploader = ({ imageError, setImageLinks }: TProps) => {
	const [imgInfos, setImgInfos] = useState<any[]>([]);

	useEffect(() => {
		if (imgInfos.length > 0) {
			const links = imgInfos.map((img) => img.secure_url);
			setImageLinks(links);
		}
	}, [imgInfos, setImageLinks]);
	return (
		<CldUploadWidget
			options={{ sources: ['local', 'url'], multiple: true, maxFiles: 5 }}
			signatureEndpoint='/api/sign-cloudinary-params'
			onSuccess={(result) => {
				setImgInfos((prev) => [...prev, result?.info]);
			}}
		>
			{({ open }) => {
				return (
					<div
						onClick={() => open()}
						className={`flex justify-center items-center h-full flex-col gap-2 cursor-pointer pt-5 md:pt-0 w-full border-2 border-dashed border-gray-300 rounded-2xl min-h-[140px] ${
							imageError ? 'border-red-500 text-red-600 animate-pulse' : 'border-gray-300'
						}`}
					>
						<ImageIcon
							sx={{
								fontSize: 40
							}}
						/>
						<Typography>Upload a profile picture</Typography>
						<Typography fontSize={10} lineHeight={0.5}>
							Max 5 images are allowed
						</Typography>
						<Typography fontSize={10} lineHeight={0.5}>
							Horizontal images are RECOMMENDED
						</Typography>
					</div>
				);
			}}
		</CldUploadWidget>
	);
};

export default MultiImageUploader;
