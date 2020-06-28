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
import env from '../.env';
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
  // projects/{project-number-or-id}
  // Creates a client

  // async function translateText() {
  //   const text = 'The text to translate, e.g. Hello, world!';
  // const target = 'The target language, e.g. ru';
  //   // Translates the text into the target language. "text" can be a string for
  //   // translating a single piece of text, or an array of strings for translating
  //   // multiple texts.
  //   let [translations] = await translate.translate(text, target);
  //   translations = Array.isArray(translations) ? translations : [translations];
  //   console.log('Translations:');
  //   translations.forEach((translation, i) => {
  //     console.log(`${text[i]} => (${target}) ${translation}`);
  //   });
  // }

  // translateText();

  onChangeText(e) {
    // this.setState({inputText: e.target.value});
    console.log('****', e);
    this.setState({inputText: e});
  }
  onTranslateToggle() {
    console.log(this.state.inputText);
    this.setState({showTextTranslator: false});

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
