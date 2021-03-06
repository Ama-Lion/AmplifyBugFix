import React from 'react'
import Container from "@material-ui/core/Container";
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from "@material-ui/core/TextField";


export const InputRadio = function ({ onChange, question, name }) {
    return (
        <div className='inputdiv' >
            <FormControl component="fieldset" onChange={onChange} required>
                <FormLabel component="legend" className="FormLabel" >{question}</FormLabel>
                <RadioGroup name={name} required row>
                    <FormControlLabel className="w-40"  value="Oui"  control={<Radio className="Radio"/>} label="OUI" />
                    <FormControlLabel className="w-48" value="En Cours"  control={<Radio className="Radio"/>} label="En cours /Partiellement" />
                    <FormControlLabel className="w-40"  value="Non"  control={<Radio className="Radio"/>} label="NON" />
                    <FormControlLabel className="w-40"  value="Not Concern"  control={<Radio className="Radio"/>} label="Non concerné" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}
export const InputRadioPercent = function ({ onChange, question, name }) {
    return (
        <div className='inputdiv' >
            <FormControl component="fieldset" onChange={onChange} required >
                <FormLabel component="legend" className="FormLabel">{question}</FormLabel>
                <RadioGroup name={name} required  row>
                    <FormControlLabel  value="NSP"  control={<Radio className="Radio" />} label="NSP" />
                    <FormControlLabel  value="25%"  control={<Radio className="Radio" />} label="< 25%" />
                    <FormControlLabel value="50%"  control={<Radio className="Radio" />} label="< 50%" />
                    <FormControlLabel value="75%"  control={<Radio className="Radio" />} label="< 75%" />
                    <FormControlLabel value="100%"  control={<Radio className="Radio" />} label="100%" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export const TextFieldInput = function ({ label, value,  onChange }) {
    return (
        <div className='inputText' >
            <TextField
                label= {label}
                defaultValue={value}
                onChange={onChange}
                autoComplete="off"
                fullWidth
                multiline
                rows={2}
                className="TextField" 
            />
        </div>
    )
}
