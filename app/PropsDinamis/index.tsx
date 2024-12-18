import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import React, { Component } from 'react';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image 
      source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>

    </View>
  )
}

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi PropsDinamis Boss</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story 
            judul="Dogs Gemoy Sekali" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>
                  <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>
                  <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>          <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>          <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>          <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>          <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>          <Story 
            judul="Dogs" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Pugglesie.jpg/800px-Pugglesie.jpg"/>
          <Story 
            judul="Kucing" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/800px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg"/>
          <Story 
            judul="Kuda" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Friesian_Stallion.jpg/457px-Friesian_Stallion.jpg"/>
          <Story 
            judul="Gajah" 
            gambar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"/>
        
        </View>  
            
      </ScrollView>
    </View>
  );
};
export default PropsDinamis;  