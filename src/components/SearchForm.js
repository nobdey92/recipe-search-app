import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const SearchForm = ({ handleSubmit }) => {
  const onSubmit = ({ searchTerm }) => {
    handleSubmit(searchTerm);
  };

  const formik = useFormik({
    initialValues: { searchTerm: "" },
    onSubmit,
    validationSchema: Yup.object({
      searchTerm: Yup.string().required("Please enter a product name"),
    }),
  });

  return (
    <Stack component="form" onSubmit={formik.handleSubmit} spacing={2}>
      <TextField
        error={formik.touched.searchTerm && !!formik.errors.searchTerm}
        helperText={formik.errors.searchTerm}
        name="searchTerm"
        type="search"
        label="Enter search term"
        value={formik.values.searchTerm}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //value={age}
          label="Age"
          //onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormGroup>
        <Grid container justifyContent="center" alignItems="center" columns={3}>
          <FormControlLabel control={<Checkbox />} label="Dairy" />
          <FormControlLabel control={<Checkbox />} label="Egg" />
          <FormControlLabel control={<Checkbox />} label="Gluten" />
          <FormControlLabel control={<Checkbox />} label="Grain" />
          <FormControlLabel control={<Checkbox />} label="Peanut" />
          <FormControlLabel control={<Checkbox />} label="Seafood" />
          <FormControlLabel control={<Checkbox />} label="Sesame" />
          <FormControlLabel control={<Checkbox />} label="Shellfish" />
          <FormControlLabel control={<Checkbox />} label="Soy" />
          <FormControlLabel control={<Checkbox />} label="Sulfite" />
          <FormControlLabel control={<Checkbox />} label="Tree Nut" />
          <FormControlLabel control={<Checkbox />} label="Wheat" />
        </Grid>
      </FormGroup>
    </Stack>
  );
};
