
import React from 'react';
import {connect} from 'react-redux';
import vkbridge from '@vkontakte/vk-bridge';
import {bindActionCreators} from 'redux'
import {goBack, closeModal, setStory} from "./js/store/router/actions";
import * as VK from './js/services/VK';

import {Epic, View, Root, Tabbar, Group, Div, ModalRoot, TabbarItem, PanelSpinner, ConfigProvider} from "@vkontakte/vkui";
/*-----------------------------------------------------------*/
import HomePanelBase from './js/panels/home/base';
import HomePanelGroups from './js/panels/home/groups';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;
    }


  state = {
        showImg: false,
        fetchedUser: "",
        teh: '',
        theme: 'state.vkui.colorScheme',
        viewLoaded: null
    };
getLocationHash() {
    return window.location.hash.replace('#', '')
}
    componentDidMount() {
        const {goBack, dispatch, colorScheme} = this.props;
let hash = this.getLocationHash()
if (hash === 'settings') {
setStory('more', 'callmodal')
}
dispatch(VK.initApp());
vkbridge.subscribe((e) => {
switch(e.detail.type) {
case 'VKWebAppGetUserInfoResult':
this.setState({ fetchedUser: e.detail.data });
break;
}})

console.log(this.state.fetchedUser);


        window.onpopstate = () => {
            let timeNow = +new Date();

            if (timeNow - this.lastAndroidBackAction > 500) {
                this.lastAndroidBackAction = timeNow;

                goBack('Android');
            } else {
                window.history.pushState(null, null);
            }
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {activeView, activeStory, activePanel, scrollPosition} = this.props;

        if (
            prevProps.activeView !== activeView ||
            prevProps.activePanel !== activePanel ||
            prevProps.activeStory !== activeStory
        ) {
            let pageScrollPosition = scrollPosition[activeStory + "_" + activeView + "_" + activePanel] || 0;

            window.scroll(0, pageScrollPosition);
        }
    }

    render() {
        const {goBack, setStory, closeModal, popouts, activeView, activeStory, activePanel, activeModals, panelsHistory, colorScheme} = this.props;
let hash = this.getLocationHash()
if (hash === 'items') {
    this.setState({
        activePanel: 'items'
    })
}
        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
        let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];
        return (
            <ConfigProvider isWebView={true} scheme={colorScheme}>

                <Epic activeStory={activeStory}>

                    <Root id="home" activeView={activeView} popout={popout}>
                        <View
                            id="home"
                            activePanel={activePanel}
                            history={history}
                            onSwipeBack={() => goBack()}
                        >
                            <HomePanelBase id="base" withoutEpic={false}/>
                            <HomePanelGroups id="groups"/>
                                            </View>
                    </Root>
     </Epic>
            </ConfigProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        activeView: state.router.activeView,
        activePanel: state.router.activePanel,
        activeStory: state.router.activeStory,
        panelsHistory: state.router.panelsHistory,
        activeModals: state.router.activeModals,
        popouts: state.router.popouts,
        scrollPosition: state.router.scrollPosition,
        colorScheme: state.vkui.colorScheme
    };
};


function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        ...bindActionCreators({setStory, goBack, closeModal}, dispatch)
    }
}
/*               <TabbarItem
                            onClick={() => setStory('resh', 'ReshBase')}
                            selected={activeStory === 'resh'}
                         text='Вещества'><Icon28FireOutline/></TabbarItem> */

export default connect(mapStateToProps, mapDispatchToProps)(App);
