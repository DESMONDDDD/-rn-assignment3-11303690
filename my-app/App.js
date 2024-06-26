import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const categories = [
  { name: 'Exercise', image: require('./assets/young woman working online.png'), taskCount: 12, tasks: ['Yoga Session', 'Jumping Jacks', 'Pull Ups', 'Stretch and improve flexibility', 'Dance workout'] },
  { name: 'Study', image: require('./assets/young woman working at desk.png'), taskCount: 8, tasks: ['Memorize vocabulary for Spanish test', 'Review lecture notes from class', 'Solve 20 math problems', 'Watch an educational video', 'Practice problems from a textbook', 'Summarize key concepts from a chapter'] },
  { name: 'Code', image: require('./assets/coding.png'), taskCount: 15, tasks: ['Work on a coding challenge', 'Practice writing clean and efficient code', 'Refactor code for better performance', 'Build a personal project to showcase your skills', 'Contribute to an open-source project', 'Learn a new programming language feature'] },
  { name: 'Cook', image: require('./assets/cooking.png'), taskCount: 5, tasks: ['Organize your pantry and refrigerator', 'Try a new recipe from another culture', 'Watch a cooking tutorial online', 'Prepare a packed lunch for tomorrow', 'Create a grocery list for healthy meals'] },
  { name: 'Read', image: require('./assets/reading.png'), taskCount: 3, tasks: ['Read a short story from an anthology', 'Read a blog post about technology trends', 'Read an article from National Geographic', 'Listen to an audiobook while commuting', 'Explore a new genre of literature'] },
  { name: 'Travel', image: require('./assets/travel.png'), taskCount: 2, tasks: ['Pack suitcase for weekend getaway', 'Plan itinerary for upcoming trip', 'Learn basic phrases in the language of your destination', 'Focus on your breath and clear your mind', 'Let go of stress and anxiety', 'Practice mindfulness meditation for 10 minutes'] },
  { name: 'Meditate', image: require('./assets/meditating.png'), taskCount: 7, tasks: ['Use a meditation app for a guided session', 'Attend a meditation class or workshop', 'Find a peaceful spot outdoors for meditation'] },
  { name: 'Shop', image: require('./assets/shopping.png'), taskCount: 9, tasks: ['Order household items online', 'Purchase new clothes for upcoming event', 'Visit local farmers market for fresh produce', 'Look for sustainable and eco-friendly products', 'Compare prices before making a purchase', 'Browse online stores for deals and discounts', 'Create a shopping list for essential items'] },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const renderTasks = () => {
    if (!selectedCategory) {
      return null;
    }

    return (
      <View style={styles.taskContainer}>
        {/* <Text style={styles.taskHeading}>Tasks for {selectedCategory.name}</Text> */}
        {selectedCategory.tasks.map((task, index) => (
          <View key={index} style={styles.taskBox}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInfo}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.taskCount}>14 tasks today</Text>
        </View>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/person.png')}
        />
      </View>

      <View style={styles.searchbox}>
        <View style={styles.searchSection}>
          <Image style={styles.searchIcon} source={require('./assets/search.png')} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="#888"
          />
        </View>
        <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
      </View>

      <Text style={styles.categoryHeading}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryContainer}
            onPress={() => setSelectedCategory(item)}
          >
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{item.name}</Text>
              <Text style={styles.taskCount}>{item.taskCount} tasks</Text>
            </View>
            <Image source={item.image} style={styles.categoryImage} />
          </TouchableOpacity>
        )}
      />
      <Text style={styles.categoryHeading}>Ongoing Task</Text>

      {renderTasks()}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => {
          // Handle submit functionality here
          alert('Submit button pressed!');
        }}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsl(30, 80%, 92%)',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  headerInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  taskCount: {
    fontSize: 14,
    color: '#888',
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CCC', // placeholder color
  },
  searchbox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'white',
    width:280,
    height:48,
    border:1
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    fontSize: 16,
  },
  filterIcon: {
    width: 50,
    height: 48,
    marginLeft: 10,
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 23,
    marginTop: 10
  },
  taskHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoryContainer: {
    backgroundColor: 'white',
    marginLeft: 5,
    height: 190,
    borderRadius: 8,
    padding: 5,
    marginRight: 16,
    alignItems: 'center',
  },
  categoryImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  categoryInfo: {
    marginTop: 8,
    alignItems: 'center',
    marginRight: 60
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 12,
    color: '#888',
  },
  taskContainer: {
    marginBottom: 10
  },
  taskBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 8,
  },
  taskText: {
    fontSize: 17,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
