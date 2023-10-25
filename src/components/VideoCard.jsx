import { Typography, Card, CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import {demoThumbnailUrl, demoVideoUrl, DemoVideoTitle, DemoChannelUrl, DemoChannelTitle, demoVideoTitle,demoChannelUrl } from '../utils/Constants'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {xs:'100%', sm: '358px', md: '320px'}, boxShadow:'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <CardMedia 
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.title}
        sx={{width:{xs:'100%', sm: '358px', md: '320px'}, height: 180}}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height:'106px'}}>
      <Link to={videoId ? `/video/${videoId}`: demoVideoUrl}>
        <Typography sx={{color:'#fff'}} variant="subtitle1" fontWeight={"bold"}>
          {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)} 
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
        <Typography sx={{color:'gray'}} variant="subtitle2" fontWeight={"bold"}>
          {snippet?.channelTitle || demoVideoTitle} 
          <CheckCircle sx={{fontSize: 12, ml: '5px'}}/>
        </Typography>
      </Link>
      </CardContent>

    </Card>
  )
}
 
export default VideoCard