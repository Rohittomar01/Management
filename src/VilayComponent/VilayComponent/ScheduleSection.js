import { Avatar, Grid, Paper } from '@mui/material';
import { TechnoparvCss } from './TechnoparvCss';
import MaterialTable from '@material-table/core';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as React from 'react';
import Box from '@mui/material/Box';

export default function ScheduleSection() {
    const [value, setValue] = React.useState(0);
    var navigate = useNavigate()
    var classes = TechnoparvCss()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (

        <div>
            <Grid xs={12} style={{ display: "flex",justifyContent:!matches?"start":<></>, flexDirection: !matches ? "row" : "column", flexWrap: !matches ? "wrap" : "nowrap", marginTop: "3%",}}>
                {!matches ? <> <Grid item xs={2}>
                    <ContainedButton className={classes.schedulePaper} style={{ width: !matches ? 180 : 330, height: 60, margin: 20, marginLeft: !matches ? "8vw" : "0vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} >
                        <span className={classes.schedulePaper}>Days</span>
                    </ContainedButton>
                </Grid></> : <></>}

                <Grid item xs={2}>
                    <ContainedButton className={classes.schedulePaper} color="secondary" style={{ width: !matches ? 180 : 330, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
                        {!matches ? <><span className={classes.schedulePaper}>Day 1 </span></>
                            : <><span className={classes.schedulePaper}>Day 01 &nbsp;</span></>}

                    </ContainedButton>
                </Grid>
                <Grid item xs={2}>
                    <ContainedButton color="primary" style={{ width: !matches ? 180 : 330, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
                        {!matches ? <><span className={classes.schedulePaper}>Day 2</span></>
                            : <><span className={classes.schedulePaper}>Day 02 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={2}>
                    <ContainedButton style={{ width: !matches ? 180 : 330, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
                        {!matches ? <><span className={classes.schedulePaper}>Day 3</span></>
                            : <><span className={classes.schedulePaper}>Day 03 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={2}>
                    <ContainedButton color="primary" style={{ width: !matches ? 180 : 330, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", background: "#f54290", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/")}>
                        {!matches ? <><span className={classes.schedulePaper}>Day 4 </span></>
                            : <><span className={classes.schedulePaper}>Day 04 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
               

            </Grid>

        </div>
    )
}