import React, {Component} from 'react';
import Footer from './Layouts/Footer'
import Header from './Layouts/Header'
import Main from './Main/Main'
import {tabs, components} from './store'
import {axiosClient} from "./axiousClient";
import {ToastContainer, toast} from 'react-toastify';

export default class extends Component {

    state = {
        selectedTabIndex: 0,
        selectedTabData: null,
        selectedDataComponent: components[0]
    };

    handleTabSelected = index => {
        const tab = tabs[index];
        toast.info('--> /' + tab, {
            position: toast.POSITION.TOP_RIGHT
        });
        axiosClient.get('/' + tab, {
            auth: {
                username: 'stasbar',
                password: 'hardpassword'
            }
        }).then((response) => {
            toast.info('<-- /' + tab, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(response.data);
            this.setState({
                selectedTabIndex: index,
                selectedTabData: response.data,
                selectedDataComponent: components[index]
            });
        }).catch(function (error) {
            console.log(error);
        });
    };
    onUserLoggedIn = user => {
        this.setState({
            user: user
        })
    };

    render() {
        const {selectedTabIndex, selectedTabData, selectedDataComponent} = this.state;

        return (
            <div>
                <Header/>

                <Main
                    DataComponent={selectedDataComponent}
                    user={this.state.user}
                    onUserLoggedIn={this.onUserLoggedIn}
                    data={selectedTabData}>
                </Main>
                <Footer
                    selectedTabIndex={selectedTabIndex}
                    onSelect={this.handleTabSelected}/>

                <ToastContainer
                    autoClose={2000}
                    position="bottom-right"/>

            </div>
        )

    }


}

