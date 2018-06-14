import React, {Component, Fragment} from 'react';
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Login from './Main/Login'
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Main} from './Main/Main'
import Register from './Main/Register'
import {tabs} from './store'
import axios from 'axios'

import {ToastContainer, toast} from 'react-toastify';
import red from '@material-ui/core/colors/red';
import 'react-toastify/dist/ReactToastify.min.css';

export default class extends Component {

    state = {
        selectedTabIndex: 0,
        selectedTabData: null,
        selectedTab: tabs[0],
        selectedItem: null,
        openAddNewItem: null,
        isSignUp: false
    };

    logout = () => {
        axios.get('/logout').then((response) => {
            toast.info('<-- /logout OK');
            this.setState({
                user: null,
                selectedTabData: null,
                selectedTabIndex: 0,
                selectedTab: tabs[0],
                selectedItem: null
            })

        }).catch(function (error) {
            console.log(error);
            toast.error('<-- /logout' + error);
        });
    };


    handleTabSelected = index => {
        const tab = tabs[index];

        this.setState({
            selectedItem: null,
            selectedTabData: [],
            selectedTabIndex: index,
            selectedTab: tabs[index]
        });

        toast.info('--> /' + tab.name);
        axios.get('/' + tab.name).then((response) => {
            toast.info('<-- /' + tab.name);
            console.log(response.data);
            this.setState({
                selectedTabData: response.data,
                selectedItem: response.data[0],
            });
        }).catch(function (error) {
            console.log(error);
            toast.error('<--ERROR /' + tab.name + error);
        });
    };
    onUserLoggedIn = user => {
        this.setState({
            user
        })
    };
    handleSignupClick = () => {
        this.setState({
            isSignUp: true
        })
    };
    onSignedIn = () => {
        this.setState({
            isSignUp: false
        })
    };

    onItemSelected = item => {
        this.setState({selectedItem: item})
    };

    handleFabClicked = () => {
        this.setState({openAddNewItem : true})
    };
    onCancelAddingClicked = () =>{
        this.setState({openAddNewItem : false})
    }

    render() {
        const {user, isSignUp, openAddNewItem, selectedTabIndex, selectedTabData, selectedTab, selectedItem} = this.state;
        const AddNewtemDialog = tabs[selectedTabIndex].addNewItemDialog;

        console.log(selectedTabIndex);
        return (
            <div>

                {user && <Fragment>
                    <Header user={user} onLogoutClick={this.logout}/>
                    <Main
                        onItemSelected={(item) => this.onItemSelected(item)}
                        selectedItem={selectedItem}
                        tab={selectedTab}
                        user={this.state.user}
                        data={selectedTabData}>
                    </Main>
                    <Footer
                        selectedTabIndex={selectedTabIndex}
                        onSelect={this.handleTabSelected}/>
                    <Button variant="fab" style={{
                        margin: 0,
                        top: 'auto',
                        right: 20,
                        bottom: 200,
                        left: 'auto',
                        position: 'fixed',
                        backgroundColor: red[500],
                    }} color="secondary"
                            onClick={this.handleFabClicked}>
                        <AddIcon/>
                    </Button>
                </Fragment>}

                {!user && isSignUp && <Register onSignedIn={this.onSignedIn}/>}

                {!user && !isSignUp && <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div>
                        <Login onUserLoggedIn={this.onUserLoggedIn}/>
                        <br/>
                        <Button onClick={this.handleSignupClick}>
                            Register
                        </Button>
                    </div>
                </div>}
                {AddNewtemDialog && <AddNewtemDialog open={openAddNewItem} onCancelClicked={this.onCancelAddingClicked}/>}
                <ToastContainer
                    autoClose={5000}
                    position="bottom-right"/>
            </div>
        )

    }


}

