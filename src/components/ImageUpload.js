import React, {Component} from 'react';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';
import {vision_API} from '../utils/api_key';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

const options = {
  title: 'Upload an Image',
  chooseFromLibraryButtonTitle: 'Choose image from your phone',
  takePhotoButtonTitle: 'Take a photo with your phone',
};

class ImageUpload extends Component {
  state = {
    imageSource: '',
    imageData: '',
    selectImageLoading: false,
    extractedText: '',
    ext2: '',
  };

  selectImage() {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = {uri: response.uri};

        this.setState({
          imageSource: source,
          imageData: response.data,
        });
      }
      this.setState({
        selectImageLoading: false,
      });
    });
  }

  async onTranslate() {
    const resource = {
      requests: [
        {
          image: {
            source: {
              imageUri:
                'https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
            },
          },
          imageContext: {
            languageHints: ['en'],
          },
          features: [
            {
              type: 'TEXT_DETECTION',
            },
          ],
        },
      ],
    };

    try {
      let data = await fetch(
        `https://vision.googleapis.com/v1/images:annotate?key=${vision_API}`,
        {
          method: 'POST',
          body: JSON.stringify(resource),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );

      data = await data.json();
      this.setState({extractedText: data});
      console.log('data & state ', data, this.state);

      const textFromGoogle = await data.responses[0].fullTextAnnotation.text;
      this.setState({ext2: textFromGoogle});

      Actions.main({textToTranslate: textFromGoogle});
      // Actions.main({textToTranslate: 'ENJOY THE SIMPLE THINGS'});
    } catch (error) {
      console.log(error);
    }

    // await fetch(
    //   `https://vision.googleapis.com/v1/images:annotate?key=${vision_API}`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(resource),
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //     },
    //   },
    // ).then(
    //   async function (response) {
    //     console.log('OUTPUT: ImageUpload -> onTranslate -> response', response);

    //     console.log('Response **', response.json());

    //     await this.setState({extractedText: response.json()});

    //     response = await response.json();
    //     const extractedText = await response._55.responses[0].fullTextAnnotation
    //       .text;
    //     console.log(
    //       'OUTPUT: ImageUpload -> onTranslate -> extractedText',
    //       extractedText,
    //     );
    //     console.log('OUTPUT: ImageUpload -> render -> render', this.state);
    //   },
    //   function (err) {
    //     console.error('Execute error', err);
    //   },
    // );
  }

  render() {
    const {btn_text, btn, user__image, uploadImage__button, container} = styles;

    return (
      <ScrollView>
        <Button
          title="Select Image"
          style={uploadImage__button}
          value="Select Image"
          onPress={() => this.selectImage()}
        />
        <View style={container}>
          {this.state.imageSource ? (
            <Image source={this.state.imageSource} style={user__image} />
          ) : (
            <Text>No Image</Text>
          )}

          {this.state.imageSource ? (
            <TouchableOpacity onPress={() => this.onTranslate()}>
              <View style={btn}>
                <Text style={btn_text}>Translate</Text>
              </View>
            </TouchableOpacity>
          ) : null}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 11,
    width: 150,
  },
  btn_text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  addDeal__button: {
    justifyContent: 'center',
    backgroundColor: '#82cfe8',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 20,
    marginHorizontal: 5,
    marginBottom: 50,
  },
  picker__label: {
    fontSize: 18,
    paddingLeft: 5,
    marginTop: 10,
    textAlign: 'center',
  },
  picker__container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker__subContainer: {
    width: '50%',
  },
  errorMessage: {
    marginLeft: 5,
    fontSize: 15,
    color: 'red',
  },
  user__image: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    marginBottom: 5,
    borderRadius: 20,
  },
  uploadImage__button: {
    backgroundColor: '#c7c5c1',
    width: 100,
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 20,
  },
});

export default ImageUpload;
