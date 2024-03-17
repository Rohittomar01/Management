import { Grid, Paper, Link, colors } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

export default function Techno_EventCards() {

  const mobile = useMediaQuery('(max-width:426px)');
  const tablet = useMediaQuery("(max-width:768px)");
  const laptop= useMediaQuery('(max-width:1500px)');
  const xlg= useMediaQuery('(min-width:1500px)');

  var navigate = useNavigate();


  const Cards = [
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 1,
      cardname: "WorkShop",
      image:
        "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div>
      <Grid container
      style={{paddingLeft:mobile?"5%":xlg?"2%":''}}
      >
        {Cards.map((item) => {
          return (
            <Grid item xs={mobile?12:tablet?4:3} padding={4}>
              <Paper
              onClick={()=>navigate("/TechnoSubEvents")}
                elevation={4}
                style={{
                  display: "flex",

                  width: mobile ? 250:tablet?200:xlg?270 : 210,
                  height: mobile ? 250 :tablet?200 :xlg?270: 210,
                  backgroundImage: `url("https://cdn.pixabay.com/photo/2017/03/07/20/45/cog-wheels-2125169__480.jpg")`,
                  backgroundSize: "cover",
                  borderRadius: "4%",
                }}
              >
                <span
                 onClick={()=>navigate("/SubEvents")}
                  style={{
                    color: "white",
                    fontFamily: "serif",
                    fontSize:xlg?"2.2rem": 25,
                    marginLeft: 5,
                    marginTop:xlg?"3vh":""
                  }}
                >
                  {item.cardname}
                </span>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
