import { InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export interface importNameOptions {
    value: string;
    label: string;
}

const SelectImportName = () => {
    const [importName, setImportName] = useState<string>('');

    const importNameOptions: importNameOptions[] = [
        {value: '', label: 'Select Import Name'},
        {value: '1', label: 'Import Name 1'},
        {value: '2', label: 'Import Name 2'},
        {value: '3', label: 'Import Name 3'},
    ];
    
    return (
        <React.Fragment>
            <InputLabel id='import-name' sx={{color: 'primary.dark', paddingTop: '10px'}}>Select Import Name: </InputLabel>
            <Select
                labelId='import-name'
                id='import-name'
                label='Select Import Name:'
                fullWidth
                sx={{color: 'primary.dark'}}
                value={importName}
                onChange={(event) => setImportName(event.target.value as string)}
            >
                {importNameOptions && importNameOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </React.Fragment>
    );
}

export default SelectImportName;