import { FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Select, MenuItem, InputLabel, FormControl, Icon } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Client {
    id: string;
    name: string;
}

interface ClientMultipleOptions {
    value: string;
    label: string;
}

interface TestingCenterOptions {
    id: string;
    label: string;
    clients: Client[];
}

interface TestingCenterSelected {
    id: TestingCenterOptions["id"];
    client: Client['id'];
}


const ClientIdentification = () => {
    
    const clientMultipleOptions: ClientMultipleOptions[] = [
        {value: 'false', label: 'Single'},
        {value: 'true', label: 'Multiple'},
    ];

    const testingCenterClientOptions: Client[] = [
        {id: '1', name: 'Client 1'},
        {id: '2', name: 'Client 2'},
        {id: '3', name: 'Client 3'},
    ];

    const testingCenters: TestingCenterOptions[] = [
        {id: '1', label: 'Testing Center 1', clients: testingCenterClientOptions},
        {id: '2', label: 'Testing Center 2', clients: testingCenterClientOptions},
        {id: '3', label: 'Testing Center 3', clients: testingCenterClientOptions},
        {id: '4', label: 'Testing Center 4', clients: testingCenterClientOptions},
    ];

    const testingCenterSelectedDefault: TestingCenterSelected[] = [
        {id: '1', client: ''},
        {id: '2', client: ''},
        {id: '3', client: ''},
        {id: '4', client: ''},
    ];

    const [clientMultiple, setClientMultiple] = React.useState<string>('false');
    const [testingCenterClient, setTestingCenterClient] = React.useState<TestingCenterSelected[]>([testingCenterSelectedDefault[0]]);
    const [testingCenterList, setTestingCenterList] = React.useState<TestingCenterOptions[]>([testingCenters[0]]);

    useEffect(() => {
        setTestingCenterClient(clientMultiple === 'true' ? testingCenterSelectedDefault : [testingCenterSelectedDefault[0]]);
        setTestingCenterList(clientMultiple === 'true' ? testingCenters : [testingCenters[0]]);
    }, [clientMultiple]);

    return (
        <Fragment>
            <FormLabel sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}} id="client-radio-buttons-group-label">Client:</FormLabel>
            <RadioGroup
                row
                aria-labelledby="client-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={clientMultiple}
                onChange={(event) => setClientMultiple(event.target.value)}
                sx={{color: 'primary.dark',  fontWeight: 'fontWeightBold'}}
            >
                {clientMultipleOptions && clientMultipleOptions.map((option) => (
                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
            
                <div>
                    <Grid container spacing={1} width='60%' paddingTop={2}>
                        {testingCenterList && testingCenterList.map((testingCenter) => (
                            <Fragment>
                            <Grid item xs={12} md={5}>
                                <FormLabel sx={{color: 'primary.dark', lineHeight: 3}} id={testingCenter.label}>{testingCenter.label}</FormLabel>
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <FormControl fullWidth>
                                <InputLabel size="small" id={`select-client-${testingCenter.id}-label`} sx={{color: 'primary.dark'}}>Select Client </InputLabel>
                                <Select 
                                    id={`select-client-${testingCenter.id}`}
                                    labelId={`select-client-${testingCenter.id}-label`}
                                    label='Select Client'
                                    fullWidth 
                                    value={testingCenterClient.find((testingCenterClient) => testingCenterClient.id === testingCenter.id)?.client}
                                    onChange={(event) => setTestingCenterClient(testingCenterClient.map((testingCenterClient) => testingCenterClient.id === testingCenter.id ? {...testingCenterClient, client: event.target.value} : testingCenterClient))}
                                    size="small"
                                >
                                    {testingCenter.clients && testingCenter.clients.map((client) => (
                                        <MenuItem key={client.id} value={client.id}>
                                            {client.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                <AccessTimeIcon sx={{color: 'primary.dark', height: '2em'}} />
                            </Grid>
                            </Fragment>
                        ))}
                    </Grid>    
                </div>
        </Fragment>
    )
};

export default ClientIdentification;