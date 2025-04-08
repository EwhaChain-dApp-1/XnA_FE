// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';


//여기는 들어갈 내용만 정의됨
export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          EngineBy
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              XRPL
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          // icon={
          //   <CardMedia
          //     component="img"
          //     image="/assets/images/shared/celebration.svg"
          //     sx={{ width: 16, height: 16 }}
          //     alt="celebration"
          //     loading="lazy"
          //   />
          // }
        />
      </>
    )
  },
  //랜딩 화면 변경
  headLine: 'Ask, Answer, and Earn XRP',
  captionLine: 'Post your questions on the XRPL-based QnA platform. Share knowledge and earn XRP rewards for your helpful answers.',
  primaryBtn: { children: 'Post a Question', href: '/ask' },
  // videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  // videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 18' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
