import React from 'react';
import {connect} from 'react-redux';
import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {Div, Panel, Alert, Group, Button, Cell, Tabs, Search, List, PanelHeader} from "@vkontakte/vkui";
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";

class HomePanelBase extends React.Component {
    state = {
        showImg: false
    };
    showImg = () => {
        this.setState({showImg: true});
    };
    render() {
        const {id, setPage, withoutEpic} = this.props;
        return (
            <Panel id={id}>
                <PanelHeader>Формулы</PanelHeader>
<Group title="Формулы">
<List><Cell size="l" stretched={true} onClick={() => setPage('home', 'massa9')}>(m=n*M)</Cell></List>
</Group>            
</Panel>
        );
    }

}

const mapDispatchToProps = {
    setPage,
    goBack,
    openPopout,
    closePopout,
    openModal
};

export default connect(null, mapDispatchToProps)(HomePanelBase);