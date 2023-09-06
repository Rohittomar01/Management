import MaterialTable from "@material-table/core"
import { Grid, Avatar } from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"

export default function Day02() {

    var classes = TechnoparvCss()

    return (
        <div>
            <Grid container style={{ display: "flex", justifyContent: "center" }}>
                <Grid item xs={9}>
                    <MaterialTable
                        title="Schedule"
                        data={[
                            {
                                id: 1,
                                name: 'a',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 63,
                                sex: 'Male',
                                type: 'adult',
                            },
                            {
                                id: 2,
                                name: 'b',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 34,
                                sex: 'Female',
                                type: 'adult',
                                parentId: 1,
                            },
                            {
                                id: 3,
                                name: 'c',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 34,
                                sex: 'Female',
                                type: 'child',
                                parentId: 1,
                            },
                            {
                                id: 4,
                                name: 'd',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 34,
                                sex: 'Female',
                                type: 'child',
                                parentId: 3,
                            },
                            {
                                id: 5,
                                name: 'e',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 34,
                                sex: 'Female',
                                type: 'child',
                            },
                            {
                                id: 6,
                                name: 'f',
                                surname: 'Baran',
                                birthYear: 1987,
                                birthCity: 34,
                                sex: 'Female',
                                type: 'child',
                                parentId: 5,
                            },
                        ]}
                        columns={[
                            {

                                field: 'avatar',
                                render: rowData => (
                                    <Avatar
                                        style={{ height: 76, borderRadius: '10%', width: 76 }}
                                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CeXHKobPrawkY9-OKa8wL9dMa4ofZlngbx0ztPm_o5AfhnI1WAyrDrJktdrrQgfrlco&usqp=CAU"}
                                    />
                                ),
                            },
                            { field: 'name' },
                            { field: 'surname' },
                            { field: 'type', removable: true },
                            { field: 'birthYear', type: 'numeric' },
                            {
                              
                                field: 'birthCity',
                                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                            },
                        ]}
                        parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                        options={{
                            // selection: true,

                        }}
                    />
                </Grid>
            </Grid>
        </div >


    )
}