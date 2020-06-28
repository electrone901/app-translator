import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TextTranslator from './TextTranslator';
import HeaderApp from './Header';
import SaveWordsList from './SaveWordsList';
import Footer from './Footer';
import DisplayResult from './DisplayResult';
// const dotenv = require('dotenv');
// const {
//   Storage,
// } = require('../../node_modules/@google-cloud/storage/build/src/storage.d.ts');

import API_KEY from '../utils/api_key';
import axios from 'axios';

const list = [
  {
    id: 1,
    wordEn: 'hello',
    traduction: 'hola',
  },
  {
    id: 2,
    wordEn: 'where is the restroom?',
    traduction: '¿donde está el baño?',
  },
  {
    id: 3,
    wordEn: 'hurry up',
    traduction: 'darse prisa',
  },
  {
    id: 4,
    wordEn: 'food',
    traduction: 'comida',
  },
  {
    id: 5,
    wordEn: 'hurry up',
    traduction: 'darse prisa',
  },
];

class Main extends React.Component {
  state = {
    translateToggle: false,
    inputText: '',
    showTextTranslator: true,
  };
  // Imports the Google Cloud client library

  // https://translation.googleapis.com/v3/{parent=rugged-layout-136123}:translateText

  // async translateText(text, target) {
  //   // Translates the text into the target language. "text" can be a string for
  //   // translating a single piece of text, or an array of strings for translating
  //   // multiple texts.
  //   let [translations] = await translate.translate(text, target);
  //   translations = Array.isArray(translations) ? translations : [translations];
  //   console.log('Translations:');
  //   // translations.forEach((translation, i) => {
  //   //   console.log(`${text[i]} => (${target}) ${translation}`);
  //   // });
  // }

  onChangeText(e) {
    // this.setState({inputText: e.target.value});
    console.log('****', e);
    this.setState({inputText: e});
  }
  onTranslateToggle() {
    console.log('Click', this.state.inputText);
    this.setState({showTextTranslator: false});

    let fromLang = 'en';
    let toLang = 'es';
    let text = 'Hello';

    console.log('Click', this.state.inputText);

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('response from google: ', response);
      })
      .catch((error) => {
        console.log('There was an error with the translation request: ', error);
      });

    // let url = `https://translation.googleapis.com/language/translate/v2?key${api_key}`;
    // url += '&q=' + encodeURI(q);
    // url += `&source=${source}`;
    // url += `&target${target}`;

    // console.log('OUTPUT: Main -> onTranslateToggle -> url', url);
    // axios
    //   .get(url)
    //   .then((data) => {
    //     console.log('OUTPUT: Main -> onTranslateToggle -> data', data);
    //     this.setState({
    //       translated: data.data.data.translations[0].translatedText,
    //     });
    //     console.log(data.data.data.translations[0].translatedText);
    //   })
    //   .catch((err) => {
    //     console.log('error');
    //   });

    // this.translateText('hello', 'sp');

    // translate('Ik spreek Engels', {to: 'en'})
    //   .then((res) => {
    //     console.log(res.text);
    //     //=> I speak English
    //     console.log(res.from.language.iso);
    //     //=> nl
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });

    // googleTranslate.translate('My name is Brandon', 'es', function (
    //   err,
    //   translation,
    // ) {
    //   console.log(translation.translatedText);
    //   // =>  Mi nombre es Brandon
    // });

    // this.searchInput._root.clear();
    // this.search.demo.clear();

    console.log('ddd', this.state);
  }
  onTranslateMore() {
    this.setState({showTextTranslator: true});
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <HeaderApp />

            {this.state.showTextTranslator ? (
              <TextTranslator
                label="Enter text"
                value={this.state.inputText}
                onChangeText={this.onChangeText.bind(this)}
                onTranslateToggle={this.onTranslateToggle.bind(this)}
                ref={this.searchInput}
              />
            ) : (
              <DisplayResult
                onTranslateMore={this.onTranslateMore.bind(this)}
              />
            )}

            <View style={styles.body}>
              <SaveWordsList list={list} />
            </View>
          </ScrollView>
          <Footer />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Main;
