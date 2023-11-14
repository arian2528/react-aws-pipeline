import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

export interface importNameOptions {
    value: string;
    label: string;
}

const SelectImportName = () => {
    const [importName, setImportName] = useState<string>('');

    const importNameOptions: importNameOptions[] = [
        {value: '1', label: 'Import Name 1'},
        {value: '2', label: 'Import Name 2'},
        {value: '3', label: 'Import Name 3'},
    ];
    
    return (
        <React.Fragment>
            <FormControl fullWidth>
            <InputLabel id='import-name-label' sx={{color: 'primary.dark', fontWeight: 'fontWeightBold'}}>Select Import Name: </InputLabel>
            <Select
                labelId='import-name-label'
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
            </FormControl>
        </React.Fragment>
    );
}

export default SelectImportName;