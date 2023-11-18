import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Table from './Table';
import { FormControl, InputLabel, MenuItem, Select, TextField, FormGroup, FormControlLabel, RadioGroup, Radio, Button, Checkbox, AppBar, Tabs, Tab } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Helmet } from 'react-helmet';

// Tabpanel function
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            className="tab-body"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Innerpage() {
    // code for tabs
    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newTabValue) => {
        setTabValue(newTabValue);
    }

    // code for checkbox
    const [checkboxState, setCheckboxState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });
    const handleChange = (event) => {
        setCheckboxState({ ...checkboxState, [event.target.name]: event.target.checked });
    };

    // Datepicker
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
            <Helmet>
                <title>Mp-Theme-18 | Innerpage</title>
            </Helmet>
            <div className="wrapper">

                {/* header start */}
                <Header />
                {/* header end */}

                {/* sidebar Start */}
                <Sidebar />
                {/* sidebar end */}

                {/* Main Content */}
                <main className="main-content">
                    <div className="current-page">
                        <img src={process.env.PUBLIC_URL + '/assets/images/pages.svg'} alt="" />
                    Pages
                    </div>

                    {/* Grid start */}
                    <div className="card-block">
                        <h4 className="card-title">Table Data</h4>
                        <Table />
                    </div>
                    {/* Grid End */}

                    {/* Form elements start */}
                    <div className="card-block">
                        <h4 className="card-title">Form Elements</h4>
                        <div className="form-group">
                            <TextField label="Name" />
                        </div>

                        <div className="form-group select-control">
                            <FormControl>
                                <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
                                <Select
                                    defaultValue=""
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    MenuProps={
                                        {
                                            classes: {
                                                paper: "selectpicker-root",
                                                list: "selectpicker"
                                            }
                                        }
                                    }
                                >
                                    <MenuItem value="Department 1">Department 1</MenuItem>
                                    <MenuItem value="Department 2">Department 2</MenuItem>
                                    <MenuItem value="Department 3">Department 3</MenuItem>
                                    <MenuItem value="Department 4">Department 4</MenuItem>
                                    <MenuItem value="Department 5">Department 5</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="form-group">
                            <TextField
                                label="Textarea"
                                multiline
                                rowsMax={3}
                            />
                        </div>

                        <h4 className="card-title">Two Column</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group select-control">
                                    <FormControl>
                                        <InputLabel id="demo-simple-select-label">Dropdown</InputLabel>
                                        <Select
                                            defaultValue=""
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            MenuProps={
                                                {
                                                    classes: {
                                                        paper: "selectpicker-root",
                                                        list: "selectpicker"
                                                    }
                                                }
                                            }
                                        >
                                            <MenuItem value="Department 1">Department 1</MenuItem>
                                            <MenuItem value="Department 2">Department 2</MenuItem>
                                            <MenuItem value="Department 3">Department 3</MenuItem>
                                            <MenuItem value="Department 4">Department 4</MenuItem>
                                            <MenuItem value="Department 5">Department 5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField label="Read only(Disabled)" disabled />
                                </div>
                            </div>
                        </div>

                        <h4 className="card-title">Three Column</h4>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <TextField label="Name" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group floating-label">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            autoOk={true}
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Choose a date"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            className="datepicker"
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group select-control">
                                    <FormControl>
                                        <InputLabel id="department-label">Dropdown</InputLabel>
                                        <Select
                                            defaultValue=""
                                            labelId="department-label"
                                            id="demo-simple-select"
                                            MenuProps={
                                                {
                                                    classes: {
                                                        paper: "selectpicker-root",
                                                        list: "selectpicker"
                                                    }
                                                }
                                            }
                                        >
                                            <MenuItem value="Department 1">Department 1</MenuItem>
                                            <MenuItem value="Department 2">Department 2</MenuItem>
                                            <MenuItem value="Department 3">Department 3</MenuItem>
                                            <MenuItem value="Department 4">Department 4</MenuItem>
                                            <MenuItem value="Department 5">Department 5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <TextField label="Read only(Disabled)" disabled />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="form-group">
                                    <TextField label="Font Size" type="number" />
                                </div>
                            </div>
                        </div>

                        <h4 className="card-title pb-lg-4 pb-3">Other Form Elements</h4>
                        <div className="checkbox-group">
                            <p className="title">Checkbox</p>
                            <FormGroup row>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checkboxState.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                        />
                                    }
                                    label="Option 1"
                                />
                                <FormControlLabel
                                    label="Option 2"
                                    control={
                                        <Checkbox
                                            checked={checkboxState.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                        />
                                    }
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checkboxState.checkedC}
                                            onChange={handleChange}
                                            name="checkedC"
                                        />
                                    }
                                    label="Option 3"
                                />
                            </FormGroup>
                        </div>
                        <div className="radio-group">
                            <p className="title">Radio Button</p>
                            <RadioGroup aria-label="gender" name="gender1" row>
                                <FormControlLabel value="Option 1" control={<Radio />} label="Option 1" />
                                <FormControlLabel value="Option 2" control={<Radio />} label="Option 2" />
                                <FormControlLabel value="Option 3" control={<Radio />} label="Option 3" />
                            </RadioGroup>
                        </div>
                        <div className="btn-list">
                            <Button className="btn btn-primary" title="Save">Save</Button>
                            <Button className="btn btn-stroke" title="Cancel">Cancel</Button>
                        </div>
                    </div>
                    {/* Form elements End */}
                    {/* Tabs start */}
                    <div className="card-block">
                        <h4 className="card-title">Tabs</h4>

                        <AppBar position="static">
                            <Tabs value={tabValue} onChange={handleTabChange}>
                                <Tab label="Active" {...a11yProps(0)} />
                                <Tab label="Inactive" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={tabValue} index={0}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam placeat eius, at libero praesentium deleniti aut ab illum obcaecati ipsa molestias dicta officia ducimus vero, distinctio exercitationem inventore velit debitis perspiciatis tempore sed commodi. Aspernatur similique laboriosam eum consequuntur voluptatibus omnis at sequi magni neque, minima delectus qui nesciunt sunt.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aperiam ad rerum minus quae maiores aliquam eveniet non fuga praesentium ipsum, voluptates alias atque repellat.
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam placeat eius, at libero praesentium deleniti aut ab illum obcaecati ipsa molestias dicta officia ducimus vero, distinctio exercitationem inventore velit debitis perspiciatis tempore sed commodi. Aspernatur similique laboriosam eum consequuntur voluptatibus omnissimilique laboriosam eum consequuntur voluptatibus omnissimilique laboriosam eum consequuntur voluptatibus omnissimilique laboriosam eum consequuntur voluptatibus omnis at sequi magni neque, minima delectus qui nesciunt sunt.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio aperiam ad rerum minus quae maiores aliquam eveniet non fuga praesentium ipsum, voluptates alias atque repellat.
                        </TabPanel>

                    </div>
                    {/* Tabs end */}

                </main>
                {/* End Main Content */}
            </div>
        </>
    );
};
export default Innerpage;