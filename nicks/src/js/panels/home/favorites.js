import React from 'react';
import {connect} from 'react-redux';
import bridge from '@vkontakte/vkui-connect-promise';
import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {Div, Panel, Alert, Group, Cell, Tabs, Search, List, PanelHeader, PanelHeaderBack, ActionSheet, ActionSheetItem, Link, PanelHeaderButton, Separator, CardGrid, Card, Placeholder, Input, FormLayoutGroup, FormLayout, Header, Button, Tooltip, PanelHeaderContent, ModalRoot, Snackbar, Avatar, Radio, Footer, Switch, Textarea, Select} from "@vkontakte/vkui";
import { platform, IOS} from '@vkontakte/vkui';
import "@happysanta/vk-app-ui/dist/vkappui.css";
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon56InfoOutline from '@vkontakte/icons/dist/56/info_outline';
import Icon24FavoriteOutline from '@vkontakte/icons/dist/24/favorite_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28CopyOutline from '@vkontakte/icons/dist/28/copy_outline';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Copy from '@vkontakte/icons/dist/24/copy';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";
import jQuery from 'jquery';
import { NONAME } from 'dns';
const qs = require('querystring');
const osname = platform();
const orangeBackground = {
    backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
  };
var params = window.location.search.replace('?', '').replace('%2C', ',');
const urlParams = qs.parse(params);
const ordered = {};
Object.keys(urlParams).sort().forEach((key) => {
if (key.slice(0, 3) === 'vk_') {
ordered[key] = urlParams[key];
}
});
const request = new XMLHttpRequest();
window._hsMobileUI = true;

var favorites = [];

class HomePanelFavorites extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
      };
    }


    async componentDidMount(){
      console.log('componentDidMount in favorites.js has been started');
      this.setState({ notFoundError: false });
      favorites.splice(0, favorites.length);
      await bridge.send("VKWebAppStorageGet", {"keys": ["favorites"]}).then(data => {
        let fav = data.data.keys[0].value.split(';');
        if(favorites[0] == '') favorites.shift();
        if(fav.length == 1) {
          if(data.data.keys[0].value == '') this.setState({ notFoundError: true });
          else {
            favorites.push(data.data.keys[0].value);
          }
        }
        else if(fav.length == 0) this.setState({ notFoundError: true });
        else {
          for (var i = 0; i < fav.length; i++) {
              if(fav[i] != '') favorites.push(fav[i]);
          }
        }
      });
      this.forceUpdate();
    }

    get favorites () {
      return favorites;
    }

    openPopout(nick) {
        this.props.openPopout(
          <ActionSheet onClose={() => this.props.closePopout()}>
          <ActionSheetItem onClick={() => this.copy(nick)} autoclose>
            Скопировать Nickname
          </ActionSheetItem>
          <ActionSheetItem onClick={() => this.repost(nick)} autoclose>
            Поделиться
          </ActionSheetItem>
          <ActionSheetItem onClick={() => this.delete(nick)} autoclose>
            Удалить Nickname из избранного
          </ActionSheetItem>
          {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        </ActionSheet>
        );
    }

    showSnackbar(value) {
        switch(value) {
          case 1: {
            this.setState({ snackbar:
                <Snackbar
                  onClose={() => this.setState({ snackbar: null })}
                  before={<Avatar size={24} style={orangeBackground}><Icon24Done fill="#fff" width={14} height={14} /></Avatar>}
                >
                  Nickname успешно удален
                </Snackbar>
              });
              return;
          }
          case 2: {
            this.setState({ snackbar:
                <Snackbar
                  onClose={() => this.setState({ snackbar: null })}
                  before={<Avatar size={24} style={orangeBackground}><Icon24Done fill="#fff" width={14} height={14} /></Avatar>}
                >
                  Nickname успешно скопирован
                </Snackbar>
              });
              return;
          }
        }
    }

    repost(nickname) {
      console.log(nickname);
      bridge.send("VKWebAppShowWallPostBox", {"message": nickname});
    }

    copy(nickname) {
        console.log(nickname);
        navigator.clipboard.writeText(nickname);
        this.showSnackbar(2);
    }

    delete(nickname) {
      console.log(nickname);
      for (var i = 0; i < favorites.length; i++) {
        if(favorites[i] == nickname) {
          if(favorites.length == 1) this.setState({ notFoundError: true });
          favorites.splice(i, 1);
          let fav = favorites.join(';');
          console.log(fav);
          bridge.send("VKWebAppStorageSet", {"key": "favorites", "value": fav});
          break;
        }
      }
      this.showSnackbar(1);
      this.forceUpdate();
    }


    render() {
        const {id, setPage, withoutEpic, goBack} = this.props;
        return (
        <Panel id={id}>
                <PanelHeader left={<PanelHeaderBack style={{ cursor: 'pointer' }} onClick={() => goBack()} />}>Избранное</PanelHeader>
                {this.state.notFoundError === false ? this.favorites.map(favorites =>
                  <Div onClick={() => this.openPopout(favorites)}>
                    <div style={{
                      cursor: 'pointer',
                      backgroundImage: 'linear-gradient(135deg, #FCCF31 10%, #EA5455 90%)',
                      height: 75,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingBottom: '6px',
                      borderRadius: 12
                    }}>
                        <h1 style={{ fontFamily: 'monaco, sans-serif', color: '#FFF' }}>{favorites}</h1>
                        </div>
                        </Div>) :
                        <Placeholder
                          icon={<Icon56InfoOutline fill='#4680C2'/>}
                        >
                          У Вас нет никнеймов в избранном!
                        </Placeholder>
                      }


                {this.state.snackbar}
                <Footer style={{ cursor: 'pointer' }}><Link href="https://vk.com/dark_code_studio" target="_blank">by Dark Code Studio</Link></Footer>
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
export default connect(null, mapDispatchToProps)(HomePanelFavorites);
