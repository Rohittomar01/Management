import { Avatar, Box, Button } from "@mui/material";
// import media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import navigate
import { useNavigate } from "react-router-dom";

export default function HomeEvent_Cards() {

  const navigate=useNavigate();

  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const detail = [
    {
      id: 1,
      heading: "Technoparv",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKlh7Rftg24_O134SSfYSNdvvyEZdnTOZpg&usqp=CAU",
        link:"/Technoparv"

    },
    {
      id: 2,
      heading: "Vilay",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmMYAOaagpQ1EBQbX8RT9HwYgh6rUqVnVdw&usqp=CAU",
        link:"/vilay"

    },
    {
      id: 3,
      heading: "IBTD",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBjQ6cacjUhWGAxXt_j-UgOdQhDAo3ce9Eg&usqp=CAU",
        link:"/IBTD"
    },
    {
        id: 4,
        heading: "IBTD",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFcNXKooXNHsLgAZa8s0jJB6voQ_j6O9a3w&usqp=CAU",
          link:"IBTD"
      },
  
  ];

  const showCards = () => {
    return detail.map((item,index) => {
      return (
        <Box key={index}  style={{ marginTop: "2%", margin: "2%" }}>
          <Box>
          <Box component={'div'} style={{paddingLeft: sm?"15%":''}}>
              <Avatar
                elevation={4}
                src={item.image}
                sx={{
                  width: sm ? "62vw" : "17.5vw",
                  height: sm ? "12.5rem" : "37vh",
                  boxShadow: "10px 10px 10px var(--cream)",
                  cursor:'pointer'
                }}
                onClick={()=>navigate(item.link)}
              ></Avatar>
            </Box>
            <Box>
            <Button
                  variant="contained"
                  style={{
                    background: "white",
                    color: "green",
                    borderRadius: 70,
                    height: sm?"10vh":"8vh",
                    width: sm?"61vw":"17.5vw",
                    fontSize: 16,
                    marginLeft:sm?"15%":"",
                    boxShadow: "0px 10px 10px  var(--cream)",
                    cursor:'pointer'

                  }}
                  onClick={()=>navigate(item.link)}
                >
                {item.heading}
              </Button>
            </Box>
          </Box>
        </Box>
      );
    });
  };
  return (
    <Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "4%",
          marginRight: "4%",
          marginTop: "1%",
        }}
      >
        {showCards()}
      </Box>
    </Box>
  );
}
