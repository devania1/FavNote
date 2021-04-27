import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ArticlesView from '../ArticlesView/ArticlesView';
import TwittersView from '../TwittersView/TwittersView';
import NotesView from '../NotesView/NotesView';
import Navigation from '../../components/Header/HeaderNavigation';

const initialStateItems = [
{
    image: 'https://www.laminerva.pl/wp-content/uploads/2016/04/czarny-kwadrat-na-bialym-tle.jpg',
    name: 'Dan Abramov',
    // description: 'Working on @reactjs. The demo guy.',
    twitterLink: 'https://twitter.com/dan_abramov',
},
{
    image: 'https://www.laminerva.pl/wp-content/uploads/2016/04/czarny-kwadrat-na-bialym-tle.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
},
{
    image: 'https://www.laminerva.pl/wp-content/uploads/2016/04/czarny-kwadrat-na-bialym-tle.jpg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
},
{
    image: 'https://www.laminerva.pl/wp-content/uploads/2016/04/czarny-kwadrat-na-bialym-tle.jpg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
}
];

class Root extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink:e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
    }

    render() {
        return (
            <BrowserRouter>
                <>
                <Navigation />
                <h1>Hello world!</h1>
                <Switch>
                <Route exact path="/" component={TwittersView} />
                <Route path="/articles" component={ArticlesView} />
                <Route path="/notes" component={NotesView} />
                </Switch>
                </>
            </BrowserRouter>
            )
    }  
}

export default Root;