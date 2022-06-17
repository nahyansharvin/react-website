import { TextField } from "@mui/material";

export default function TextInput(props) {
    const { type, label, value, setValue, error } = props;

    const handleChange = (e) => setValue(e.target.value);

    return (
        <TextField
            fullWidth
            required
            id='standard-basic'
            variant='standard'
            margin="normal"
            type={type}
            label={label}
            error={value === "" || error ? true : false}
            value={value}
            onChange={handleChange}
            helperText={(value === "" && `${label} cannot be empty`) || (error && "Passwords must match.")}
        />
    );
}