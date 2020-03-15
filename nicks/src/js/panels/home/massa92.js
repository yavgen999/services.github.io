import React from 'react';
import {connect} from 'react-redux';
import vkconnect from '@vkontakte/vkui-connect';
import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {Div, Panel, Alert, Group, Button, Cell, Tabs, CellButton, FormLayout, Input, Select, Search, List, PanelHeader} from "@vkontakte/vkui";
import Icon24Write from '@vkontakte/icons/dist/24/write';
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";
import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import Icon24MoreVertical from '@vkontakte/icons/dist/24/more_vertical';
const qs = require('querystring');
var params = window.location.search.replace('?', '').replace('%2C', ',');

const urlParams = qs.parse(params);
const ordered = {};
Object.keys(urlParams).sort().forEach((key) => {
if (key.slice(0, 3) === 'vk_') {
ordered[key] = urlParams[key];
}
});
class HomePanelBase extends React.Component {
    state = {
        showImg: false,
        value1: "Данные",
        value2: "Данные",
        res: "Вы еще не произвели расчет.",
        res2: " ",
        valid: '',
        popout: '',
        input1: 'false',
        input2: '' 
    };
onChanges = (e) => {
const { name, value } = e.currentTarget;
this.setState({ [name]: value });
}
    showImg = () => {
        this.setState({showImg: true});
    };
openPopout() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Ясно',
                    autoclose: true,
                    style: 'cancel',
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Информация</h2>
                <p>Действие «Копирование» невозможно, т.к. расчет не был произведен или возникла ошибка.</p>
            </Alert>
        );
    }
    openPopout2() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Ясно',
                    autoclose: true,
                    style: 'cancel',
                }]}
                onClose={() => this.props.closePopout()}
            >
                <h2>Информация</h2>
                <p>Действие «Копирование» невозможно, т.к. Вы находитесь на WEB версии.</p>
            </Alert>
        );
    }
clear = () => {
this.setState({value1:'Данные',value2:'Данные'})
}
copy = () => {
if(ordered.vk_platform != 'desktop_web'){
if(this.state.input1 === 'false'){
    this.openPopout();
}
if(this.state.input1 === 'true'){
vkconnect.send("VKWebAppCopyText", {text: this.state.res});
}
}else{
this.openPopout2();
}
}
openras() {
        this.props.openPopout(
            <Alert
                actions={[{
                    title: 'Очистить',
                    autoclose: true,
                    style: 'cancel',
                    action: this.clear,
                },{
                    title: 'Скопировать',
                    autoclose: true,
                    style: 'cancel',
                    action: this.copy,
                }]}
                onClose={() => this.props.closePopout()}>
                <h2>Информация</h2>
                <p>Выберите нужное Вам действие:</p>
            </Alert>
        );
    }

num = () => {
var result;
var result2;
if(this.state.value1 > 0 & this.state.value1 <= 99999){
if(this.state.value2 > 0 & this.state.value2 <= 99999){
if(this.state.value1 && this.state.value2){
result = (this.state.value1 * this.state.value2).toFixed(3);
result2 = (result / 1000).toFixed(3);
this.setState({res: "Масса(m) = "  + result+ " г ", input1: 'true'});
this.setState({valid: 'default'});
vkconnect.send("VKWebAppTapticImpactOccurred", {"style": "light"});
}else{
this.setState({res: "Произошла ошибка счета. Проверьте введенные данные.", input1: 'false'});
}
}else{
this.setState({res: "Произошла ошибка счета. Проверьте введенные данные.", input1: 'false'});
}
}else{
this.setState({res: "Произошла ошибка счета. Проверьте введенные данные.", input1: 'false'});
}
console.log(this.state.res);
}


    render() {
        const {id, setPage, withoutEpic} = this.props;
        return (
            <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack onClick={this.props.goBack} />}>
  Формулы
</PanelHeader>
<Group title="Как посчитать?">
<Div>
<p oncopy="return false;"> Введите в поля ввода свои значения и нажмите на кнопку "Вычислить". </p>
</Div>
</Group>


<Group title="Формула">
<Div>
Формула нахождения: <b>m=p*V</b>
</Div>
</Group>

<Group title="Вычислитель">
<Div>



<Input
min="0"
value={this.state.value1}
type="number"
top="Значение плотности(p)"
name="value1"
placeholder="Значение плотности(p)"
onChange={this.onChanges}
status={this.state.value1 <= 0 || this.state.value1 >= 100000 ? 'error' : 'default'}
onKeyDown={this.func}
/>

<br/>

<Input
min="0"
value={this.state.value2}
type="number"
top="Значение плотности(p)"
name="value2"
placeholder="Значение объема(V)"
onChange={this.onChanges}
status={this.state.value2 <= 0 || this.state.value2 >= 100000 ? 'error' : 'default'}
onKeyDown={this.func}
/>	

<br/>


<Button size="xl" level="commerce" onClick={(this.num)}>Вычислить</Button>

</Div>			 
</Group>
<Group title="Результат">
<CellButton onClick={() => this.openras()}>{this.state.res}</CellButton>
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