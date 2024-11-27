import { ScrollView, Text } from "react-native";
import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming using Expo

const LandingPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('./assets/Loanslogo.png')} // You'll need to add your logo
            style={styles.logo}
          />
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText} onPress={() => {navigation.navigate('Personal')}}>Start Bonding</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Bonding Guide</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerButton}>
              <Text style={styles.headerButtonText}>contact us</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.socialIcons}>
            <TouchableOpacity>
              <Ionicons name="person-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-instagram" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="logo-facebook" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          <Text style={styles.title}>
            High Education Students' Loans and Grants board
          </Text>

          {/* Mission & Vision */}
          <View style={styles.missionSection}>
            <Text style={styles.missionText}>
              Our <Text style={styles.boldText}>mission</Text> is to sustainably
              provide accessible and affordable loans and grants to deserving
              students pursuing higher education in Malawi.
            </Text>
            <Text style={styles.visionText}>
              Our <Text style={styles.boldText}>vision</Text> is to support needy
              and deserving students access higher education
            </Text>
          </View>

          {/* Statistics Circles */}
          <View style={styles.statsContainer}>
            <View style={styles.statCircle}>
              <Text style={styles.statNumber}>30,000</Text>
              <Text style={styles.statLabel}>Current Application</Text>
            </View>
            <View style={styles.statCircle}>
              <Text style={styles.statNumber}>32</Text>
              <Text style={styles.statLabel}>Accredited instituion</Text>
            </View>
            <View style={styles.statCircle}>
              <Text style={styles.statNumber}>11</Text>
              <Text style={styles.statLabel}>Public Institution</Text>
            </View>
            <View style={styles.statCircle}>
              <Text style={styles.statNumber}>22</Text>
              <Text style={styles.statLabel}>Private Institution</Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Higher education Students Loans and Grants Board-HESLGB
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 15,
  },
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    fontSize: 16,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  mainContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  missionSection: {
    marginVertical: 20,
  },
  missionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  visionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
    gap: 20,
  },
  statCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#4834d4',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default LandingPage;