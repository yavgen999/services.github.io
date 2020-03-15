import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {goBack, closeModal} from "./js/store/router/actions";
import * as VK from './js/services/VK'; 
import bridge from '@vkontakte/vkui-connect-promise';

import {View, Root, ModalRoot, ConfigProvider} from "@vkontakte/vkui";

import HomePanelProfile from './js/panels/home/base';
import HomePanelGroups from './js/panels/home/groups';
import HomePanelMassa9 from './js/panels/home/massa9';
import HomePanelFavorites from './js/panels/home/favorites';

import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

import MorePanelExample from './js/panels/more/example';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.lastAndroidBackAction = 0;
    }

    componentWillMount() {
        const {goBack, dispatch} = this.props;

        dispatch(bridge.initApp());

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
        const {goBack, closeModal, popouts, activeView, activePanel, activeModals, panelsHistory, colorScheme} = this.props;

        let history = (panelsHistory[activeView] === undefined) ? [activeView] : panelsHistory[activeView];
        let popout = (popouts[activeView] === undefined) ? null : popouts[activeView];
        let activeModal = (activeModals[activeView] === undefined) ? null : activeModals[activeView];

        const homeModals = (
            <ModalRoot activeModal={activeModal}>
                <HomeBotsListModal
                    id="MODAL_PAGE_BOTS_LIST"
                    onClose={() => closeModal()}
                />
                <HomeBotInfoModal
                    id="MODAL_PAGE_BOT_INFO"
                    onClose={() => closeModal()}
                />
            </ModalRoot>
        );

        return (
            <ConfigProvider isWebView={true} scheme={colorScheme}>
                <Root activeView={activeView} popout={popout}>
                    <View
                        id="home"
                        modal={homeModals}
                        activePanel={activePanel}
                        history={history}
                        onSwipeBack={() => goBack()}
                    >
                        <HomePanelProfile id="base" withoutEpic={true}/>
                        <HomePanelGroups id="groups"/>
                        <HomePanelFavorites id="favorites"/>
                    </View>
                    <View
                        id="modal"
                        modal={homeModals}
                        activePanel={activePanel}
                        history={history}
                        onSwipeBack={() => goBack()}
                    >
                        <MorePanelExample id="filters"/>
                    </View>
<View
                        id="massa9"
                        modal={homeModals}
                        activePanel={activePanel}
                        history={history}
                        onSwipeBack={() => goBack()}
                    >
                        <HomePanelProfile id="base" withoutEpic={true}/>
                        <HomePanelMassa9 id="massa9"/>
                    </View>

                </Root>
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
        ...bindActionCreators({goBack, closeModal}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
