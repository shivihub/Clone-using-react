import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import "./Advantages.css";

export default function ActionAreaCard() {
  return (
    <div> <h1 style={{textAlign:'center',marginTop:"100px",color:"gray"}}>Advantages</h1>
    <Card sx={{ display:"flex",justifyContent:'space-around' }}>


      {/* card 1 */}
      <CardActionArea>
        <CardMedia>
          <div>
            <img class="card-img" src="https://images.pexels.com/photos/4467010/pexels-photo-4467010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic"></img>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" fontWeight="700">
            LOREM
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>


      {/* card2 */}
      <CardActionArea>
        <CardMedia>
          <div>
            <img class="card-img" src="https://images.pexels.com/photos/2045600/pexels-photo-2045600.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic"></img>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" fontWeight="700">
            LOREM
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center" >
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>

      
      {/* card 3 */}

      <CardActionArea>
        <CardMedia>
          <div>
            <img class="card-img" src="https://images.pexels.com/photos/4668379/pexels-photo-4668379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="pic"></img>
          </div>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center" fontWeight="700">
            LOREM
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
          Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{textAlign:"center",margin:"40px"}} >
        <Button className="btn" variant="outlined" sx={{ color:"gray", border:"2px solid gray "}}>Learn More</Button>
    </div>
    </div>
  );
}