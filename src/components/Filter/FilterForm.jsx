import React, { useState, useEffect } from 'react';
import { TextField, Grid } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios';

function FilterForm({ applyFilter }) {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([])
    const [types, setTypes] = useState([])
    const [selectedCategories, setSelectedCategories] = useState({category: []})
    const [selectedSubCategories, setSelectedSubCategories] = useState({subCategory: []})
    const [selectedTypes, setSelectedTypes] = useState({type: []})
    const [firstLoad, setFirstLoad] = useState(true)

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_API_URI}/api/category`)
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error.message);
            });
    }, [])

    useEffect(() => {
        if (!firstLoad) {
            combineFilter()
        }
        setFirstLoad(false)
    }, [selectedCategories, selectedSubCategories, selectedTypes])

    const setData = (data) => {
        let categoriesList = [];
        let subCategoriesList = [];
        let typesList = [];

        data.map(dataCategory => {
            categoriesList = [...categoriesList, { value: dataCategory.name}]
            dataCategory.subCategory.map(dataSubCategory => {
                subCategoriesList = [...subCategoriesList, { value: dataSubCategory.name}]
                dataSubCategory.types.map(dataType => {
                    typesList = [...typesList, { value: dataType.name}]
                    return dataType
                })
                return dataSubCategory
            })
            return dataCategory
        })

        setCategories(categoriesList);
        setSubCategories(subCategoriesList);
        setTypes(typesList);
    }

    const handleChangeCategory = (event, newValue) => {
        setSelectedCategories({category: extractValues(newValue)});
    }

    const handleChangeSubCategory = (event, newValue) => {
        setSelectedSubCategories({subCategory: extractValues(newValue)});
    }

    const handleChangeType = (event, newValue) => {
        setSelectedTypes({type: extractValues(newValue)});
    }

    const extractValues = (rawValues) => {
        let values = [];
        rawValues.map(value => {
            values = [...values, value.value]
            return value
        })
        
        return values
    }

    function combineFilter() {
        applyFilter({...selectedCategories, ...selectedSubCategories, ...selectedTypes})
    }

    return (
        <>
            <Grid item md={3} xs={12}>
                <Autocomplete
                    id="category"
                    multiple
                    options={categories}
                    getOptionLabel={(option) => option.value}
                    onChange={handleChangeCategory}
                    getOptionSelected={(option, value) => option.value === value.value}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Category"
                            placeholder="Categories"
                        />
                    )}
                />
            </Grid>
            <Grid item md={3} xs={12}>
                <Autocomplete
                    id="sub-category"
                    multiple
                    options={subCategories}
                    getOptionLabel={(option) => option.value}
                    onChange={handleChangeSubCategory}
                    getOptionSelected={(option, value) => option.value === value.value}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Sub category"
                            placeholder="Sub categories"
                        />
                    )}
                />
            </Grid>
            <Grid item md={3} xs={12}>
                <Autocomplete
                    id="types"
                    multiple 
                    options={types}
                    getOptionLabel={(option) => option.value}
                    onChange={handleChangeType}
                    getOptionSelected={(option, value) => option.value === value.value}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Type"
                            placeholder="Types"
                        />
                    )}
                />
            </Grid>
        </>
    )
}

export default FilterForm;