import React, {Component, Fragment} from 'react';
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Login from './Main/Login'

import {Main} from './Main/Main'
import {tabs} from './store'
import {axiosClient} from "./axiousClient";
import {ToastContainer, toast} from 'react-toastify';

export default class extends Component {

    state = {
        selectedTabIndex: 0,
        selectedTabData: null,
        selectedTab: tabs[0],
        selectedItem: null
    };

    logout = () => {
        axiosClient.get('/logout').then((response) => {
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
            selectedTabIndex: index,
            selectedTab: tabs[index]
        });

        toast.info('--> /' + tab.name);
        axiosClient.get('/' + tab.name, {
            auth: {
                username: 'stasbar',
                password: 'hardpassword'
            }
        }).then((response) => {
            toast.info('<-- /' + tab.name);
            console.log(response.data);
            this.setState({
                selectedTabData: response.data,
                selectedItem: response.data[0],
            });
        }).catch(function (error) {
            console.log(error);
            toast.error('<-- /' + tab.name + error);
        });
    };
    onUserLoggedIn = user => {
        this.setState({
            user
        })
    };

    onItemSelected = item => {
        console.log('nigdy się nie wykonuje !');
        this.setState({selectedItem: item})
    }

    render() {
        const {user, selectedTabIndex, selectedTabData, selectedTab, selectedItem} = this.state;
        console.log(selectedTabIndex);
        return (
            <Fragment>
                {!user ?
                    <Login onUserLoggedIn={this.onUserLoggedIn}/>
                    :
                    <Fragment>
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
                    </Fragment>
                }
                <ToastContainer
                    autoClose={2000}
                    position="bottom-right"/>
            </Fragment>
        )

    }


}

