import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class flexbox extends Component {
  render() {
    return (
      <View>
        {/* Warna Samping */}
        <View style={styles.colorContainer}>
          <View style={[styles.colorBox, { backgroundColor: '#ee5253' }]} />
          <View style={[styles.colorBox, { backgroundColor: '#feca57', width: 200 }]} />
          <View style={[styles.colorBox, { backgroundColor: '#1dd1a1' }]} />
          <View style={[styles.colorBox, { backgroundColor: '#5f27cd' }]} />
        </View>

        {/* Navigasi */}
        <View style={styles.menuContainer}>
          {['Beranda', 'Video', 'Playlist', 'Komunitas', 'Channel', 'Tentang'].map((item, index) => (
            <Text key={index} style={styles.menuText}>
              {item}
            </Text>
          ))}
        </View>

        {/* Foto Profil dan Nama */}
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: 'https://yt3.googleusercontent.com/x-E_8y-jZE2VfS36m5NovGK3SXb5dbGnEht2i_WyAJU8C3TkBLWHoYkeXyCO0FdNOj7_-uKHXw=s160-c-k-c0x00ffffff-no-rj',
            }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.profileName}>Guruh Hendryan Hdr</Text>
            <Text style={styles.subscriberText}>10Jt Berlangganan</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    backgroundColor: '#c8d6e5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', // Menyusun warna ke kiri
  },
  colorBox: {
    width: 50,
    height: 100,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  profileContainer: {
    flexDirection: 'column', // Menyusun elemen secara vertikal
    alignItems: 'center', // Memusatkan ke tengah secara horizontal
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10, // Jarak antara gambar dan teks
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
  },
  subscriberText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});



export default flexbox;

