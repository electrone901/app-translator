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

import {API_KEY} from '../utils/api_key';

class Main extends React.Component {
  state = {
    translateToggle: false,
    inputText: '',
    showTextTranslator: true,
    translatedText: '',
    saveWordList: [
      {
        wordEn: 'please',
        traduction: 'por favor',
      },
      {
        wordEn: 'hello',
        traduction: 'hola',
      },
      {
        wordEn: 'where is the restroom?',
        traduction: '¿donde está el baño?',
      },
      {
        wordEn: 'hurry up',
        traduction: 'darse prisa',
      },
      {
        wordEn: 'food',
        traduction: 'comida',
      },
      {
        wordEn: 'hurry up',
        traduction: 'darse prisa',
      },
    ],
  };

  componentDidMount() {
    if (this.props.textToTranslate) {
      this.setState({inputText: this.props.textToTranslate});
    }
  }
  onChangeText(e) {
    this.setState({inputText: e});
  }
  onTranslateToggle() {
    console.log('Click', this.state.inputText);
    this.setState({showTextTranslator: false});

    let fromLang = 'en';
    let toLang = 'es';
    let text = this.state.inputText;

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
        console.log(
          'OUTPUT: Main -> onTranslateToggle -> response',
          response.data.translations[0].translatedText,
        );
        this.setState({
          translatedText: response.data.translations[0].translatedText,
        });
      })
      .catch((error) => {
        console.log('There was an error with the translation request: ', error);
      });
  }

  onTranslateMore() {
    this.setState({showTextTranslator: true, inputText: ''});
  }

  saveWord() {
    const wordToAdd = {
      wordEn: this.state.inputText,
      traduction: this.state.translatedText,
    };
    this.setState({saveWordList: [wordToAdd, ...this.state.saveWordList]});
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
                inputText={this.state.inputText}
                saveWord={this.saveWord.bind(this)}
                translatedText={this.state.translatedText}
                onTranslateMore={this.onTranslateMore.bind(this)}
              />
            )}

            <View style={styles.body}>
              <SaveWordsList list={this.state.saveWordList} />
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
