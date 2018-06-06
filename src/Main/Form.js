import React, {Component} from 'react'
import {
    MenuItem,
    FormControl,
    TextField,
    InputLabel,
    Select
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    FormControl: {
        width: 200
    }
});

export default withStyles(styles)(class extends Component {

    state = {
        brand: '',
        model: ''
    };

    handleChange = name => ({target: {value}}) => {
        console.log(`handleChange what ${name} and value ${value}`);
        this.setState({
            [name]: value
        })
    };

    render() {
        const {classes, brands} = this.props;

        return (
            <form>
                <FormControl>
                    <InputLabel htmlFor="brandSelect">Brand</InputLabel>
                    <Select
                        className={classes.FormControl}
                        value={this.state.brand}
                        onChange={this.handleChange('brand')}
                        inputProps={{
                            id: 'brandSelect'
                        }}>
                        {brands.map(brand =>
                            <MenuItem value={brand}>
                                {brand}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>

                <TextField
                    className={classes.FormControl}
                    autoFocus
                    margin="dense"
                    onChange={this.handleChange('model')}
                    value={this.state.model}
                    label="Model"
                    fullWidth/>
            </form>
        )
    }
})