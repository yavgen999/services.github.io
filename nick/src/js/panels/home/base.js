import React from 'react';
import {connect} from 'react-redux';
import bridge from '@vkontakte/vkui-connect';
import {closePopout, goBack, openModal, openPopout, setPage} from '../../store/router/actions';
import {Div, Panel, Alert, Group, Cell, Tabs, Search, List, PanelHeader, Separator, CardGrid, Card, Placeholder, Input, FormLayoutGroup, FormLayout, Header, Button, Tooltip, PanelHeaderContent, ModalRoot, Snackbar, Avatar, Radio, Footer, Switch, Textarea, Select} from "@vkontakte/vkui";
import "@happysanta/vk-app-ui/dist/vkappui.css";
import Icon56FavoriteOutline from '@vkontakte/icons/dist/56/favorite_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28CopyOutline from '@vkontakte/icons/dist/28/copy_outline';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon24Favorite from '@vkontakte/icons/dist/24/favorite';
import Icon24Copy from '@vkontakte/icons/dist/24/copy';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import {setActiveTab, setScrollPositionByID} from "../../store/vk/actions";
import jQuery from 'jquery';
import { NONAME } from 'dns';
const qs = require('querystring');
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
class HomePanelBase extends React.Component {



    state = {
        showImg: false,
        fetchedUser: "",
        teh: '',
        tooltip1: false,
        tooltip2: false,
        tooltip3: false,
        activeModal: null,
        snackbar: null,
        nick: 'Генератор ников и имен',
        nickf: null,
        nameGender: true,
        nameSelect: false,
        nameSymbol: '',
        value1: ' ',
        checked1: null,
        checked2: null,
        checked3: null,
        input: '',
        SelectValue: 'Нет'
    };
    showImg = () => {
        this.setState({showImg: true});
    };
    onChanges = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
        }
    componentDidMount(){
console.log('componentDidMount in base.js has been started');
    }
izb = () => {
    this.setState({ snackbar:
        <Snackbar
          onClose={() => this.setState({ snackbar: null })}
          action="Перейти в закладки"
          onActionClick={() => this.setState({ text: 'Переходим в закладки' })}
          before={<Avatar size={24} style={orangeBackground}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
        >
          Nickname сохранен в закладки 
        </Snackbar>
      });
}

generation = () => {
var malename = ["Allen","Bob","Carlton", "David","Ernie","Foster", "George","Howard","Ian", "Jeffery","Kenneth","Lawrence", "Michael","Nathen","Orson", "Peter","Quinten","Reginald", "Stephen","Thomas","Morris", "Victor","Walter","Xavier", "Charles","Anthony","Gordon", "Percy","Conrad","Quincey", "Armand","Jamal","Andrew", "Matthew","Mark","Gerald", "Abing", "Al", "Ald", "Aln", "Ames", "Amp", "Ash", "At", "Ave", "Aving", "Ax", "Back", "Bake", "Bamp", "Ban", "Beck", "Ber", "Berke", "Bevers", "Bi", "Bick", "Bin", "Block", "Bol", "Bos", "Bottes", "Bow", "Brad", "Brans", "Brat", "Bre", "Bree", "Bridg", "Brink", "Bris", "Brom", "Broom", "Bud", "Cad", "Caer", "Came", "Car", "Cart", "Castle", "Cavers", "Charter", "Ched", "Chew", "Chippen", "Coly", "Corn", "Cors", "Cran", "Credi", "Crick", "Crow", "Culm", "Dagger", "Dart", "Dedding", "Deer", "Din", "Ditte", "Dittis", "Dor", "Dragon", "Drif", "Dry", "Dun", "Dur", "Dwarf", "East", "Ebring", "Eding", "Elf", "Elk", "En", "Erming", "Exe", "Fair", "Faring", "Flad", "Fording", "Forth", "Framp", "From", "Gis", "Glas", "Gnome", "Goblin", "Gras", "Grey", "Guis", "Hail", "Hart", "Haver", "Helm", "Here", "Hex", "Hol", "Hop", "In", "Kelm", "Ken", "Kew", "Kil", "King", "Kirk", "Knight", "La", "Lam", "Lan", "Laner", "Laving", "Led", "Leo", "Lindis", "Lyd", "Lymp", "Mal", "Malmes", "Marsh", "Mel", "Mell", "Minchin", "Monk", "Mont", "Mow", "Muchel", "Net", "Nether", "Nev", "New", "Nib", "North", "Pen", "Per", "Pether", "Pew", "Pris", "Rad", "Rend", "Ring", "Rip", "Rock", "Rom", "Roth", "Sapper", "Sel", "Seming", "Shaftes", "Shield", "Shob", "Shrews", "Sid", "Sken", "Skip", "Somer", "South", "Spear", "Staf", "Stan", "Stan", "Staple", "Staun", "Stoke", "Sword", "Syd", "Taun", "Tavi", "Tel", "Tewkes", "Tint", "Titch", "Tiver", "Tort", "Tot", "Trout", "Uff", "Uffing", "Ulvers", "Uplea", "Urch", "Wan", "War", "Wel", "Wen", "West", "Whit", "Wide", "Wim", "Winch", "Wit", "Withing", "Wood", "Woot", "Wor", "Wot", "Wring", "Yat", "bane", "beck", "borne", "borough", "bourn", "bourne", "bray", "bridge", "burgh", "burn", "burton", "bury", "by", "chester", "comb", "combe", "con", "cost", "culme", "dal", "der", "dish", "don", "dor", "e", "east", "ent", "ern", "es", "farn", "fel", "field", "font", "ford", "frith", "glade", "glen", "gold", "gomery", "ham", "hampton", "house", "how", "hurst", "iard", "keep", "kirk", "lade", "land", "leigh", "leon", "ley", "lingham", "low", "meet", "mel", "mere", "minster", "moot", "mouth", "nard", "ne", "nes", "newton", "ney", "noller", "nor", "on", "pas", "peck", "rest", "ridge", "scott", "sey", "shire", "silver", "sley", "spring", "stock", "stoke", "ston", "stone", "sward", "swear", "tage", "ter", "tol", "ton", "ton", "ton", "ton", "ton", "ton", "ton", "ton", "ton", "ton", "town", "vale", "vern", "wall", "water", "well", "went", "west", "wick", "wood", "worth", "worthy", "yard", "Dancing", "Laughing", "Running", "Prancing", "Drunken", "Flying", "Sleeping", "Leaping", "Fighting", "Sleeping", "Red", "Green", "Blue", "Yellow", "White", "Black", "Rusty", "Silver", "Golden", "Shiny", "Bronze", "Iron", "Badger", "Bear", "Beaver", "Boar", "Bull", "Cat", "Cow", "Dragon", "Dog", "Deer", "Duck", "Dwarf", "Elf", "Elk", "Eagle", "Fairy", "Ferret", "Gnome", "Goblin", "Goat", "Goose", "Hen", "Lamb", "Lion", "Orc", "Ogre", "Pig", "Pony", "Rooster", "Sheep", "Troll", "Unicorn", "Tree", "Bucket", "Shield", "Sword", "Spear", "Bow", "Arrow", "Axe", "Barrel", "Keg", "Tap", "Mug", "Chalice", "Helm", "Wheel", "Saw", "Plow", "Bell", "Crown", "Ship", "Sun", "Moon", "Star", "Coin", "Bottle", "Ald", "Aeld", "Alf", "Aelf", "Alh", "Aelh", "Athel", "Aethel", "Beo", "Beor", "Berh", "Brih", "Briht", "Cad", "Cead", "Cen", "Coel", "Cuth", "Cyne", "Ed", "Ead", "El", "Eal", "Eld", "Eg", "Ecg", "Eorp", "God", "Guth", "Har", "Hwaet", "Leo", "Leof", "Oft", "Ot", "Oth", "Os", "Osw", "Peht", "Pleg", "Rad", "Raed", "Sig", "Sige", "Si", "Sihr", "Tat", "Tath", "Tost", "Ut", "Uht", "Ul", "Ulf", "Wal", "Walth", "Wer", "Wit", "Wiht", "Wil", "Wulf"];
var femalename = ["Alice","Bonnie","Cassie", "Donna","Ethel","Grace", "Heather","Jan","Katherine", "Julie","Marcia","Patricia", "Mabel","Jennifer","Dorthey", "Mary Ellen","Jacki","Jean", "Betty","Diane","Annette", "Dawn","Jody","Karen", "Mary Jane","Shannon","Stephanie", "Kathleen","Emily","Tiffany", "Angela","Christine","Debbie", "Karla","Sandy","Marilyn", "Brenda","Hayley","Linda"];
var lastname = ["Adams","Bowden","Conway", "Darden","Edwards","Flynn", "Gilliam","Holiday","Ingram", "Johnson","Kraemer","Hunter", "McDonald","Nichols","Pierce", "Sawyer","Saunders","Schmidt", "Schroeder","Smith","Douglas", "Ward","Watson","Williams", "Winters","Yeager","Ford", "Forman","Dixon","Clark", "Churchill","Brown","Blum", "Anderson","Black","Cavenaugh", "Hampton","Jenkins","Prichard"];
var r = 0;
var i = 0;
if(this.state.nameGender === false) { // Если женский пол стоит, то выполняем это.

i = Math.floor(Math.random() * femalename.length);
r = Math.floor(Math.random() * lastname.length);

if(this.state.nameSelect === true){ // Проверка на количество слов в нике.
    var nick = femalename[i] + this.state.value1 + lastname[r];
    this.setState({nick: nick});
}else{
    var nick = femalename[i];
    this.setState({nick: nick});
} // Конец условия проверки на количество слов в нике. 
} else { 

i = Math.floor(Math.random() * malename.length);
r = Math.floor(Math.random() * lastname.length);

if(this.state.nameSelect === true){ // Проверка на количество слов в нике. Если nameSelect true, то значит это, что слово из двух символов
        var nick = malename[i] + this.state.value1 + lastname[r];
        this.setState({nick: nick});
    }else{
        var nick = malename[i];
        this.setState({nick: nick});
    }
}
    // this.setState({nick: nick});
    // console.log(nick);
    //console.log('this.generation has started!');
    //this.openPopout();
}



generation2 = () => {
var malename = ["Аввакум","Аваз","Агап","Агафон","Август","Августин","Аггей","Авраам","Абрам","Аарон","Автандил","Авдей","Авдей","Азарий","Арам","Аркадий","Арий","Аристарх","Арно","Арон","Арнольд","Арсен, Арсений","Архип","Артур","Артем","Артемий","Акакий","Алан","Ален","Аким","Альберт","Альфред","Александр","Алексей","Амвросий","Анатолий","Амадей","Амадеус","Амаяк","Анисим","Апполинарий","Антон","Ануфрий","Ануфрий","Андрей","Аскольд","Афанасий","Ахмет","Адам","Адриан","Адольф","Ашот", "Бронислав","Богдан","Борис","Борислав","Болеслав","Бонифаций","Бернар","Бенедикт", "Варлаам","Варфоломей","Вальтер","Валерий","Валентин","Василий","Вадим","Вацлав","Владимир","Владислав","Владлен","Виктор","Вильгельм","Вилен","Викентий","Виссарион","Виталий","Витольд","Володар","Вольдемар","Всеволод","Велизар","Вениамин","Венедикт","Вячеслав", "Гавриил","Гастон","Градимир","Григорий","Глеб","Горислав","Гордон","Гордей","Густав","Гевор","Геральд","Герасим","Герман","Георгий","Генрих","Геннадий", "Давид","Дамир","Даниил","Динасий","Дорофей","Дмитрий","Дональд","Донат","Денис","Демид","Демьян","Джордан", "Евграф","Евгений","Егор","Евстафий","Евсей","Евдоким","Ермолай","Ерофей","Еремей","Елизар","Елисей","Емельян","Ефрем","Ефим","Ефимий", "Жан","Жорж","Ждан", "Захар","Захария","Зигмунд","Зиновий","Зосима", "Иван","Ибрагим","Игнат","Игнатий","Игорь","Израиль","Измаил","Изяслав","Ираклий","Иржи","Иларион","Илларион","Илиан","Ион","Ипполит","Иннокентий","Ионос","Ионас","Иосиф","Исаак","Исаакий","Исидор","Иероним", "Казимир","Карл","Карен","Клавдий","Кирилл","Клим","Климент","Ким","Клод","Клемент","Корнилий","Корней","Конрад","Конкордий","Константин","Кондрат","Ксаннф","Кузьма", "Лаврентий","Лазарь","Лука","Лукьян","Лев","Леван","Леон","Леонард","Леонид","Леопольд","Леонтий","Любомир","Люсьен","Людвиг", "Марат","Марк","Мариан","Мартин","Мартын","Май","Макар","Максим","Максимилиан","Мануил","Матвей","Мадлен","Мирон","Мирослав","Милан","Мисаил","Михаил","Митрофан","Мичлов","Моисей","Модест","Мстислав","Мурат","Муслим","Мефодий","Мечислав","Мечеслав", "Назар","Назарий","Натан","Наум","Никанор","Никита","Никифор","Николай","Никон","Нисон","Нифонт","Норман","Нестор", "Овидий","Олан","Олег","Онисим","Оскар","Осип", "Павел","Парамон","Панкрат","Памфил","Прокофий","Прохор","Платон","Пимен","Порфирий","Петр", "Равиль","Раймонд","Рафаил","Рафик","Ратмир","Радий","Радий","Радомир","Рашид","Ринат","Рихард","Рифат","Ричард","Роберт","Ролан","Роман","Ростислав","Родион","Рубен","Руслан","Рустам","Рудольф","Рем","Ренольд", "Савва","Савел","Савелий","Самсон","Самуил","Святослав","Спартак","Сократ","Соломон","Стакрат","Станимир","Станислав","Стивен","Стоян","Степан","Севастьян","Северин","Серафим","Сергей","Семен", "Тарас","Талик","Таис","Тамаз","Трифон","Трофим","Тигран","Тимон","Тимофей","Тимур","Тит","Тихон","Терентий","Тельман","Теодор", "Ульманас","Устин", "Франц","Фридрих","Филипп","Филимон","Флорентий","Фидель","Фома","Фердинанд","Феликс","Феодосий","Федор","Федот", "Харитон","Христиан","Христос","Христофор", "Эраст","Эрик","Эрнест","Эльдар","Эмиль","Эммануил","Эдвард","Эдмунд","Эдуард", "Юрий","Юлиан","Юлий","Юхим", "Яромир","Ярослав","Яким","Яков","Ян","Януарий","Ясон"];
var femalename = ["Августа","Аврора","Агата","Агнесса","Агния","Ада","Азиза","Алевтина","Александра","Алёна","Алина","Алиса","Алла","Альбина","Амелия","Анастасия","Ангелина","Анжела","Анисья","Анна","Антонина","Анфиса","Ариадна","Арина","Астра","Ася", "Беатриса","Белла","Берта","Божена","Борислава","Бронислава", "Валентина","Валерия","Ванда","Варвара","Василиса","Венера","Вера","Вероника","Веста","Вета","Виктория","Виолетта","Виталина","Владислава", "Галина","Гаянэ","Гелла","Генриетта","Георгина","Гертруда","Глафира","Грета","Гюзель", "Дана","Даниэла","Дарина","Дарья","Дебора","Диана","Дина","Динара","Дионисия","Доминика", "Ева","Евгения","Евдокия","Екатерина","Елена","Елизавета", "Жанна", "Земфира","Зинаида","Злата","Зоя", "Изабелла","Изольда","Инга","Инесса","Инна","Иоанна","Иоланта","Ираида","Ирина","Ирма","Ия", "Калерия","Камилла","Капитолина","Карина","Каролина","Кира","Клавдия","Клара","Констанция","Кристина","Ксения", "Лада","Лариса","Лаура","Лейла","Леся","Лидия","Лилия","Лина","Лия","Любовь","Людмила","Люсьена", "Майя","Маргарита","Марианна","Марина","Мария","Марта","Марьяна","Медея","Милена","Милица","Милослава","Мирослава","Моника","Муза", "Надежда","Наталья","Нелли","Ника","Нина","Нонна", "Оксана","Октябрина","Олеся","Ольга", "Полина","Прасковья", "Рада","Раиса","Ревекка","Регина","Рената","Римма","Роза","Роксана","Ростислава","Рузана","Руслана","Руфина", "Сабина","Сарра","Светлана","Серафима","Сильва","Симона","Снежана","Софья","Станислава","Стелла","Стефания","Сусанна", "Таисия","Тамара","Татьяна","Тереза", "Ульяна","Устина", "Фаина","Фаня","Фая","Фелиция","Флора","Франсуаза","Фрида", "Хильда","Христина", "Чеслава", "Эдита","Элеонора","Элина","Элла","Элоиза","Эльвира","Эльза","Эльмира","Эмилия","Эмма","Эрика", "Юлия","Юна","Юнона","Юстина","Ядвига","Яна","Ярослава"];
var lastname1 = ["Иванов","Смирнов","Кузнецов","Попов","Васильев","Петров","Соколов","Михайлов","Новиков","Федоров","Морозов","Волков","Алексеев","Лебедев","Семенов","Егоров","Павлов","Козлов","Степанов","Николаев","Орлов","Андреев","Макаров","Никитин","Захаров","Зайцев", "Соловьев","Борисов","Яковлев","Яковлев","Сергеев","Дмитриев","Киселев","Сорокин","Белов","Тарасов","Жуков","ГерасимовИ","Матвеев","Крылов","Власов","Тихонов","Савельев","Чернов","Федотов","Калинин","Маслов","Лазарев","Пономарев","Наумов","Овчинников","Соболев","Емельянов","Гришин","Громов","Моисеев","Кондратьев","Еремин","Михеев","Белоусов","Харитонов","Левин","Софронов","Савин","Демидов","Сафонов","Фадеев","Литвинов","Ершов","Рябов","Лобанов","Бородин","Балашов","Блинов","Блинов","Крюков","Лавров","Ларин","Зотов","Константинов","Самсонов","Носов","Воронцов","Нечаев","Фирсов","Терехов","Ульянов","Ульянов","Селиванов","Кожевников","Широков","Сазонов","Корнилов","","Копылов","Кулешов","Родин","Бочаров","Агафонов","Агафонов","Агафонов","Куприянов","Круглов","Артамонов","Федосеев","Столяров","Дорофеев","Золотарев","Макеев","Петровский","Кочетков","Калмыков","Кравцов","Кравцов","Лосев","Парфенов","Розанов","Русаков","Кошелев","Рогов","Евсеев","Аникин","Одинцов","Орехов","Руденок","Кондрашов","Курочкин","Ерофеев","Носков","Меркулов","Ананьев","Дружинин","Долгов","Рубцов","Успенский","Вишневский","Шаров","Яшин","Басов","Чумаков","Дубинин","Шульгин","Семин","Щеглов","Чеснок","Калугин","Кочергин","Ермилов","Минин","Гуров","Ермолов","Барсуков","Уваров","Раков","Моргунов","Кукушкин","Елизаров","Федосов"];
var lastname2 = ["Иванова","Смирнова","Кузнецова","Попова","Васильева","Петрова","Соколова","Михайлова","Новикова","Федорова","Морозова","Волкова","Алексеева","Лебедева","Семенова","Егорова","Павлова","Козлова","Степанова","Николаева","Орлова","Андреева","Макарова","Никитина", "Захарова","Зайцева","Соловьева","Борисова","Яковлева","Яковлева","Сергеева","Дмитриева","Киселева","Сорокина","Белова","Тарасова","Жукова","Герасимова","Матвеева","Крылова","Власова","Тихонова","Савельева","Чернова","Федотова","Калинина","Маслова","Лазарева", "Пономарева","Наумова","Овчинникова","Соболева","Емельянова","Гришина","Громова","Моисеева","Кондратьева","Еремина","Михеева","Белоусова","Харитонова","Левина","Софронова","Савина","Демидова","Сафонова","Фадеева","Литвинова","Ершова","Рябова","Лобанова","Бородина", "Балашова","Блинова","Блинова","Крюкова","Лаврова","Ларина","Зотова","Константинова","Самсонова","Носова","Воронцова","Нечаева","Фирсова","Терехова","Ульянова","Ульянова","Селиванова","Кожевникова","Широкова","Сазонова","Корнилова","Копылова","Кулешова","Родина", "Бочарова","Агафонова","Агафонова","Агафонова","Куприянова","Круглова","Артамонова","Федосеева","Столярова","Дорофеева","Золотарева","Макеева","Петровскийа","Кочеткова","Калмыкова","Кравцова","Кравцова","Лосева","Парфенова","Розанова","Русакова","Кошелева","Рогова", "Евсеева","Аникина","Одинцова","Орехова","Кондрашова","Курочкина","Ерофеева","Носкова","Меркулова","Ананьева","Дружинина","Долгова","Рубцова","Успенскийа","Вишневскийа","Шарова","Яшина","Басова","Чумакова","Дубинина","Шульгина","Семина","Щеглова","Чеснока","Калугина", "Кочергина","Ермилова","Минина","Гурова","Ермолова","Барсукова","Уварова","Ракова","Моргунова","Кукушкина","Елизарова","Федосова"];

var r = 0;
var i = 0;
if(this.state.nameGender === false) { // Если женский пол стоит, то выполняем это.

i = Math.floor(Math.random() * femalename.length);
r = Math.floor(Math.random() * lastname2.length);

if(this.state.nameSelect === true){ // Проверка на количество слов в нике.
    var nick = femalename[i] + this.state.value1 + lastname2[r];
    this.setState({nick: nick});
}else{
    var nick = femalename[i];
    this.setState({nick: nick});
} // Конец условия проверки на количество слов в нике. 
} else { 

i = Math.floor(Math.random() * malename.length);
r = Math.floor(Math.random() * lastname1.length);

if(this.state.nameSelect === true){ // Проверка на количество слов в нике. Если nameSelect true, то значит это, что слово из двух символов
        var nick = malename[i] + this.state.value1 + lastname1[r];
        this.setState({nick: nick});
    }else{
        var nick = malename[i];
        this.setState({nick: nick});
    }
}
    // this.setState({nick: nick});
    // console.log(nick);
    //console.log('this.generation has started!');
    //this.openPopout();
}





pop = () => {
    this.openPopout();
}
female = () => {
    if(this.state.checked1 === 'checked'){
    this.setState({checked1: null, nameGender: true});
    } else {
    this.setState({checked1: 'checked', nameGender: false});
    }
}
twonick = () => {
    if(this.state.checked2 === 'checked'){
        this.setState({checked2: null, nameSelect: false});
        } else {
        this.setState({checked2: 'checked', nameSelect: true});
        }
}

symbols = () => {
    console.log('TESTIM999');
    if(this.state.checked3 === 'checked'){
        this.setState({checked3: null, input: ''});
        } else {
        this.setState({checked3: 'checked', input: '<Input type="text" placeholder="Введите сюда свой символ" align="center"/>'});
        }
}
openPopout() {
    this.props.openPopout(
        <Alert
            actions={[{
                title: 'Отмена',
                autoclose: true,
                style: 'cancel',
            }, {
                title: 'Готово',
                autoclose: true,
                style: 'cancel',
            }]}
            onClose={() => this.props.closePopout()}
        >
            <h2>Настройки</h2>
            <p>Выберите настройки генератора.</p> <br/>
            <FormLayout>
                {this.state.checked1 === 'checked' ?
            <Cell asideContent={<Switch defaultChecked onClick={(this.female)} />} >Женские ники</Cell>:
            <Cell asideContent={<Switch onClick={(this.female)} />} >Женские ники</Cell>}
            {this.state.checked2 === 'checked' ?
            <Cell asideContent={<Switch defaultChecked onClick={(this.twonick)}/>}>Ник из 2 слов</Cell>:
            <Cell asideContent={<Switch onClick={(this.twonick)}/>}>Ник из 2 слов</Cell>}
<Input
value={this.state.value1}
type="text"
top="Значение хим.количества(n)"
name="value1"
placeholder="Значение хим.количества(n)"
onChange={this.onChanges}
status={this.state.value1 ? 'valid' : this.state.valid}onKeyDown={this.func}
/>
            </FormLayout>
        </Alert>
    );
}

repost = () => {
    bridge.send("VKWebAppShowWallPostBox", {"message": this.state.nick});
}
copy = () => {
    bridge.send("VKWebAppCopyText", {text: this.state.nick});
} 


    render() {
        const {id, setPage, withoutEpic} = this.props;
        return (
        <Panel id={id}>
                <PanelHeader left={<Icon56FavoriteOutline width={39} height={39}/>}><PanelHeaderContent aside={<Icon24Filter/>} onClick={(this.pop)}>Генератор</PanelHeaderContent></PanelHeader>
                <Div>
        <div style={{
          backgroundImage: 'linear-gradient(135deg, #FCCF31 10%, #EA5455 90%)',
          height: 75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '6px',
          borderRadius: 12
        }}>
            <h1 style={{ fontFamily: ' monaco, sans-serif', color: '#FFF' }}>{this.state.nick}</h1>
            </div>
            </Div>
                <Div style={{display: 'flex'}}>
                <Button style={{ marginRight: 'auto', marginLeft: 'auto', borderRadius: '53px', backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'}} onClick={(this.izb)}><Icon56FavoriteOutline fill='#FFF'/></Button>
                <Button style={{ marginRight: 'auto', borderRadius: '53px', backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'}} onClick={(this.copy)}><Icon28CopyOutline fill='#FFF' height={51} width={51}/></Button>
                <Button style={{ marginRight: 'auto', borderRadius: '53px', backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'}} onClick={(this.repost)}><Icon28ShareOutline fill='#FFF' height={51} width={51}/></Button>
                </Div>
                <Separator style={{ margin: '12px 3' }} />
                <Group header={<Header mode="secondary">Список генераторов</Header>}>
                <Div style={{display: 'flex'}}>
                <Button size="xl" mode="secondary" style={{ marginRight: 3, backgroundImage: 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)', color: '#FFF', borderRadius: '53px' }} onClick={(this.generation)}>Английский</Button>
                <Tooltip
                text="Английский генератор генерирует nickname из английских букв."
                isShown={this.state.tooltip1}
                onClose={() => this.setState({ tooltip1: false })}
                alignX="right"
                cornerOffset={-6}
                >
                <Button size="l" mode="secondary" style={{ borderRadius: '50px', backgroundImage: 'linear-gradient( 150deg, #5EFCE8 10%, #736EFE 100%)', color: '#FFF' }} onClick={() => (this.setState({tooltip1: true}))} >?</Button>
                </Tooltip>
                </Div>
                <Div style={{display: 'flex'}}>
                <Button size="xl" mode="secondary" style={{ marginRight: 3, backgroundImage: 'linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)', color: '#FFF', borderRadius: '53px' }} onClick={(this.generation2)}>Русский</Button>
                <Tooltip
                text="Русский генератор генерирует nickname из русских букв."
                isShown={this.state.tooltip2}
                onClose={() => this.setState({ tooltip2: false })}
                alignX="right"
                cornerOffset={-6}
                >
                <Button size="l" mode="secondary" style={{ borderRadius: '50px', backgroundImage: 'linear-gradient( 150deg, #5EFCE8 10%, #736EFE 100%)', color: '#FFF' }} onClick={() => (this.setState({tooltip2: true}))}>?</Button>
                </Tooltip>
                </Div>
                </Group>
                {this.state.snackbar}
                <Footer>by text studio</Footer>
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
